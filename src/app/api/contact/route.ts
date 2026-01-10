import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactFormSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const { name, email, phone, caseType, message } = validationResult.data;

    // Create email transporter
    // In production, use actual SMTP credentials from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content for the firm
    const firmEmailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Case Type:</strong> ${caseType}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</small></p>
    `;

    // Email content for the client
    const clientEmailContent = `
      <h2>Thank you for contacting SKS Law Associates</h2>
      <p>Dear ${name},</p>
      <p>We have received your inquiry and will get back to you within 24 hours.</p>
      <p><strong>Your submission details:</strong></p>
      <ul>
        <li><strong>Case Type:</strong> ${caseType}</li>
        <li><strong>Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</li>
      </ul>
      <p>If your matter is urgent, please call us directly at <strong>+91 86829 46765</strong>.</p>
      <br>
      <p>Best regards,</p>
      <p><strong>SKS Law Associates</strong><br>
      Advocates & Legal Consultants<br>
      Chennai, Tamil Nadu</p>
    `;

    // In development, just log the email
    if (process.env.NODE_ENV === 'development' || !process.env.SMTP_USER) {
      console.log('=== Contact Form Submission ===');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Case Type:', caseType);
      console.log('Message:', message);
      console.log('===============================');

      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully (dev mode)',
      });
    }

    // Send email to the firm
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@skslawassociates.in',
      to: process.env.CONTACT_EMAIL || 'sk.saravanan@yahoo.com',
      subject: `New Inquiry: ${caseType} - ${name}`,
      html: firmEmailContent,
      replyTo: email,
    });

    // Send confirmation email to the client
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@skslawassociates.in',
      to: email,
      subject: 'Thank you for contacting SKS Law Associates',
      html: clientEmailContent,
    });

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully. We will contact you within 24 hours.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
