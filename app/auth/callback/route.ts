import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Handles the link Supabase emails after sign-up, exchanging the one-time
// code for a real session before sending the user into the app.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(`${origin}/dashboard`);
}
