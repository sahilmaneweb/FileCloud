import { render } from '@react-email/components';
import nodemailer from 'nodemailer';
import { Email } from '../../_components/EmailTemplate';

export async function POST(Request) {
  const { senderName, receiverEmail, fileName, fileSize, fileType, fileUrl } = await Request.json();
  console.log(Request.body);
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const emailHTML = await render(<Email senderName={senderName} receiverEmail={receiverEmail} fileName={fileName} fileSize={fileSize} fileType={fileType} fileUrl={fileUrl} />);

    const mailinfo = {
      from: process.env.NODEMAILER_EMAIL,
      to: receiverEmail,
      subject: "FileCloud - File Shared",
      html: emailHTML,
    };

    const data = await transporter.sendMail(mailinfo).catch((error) => {
      console.log(error.message);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    });

    console.log(data);
    return new Response(JSON.stringify({ data }), { status: 200 });

  } catch (error) {
    console.log(error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}