import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thrivar — A Transformation Operating System",
  description:
    "Understand where you are, what's keeping you there, and how to move toward who you're becoming.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body">{children}</body>
    </html>
  );
}
