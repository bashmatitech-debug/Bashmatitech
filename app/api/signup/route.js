import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, role, location } = body;

    // TODO: Connect Supabase or Email provider here
    console.log("New Nigeria Tour Signup:", { name, email, role, location });

    return NextResponse.json({ success: true, message: "Sign-up received!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to save sign-up" }, { status: 500 });
  }
}