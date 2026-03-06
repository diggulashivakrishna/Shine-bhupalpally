import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Email Transporter Configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Route for Enrollment Applications
  app.post("/api/enroll", async (req, res) => {
    const formData = req.body;
    const recipientEmail = "diggulashivakrishna@gmail.com";

    console.log(`[BACKEND] Processing enrollment application for ${formData.studentName}...`);

    try {
      // 1. Send Email Notification
      const mailOptions = {
        from: process.env.SMTP_USER || "noreply@shinehighschool.edu",
        to: recipientEmail,
        subject: `New Enrollment Application: ${formData.studentName}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h2 style="color: #F27D26; border-bottom: 2px solid #F27D26; padding-bottom: 10px;">New Enrollment Application</h2>
            
            <h3 style="color: #151619;">Student Information</h3>
            <p><strong>Name:</strong> ${formData.studentName}</p>
            <p><strong>Date of Birth:</strong> ${formData.dob}</p>
            <p><strong>Gender:</strong> ${formData.gender}</p>
            <p><strong>Grade Applying For:</strong> ${formData.grade}</p>
            <p><strong>Previous School:</strong> ${formData.previousSchool || 'N/A'}</p>
            
            <h3 style="color: #151619;">Parent/Guardian Information</h3>
            <p><strong>Name:</strong> ${formData.parentName}</p>
            <p><strong>Relationship:</strong> ${formData.relationship}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Address:</strong> ${formData.address}</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
              <p>This application was submitted via the Shine High School website.</p>
            </div>
          </div>
        `,
      };

      // Only attempt to send if SMTP credentials are provided
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
        console.log("[BACKEND] Email notification sent successfully");
      } else {
        console.warn("[BACKEND] SMTP credentials missing. Email not sent, but application logged.");
        console.log("Application Data:", JSON.stringify(formData, null, 2));
      }

      return res.status(200).json({ 
        success: true, 
        message: "Application submitted successfully. We will contact you soon." 
      });

    } catch (error: any) {
      console.error("Error processing enrollment:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to submit application. Please try again later." 
      });
    }
  });

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message, type } = req.body;

    console.log(`[BACKEND] Forwarding ${type} inquiry from ${name} to Hostinger...`);

    try {
      const hostingerUrl = "https://builder-backend.hostinger.com/u1/data/v3/post/VzjYCvHZoF2iKQbJmpCCVlzcplHv1XVv";
      
      // Many form backends expect application/x-www-form-urlencoded
      const formData = new URLSearchParams();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('subject', subject);
      formData.append('message', message);
      formData.append('type', type);
      formData.append('_source', 'Shine High School Website');

      const response = await fetch(hostingerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: formData.toString(),
      });

      if (response.ok) {
        console.log("[BACKEND] Successfully forwarded to Hostinger");
        
        // Also send email notification if SMTP is configured
        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
          const recipientEmail = "diggulashivakrishna@gmail.com";
          const mailOptions = {
            from: process.env.SMTP_USER || "noreply@shinehighschool.edu",
            to: recipientEmail,
            subject: `New Contact Inquiry: ${subject}`,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                <h2 style="color: #F27D26; border-bottom: 2px solid #F27D26; padding-bottom: 10px;">New Contact Inquiry</h2>
                <p><strong>From:</strong> ${name} (${email})</p>
                <p><strong>Type:</strong> ${type}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #F27D26;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            `,
          };
          await transporter.sendMail(mailOptions);
          console.log("[BACKEND] Contact email notification sent successfully");
        }

        return res.status(200).json({ 
          success: true, 
          message: "Your message has been received and is being processed." 
        });
      }
 else {
        const errorText = await response.text();
        console.error("[BACKEND] Hostinger returned error:", response.status, errorText);
        
        // Return a more descriptive error to the frontend for debugging
        return res.status(response.status).json({ 
          success: false, 
          message: `Service Error (${response.status}). Please try again later.` 
        });
      }

    } catch (error: any) {
      console.error("Error forwarding to Hostinger:", error);
      res.status(500).json({ 
        success: false, 
        message: "Connection failed. Please check your internet or try again later." 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
