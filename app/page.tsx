import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-cream">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="w-14 h-14 rounded-full bg-cobalt flex items-center justify-center mb-7">
          <span className="text-cream font-display text-2xl">T</span>
        </div>
        <h1 className="font-display text-6xl text-cobalt mb-4">Thrivar</h1>
        <p className="font-display italic text-xl text-ink mb-8">
          A transformation operating system.
        </p>
        <p className="max-w-sm text-base leading-relaxed text-ink/70 mb-10">
          Not a chatbot. Not a checklist. A structured place to understand
          where you are, what&apos;s keeping you there, and how to move
          toward who you&apos;re becoming.
        </p>
        <div className="flex gap-4">
          <Link
            href="/signup"
            className="px-8 py-3.5 rounded-full bg-cobalt text-cream text-sm"
          >
            Let&apos;s begin
          </Link>
          <Link
            href="/login"
            className="px-8 py-3.5 rounded-full border border-cobalt/30 text-cobalt text-sm"
          >
            Log in
          </Link>
        </div>
      </div>

      <div className="px-8 py-14 bg-cobalt">
        <div className="max-w-sm mx-auto divide-y divide-cream/20">
          {[
            "Six dimensions. One honest picture of where you are.",
            "A pathway built around what you actually need.",
            "A coach that already knows your story.",
          ].map((line) => (
            <p
              key={line}
              className="py-5 font-display italic text-lg text-center text-cream"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}
