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

            const {
                name,
                email,
                phone,
                dates,
                guests,
                message,
                yachtInterest,
            } = request.body;

            if (
                !name ||
                !email
            ) {
                return respond.status(400).json({ error: "Missing required fields" });
            }

            const mailOptions = {
                from: process.env.SMTP_FROM,
                to,
                subject: "New Yacht Charter Inquiry",
                html: generateEmail({
                    name,
                    email,
                    phone,
                    dates,
                    guests,
                    message,
                    yachtInterest,
                }),
            };

            await transporter.sendMail(mailOptions);
            return respond.status(200).json({ message: "Email sent successfully" });
        } catch (error) {
            console.error("Error sending email:", error);
            return respond.status(500).json({ error: "Failed to send email" });
        }
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "10mb",
        },
    },
};

function generateEmail({
    name,
    email,
    phone,
    dates,
    guests,
    message,
    yachtInterest,
}: {
    name: string;
    email: string;
    phone?: string;
    dates?: string;
    guests?: string;
    message?: string;
    yachtInterest?: string;
}) {
    return `
        <html>
            <head>
                <style>
                    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f7; color: #333; margin: 0; padding: 0; }
                    .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); overflow: hidden; }
                    .header { background: #0f172a; color: white; padding: 40px; text-align: center; }
                    .header h1 { margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 1px;}
                    .content { padding: 40px; }
                    .content h2 { font-size: 20px; font-weight: 600; color: #0f172a; margin-top: 0; margin-bottom: 20px; }
                    .info-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
                    .info-item { background: #f9fafb; padding: 20px; border-radius: 5px; }
                    .info-label { font-weight: 600; color: #374151; margin-bottom: 8px; font-size: 14px; }
                    .info-value { font-size: 16px; color: #555; }
                    .message-section { margin-top: 30px; }
                    .footer { background: #f4f4f7; text-align: center; padding: 20px; font-size: 12px; color: #777; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>New Yacht Charter Inquiry</h1>
                    </div>
                    <div class="content">
                        <h2>Client Details</h2>
                        <div class="info-grid">
                            <div class="info-item">
                                <div class="info-label">Name</div>
                                <div class="info-value">${name}</div>
                            </div>
                            <div class="info-item">
                                <div class="info-label">Email</div>
                                <div class="info-value">${email}</div>
                            </div>
                            ${phone ? `
                            <div class="info-item">
                                <div class="info-label">Phone</div>
                                <div class="info-value">${phone}</div>
                            </div>` : ''}
                            ${dates ? `
                            <div class="info-item">
                                <div class="info-label">Preferred Dates</div>
                                <div class="info-value">${dates}</div>
                            </div>` : ''}
                            ${guests ? `
                            <div class="info-item">
                                <div class="info-label">Number of Guests</div>
                                <div class="info-value">${guests}</div>
                            </div>` : ''}
                            ${yachtInterest ? `
                            <div class="info-item">
                                <div class="info-label">Yacht of Interest</div>
                                <div class="info-value">${yachtInterest}</div>
                            </div>` : ''}
                        </div>
                        ${message ? `
                        <div class="message-section">
                            <h2>Message</h2>
                            <div class="info-item">
                                <div class="info-value">${message}</div>
                            </div>
                        </div>` : ''}
                    </div>
                    <div class="footer">
                        <p>Riviera Yachts | &copy; ${new Date().getFullYear()} All Rights Reserved</p>
                    </div>
                </div>
            </body>
        </html>
    `;
} 