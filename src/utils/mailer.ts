import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: process.env.EMAIL_SERVER,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASS
  }
});

export const sendWelcomeEmail = async (to: string, name: string) => {
  const mailOptions = {
    from: '"My App" <your-email@gmail.com>', // sender address
    to: to,
    subject: 'Welcome to My App 🎉',
    html: `<h1>Hello ${name},</h1><p>Welcome to My App! We're excited to have you.</p>`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Welcome Email Sent: ', info.messageId);
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
};
