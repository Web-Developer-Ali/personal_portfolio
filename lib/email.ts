import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmails(data: ContactFormData) {
  const { name, email, message } = data;

  try {
    // Email to Ali (portfolio owner)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "alihamzashoaibahmed@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: #fff; padding: 15px; border-radius: 4px; border-left: 4px solid #3b82f6;">
              ${message}
            </p>
          </div>
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            This is an automated email from your portfolio contact form.
          </p>
        </div>
      `,
    });

    // Confirmation email to the person who submitted
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We Received Your Message - Ali Hamza",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Thank you for reaching out!</h2>
          <p style="color: #374151;">Hi ${name},</p>
          <p style="color: #374151; line-height: 1.6;">
            Thank you for contacting me through my portfolio. I've received your message and will get back to you as soon as possible, typically within 24 hours.
          </p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #6b7280; margin: 0;"><strong>Your Message Summary:</strong></p>
            <p style="color: #374151; margin-top: 10px; white-space: pre-wrap;">
              ${message}
            </p>
          </div>
          <p style="color: #374151; line-height: 1.6;">
            In the meantime, feel free to check out my portfolio to see more of my work. You can also reach me directly on:
          </p>
          <ul style="color: #374151; line-height: 1.8;">
            <li>Email: alihamzashoaibahmed@gmail.com</li>
            <li>GitHub: <a href="https://github.com/Web-Developer-Ali" style="color: #3b82f6;">github.com/Web-Developer-Ali</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/ali-hamza-shoaib" style="color: #3b82f6;">linkedin.com/in/ali-hamza-shoaib</a></li>
          </ul>
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
            Best regards,<br/>
            Ali Hamza<br/>
            Full-Stack Developer | CRM Tool Specialist
          </p>
        </div>
      `,
    });

    return { success: true, message: "Emails sent successfully" };
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error("Failed to send emails");
  }
}
