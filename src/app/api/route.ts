import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import WelcomeEmailTemplate from '../../app/emails/WelcomeEmailTemplate';
import { render } from '@react-email/components'; // Import the render function

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Render the WelcomeEmail component
    
    const emailContent = render(WelcomeEmailTemplate({ userFirstname: "olive", ticketId: "123456" }));


    
    console.log('Sending email:', emailContent); // Log the email content for debugging

    // Send the email using Resend
    const response = await resend.emails.send({
      from: 'e-ticko <noreply@olivebishop.me>',
      to: [email],
      reply_to: 'support@olivebishop.me',
      subject: 'Thank you for using e-ticko events ticket purchase!',
      react: emailContent,
    });

    console.log('Email response:', response); // Log the email send response for debugging

    return res.status(200).json({ status: 200, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
