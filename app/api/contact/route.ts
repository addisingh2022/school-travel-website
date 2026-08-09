import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.formData();

    const enquiry = {
      name: data.get('name')?.toString() ?? '',
      school: data.get('school')?.toString() ?? '',
      designation: data.get('designation')?.toString() ?? '',
      city: data.get('city')?.toString() ?? '',
      phone: data.get('phone')?.toString() ?? '',
      email: data.get('email')?.toString() ?? '',
      message: data.get('message')?.toString() ?? '',
    };

    const { data: emailData, error } = await resend.emails.send({
      from: 'Beyond4Walls <info@beyond4walls.in>',
      to: ['beyond4wallseducation@gmail.com'],
      subject: `New enquiry from ${enquiry.name}`,
      replyTo: enquiry.email,
      text: `
New Beyond4Walls Enquiry

Name: ${enquiry.name}
School: ${enquiry.school}
Designation: ${enquiry.designation}
City: ${enquiry.city}
Phone: ${enquiry.phone}
Email: ${enquiry.email}

Message:
${enquiry.message}
      `,
    });

    if (error) {
      console.error('Resend error:', error);

      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry sent successfully',
      id: emailData?.id,
    });
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { success: false, error: 'Failed to send enquiry' },
      { status: 500 }
    );
  }
}