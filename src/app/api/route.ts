import { render } from '@react-email/components';
import WelcomeEmail from '../emails/WelcomeEmail';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, userFirstname } = await request.json();

    const html = render(< WelcomeEmail userFirstname={userFirstname} />);

    const { data, error } = await resend.emails.send({
      from: 'e-ticko <noreply@olivebishop.me>',
      to: [email],
      subject: 'Thank you for e-ticko events ticket purchase!',
      html: html,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
