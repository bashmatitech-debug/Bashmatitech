import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, role, location } = body;

    // Basic validation
    if (!name || !email || !role || !location) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // 1. Save to Supabase
    const { error: dbError } = await supabaseAdmin
      .from("signups")
      .insert([{ name, email, role, location }]);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Could not save sign-up." },
        { status: 500 }
      );
    }

    // 2. Send email notification (non-blocking for the user's success
    // response — if email fails, the sign-up is still saved)
    try {
      await resend.emails.send({
        from: "Nigeria Tour <onboarding@resend.dev>", // replace with your verified domain sender once set up
        to: process.env.NOTIFY_EMAIL!, // e.g. Bashmatitech@gmail.com
        subject: `New Nigeria Tour sign-up: ${name}`,
        html: `
          <h2>New sign-up</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Role:</strong> ${role}</p>
          <p><strong>Location:</strong> ${location}</p>
        `,
      });
    } catch (emailError) {
      console.error("Resend email error:", emailError);
      // Don't fail the request just because the email didn't send
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Signup route error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
