import nodemailer from 'nodemailer';
import user from '@/models/user'; // Assuming your User model is exported as User
import bcrypt from 'bcrypt';

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // create a hashed token
    const saltRounds = 10;
    const plainToken = userId.toString();
    const hashedToken = await bcrypt.hash(plainToken, saltRounds);

    if (emailType === 'VERIFY') {
      await user.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === 'RESET') {
      await user.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASSWORD
      }
    });

    const mailOptions = {
      from: 'bleeul19@gmail.com',
      to: email,
      subject: emailType === 'VERIFY' ? 'Verify your Account' : 'Reset Your Password',
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; text-align: center;">
          <h2 style="color: #333;">Welcome to E-Commerce!</h2>
          <p style="color: #555;">Thank you for signing up. To get started, please verify your account by clicking the link below:</p>
          <a style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px; margin-top: 15px;"
              href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">${emailType === 'VERIFY' ? 'Verify Me' : 'Reset Password'}</a>
          <p style="color: #777; margin-top: 20px;">
              If the button above doesn't work, you can also copy and paste the following link into your browser:
          </p>
            <p style="color: #777; word-wrap: break-word; background-color: #f4f4f4; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
              ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
          </p>
          <p style="color: #888; margin-top: 30px;">Best regards, E-Commerce Team</p>
        </div>
        
      `,
    };    

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
