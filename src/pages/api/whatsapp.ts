import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

export default async function handler(
    request: NextApiRequest,
    respond: NextApiResponse<{ message: string } | { error: string }>
) {
    if (request.method === "POST") {
        try {
            const to = ["ivan@felicita.group", "julien@twwyachts.com"];

            const mailOptions = {
                from: process.env.SMTP_FROM,
                to,
                subject: "New Lead via WhatsApp | Riviera Yachts",
                html: generateWhatsAppEmail(),
            };

            await transporter.sendMail(mailOptions);
            return respond.status(200).json({ message: "Email sent successfully" });
        } catch (error) {
            console.error("Error sending email:", error);
            return respond.status(500).json({ error: "Failed to send email" });
        }
    } else {
        respond.setHeader("Allow", ["POST"]);
        return respond.status(405).end(`Method ${request.method} Not Allowed`);
    }
}

function generateWhatsAppEmail() {
    return `
        <html>
            <head>
                <style>
                    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f7; color: #333; margin: 0; padding: 0; }
                    .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); overflow: hidden; }
                    .header { background: #0f172a; color: white; padding: 30px; text-align: center; }
                    .header h1 { margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 1px;}
                    .content { padding: 40px; }
                    .content p { font-size: 16px; line-height: 1.6; color: #555; }
                    .footer { background: #f4f4f7; text-align: center; padding: 20px; font-size: 12px; color: #777; }
                    .button { display: inline-block; padding: 12px 24px; background: #10b981; color: white; text-decoration: none; border-radius: 5px; font-weight: 500; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>New WhatsApp Lead</h1>
                    </div>
                    <div class="content">
                        <p>A potential client has initiated contact via the WhatsApp button on the Riviera Yachts website.</p>
                        <p>This is a notification that a new lead has been generated from our website. Please follow up promptly.</p>
                        <p style="text-align: center; margin-top: 30px;">
                            <a href="https://wa.me/+33675196698?text=I am reaching out in reference to a yacht charter from the Riviera Yachts website." class="button">Open WhatsApp</a>
                        </p>
                    </div>
                    <div class="footer">
                        <p>Riviera Yachts | &copy; ${new Date().getFullYear()} All Rights Reserved</p>
                    </div>
                </div>
            </body>
        </html>
    `;
} 