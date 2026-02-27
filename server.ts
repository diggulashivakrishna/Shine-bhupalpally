import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

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
        return res.status(200).json({ 
          success: true, 
          message: "Your message has been received and is being processed." 
        });
      } else {
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
