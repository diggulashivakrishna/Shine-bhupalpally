import nodemailer from "nodemailer";

export const handler = async (event) => {
  const formData = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "anishetty21@gmail.com",
      bcc: "shivakrishna2006it@gmail.com",      
      subject: `New Enrollment Application: ${formData.studentName}`,
      html: `
        <h2>New Enrollment Application</h2>
        <p><b>Name:</b> ${formData.studentName}</p>
        <p><b>DOB:</b> ${formData.dob}</p>
        <p><b>Grade:</b> ${formData.grade}</p>
        <p><b>Parent:</b> ${formData.parentName}</p>
        <p><b>Email:</b> ${formData.email}</p>
        <p><b>Phone:</b> ${formData.phone}</p>
        <p><b>Address:</b> ${formData.address}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Application submitted successfully",
      }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Failed to submit application",
      }),
    };
  }
};