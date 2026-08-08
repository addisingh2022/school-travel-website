import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.formData();
  const enquiry = {
    name: data.get('name')?.toString() ?? '',
    school: data.get('school')?.toString() ?? '',
    designation: data.get('designation')?.toString() ?? '',
    city: data.get('city')?.toString() ?? '',
    phone: data.get('phone')?.toString() ?? '',
    email: data.get('email')?.toString() ?? '',
    students: data.get('students')?.toString() ?? '',
    grade: data.get('grade')?.toString() ?? '',
    message: data.get('message')?.toString() ?? '',
  };

  // This endpoint is ready for future integration with email services or CRM.
  return NextResponse.json({ success: true, data: enquiry });
}
