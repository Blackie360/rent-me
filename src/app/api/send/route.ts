
import { Resend } from 'resend';
import WelcomeEmailTemplate from '../../emails/WelcomeEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

 
    
    export async function POST() {
      try {
    // Send the email using Resend
    const data = await resend.emails.send({
      from: 'e-ticko <noreply@olivebishop.me>',
      to:  ['delivered@resend.dev'],
      reply_to: 'support@olivebishop.me',
      subject: 'Thank you for using e-ticko events ticket purchase!',
      react:WelcomeEmailTemplate({ userFirstname: "olive", ticketId: "123456" })
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
