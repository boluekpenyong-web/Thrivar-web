import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./LogoutButton";

// Phase 1: proves the auth + hosting + database loop end to end.
// The real assessment/profile/plan/coach experience arrives in Phases 2-3.
export default async function DashboardPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-cream px-6 py-10">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <span className="font-display text-xl text-cobalt">Thrivar</span>
          <LogoutButton />
        </div>
        <h1 className="font-display text-3xl text-ink mb-2">
          You&apos;re in.
        </h1>
        <p className="text-ink/60">
          Logged in as {user.email}. Your assessment, transformation profile,
          plan, and coach will live here starting in Phase 2.
        </p>
      </div>
    </main>
  );
}
