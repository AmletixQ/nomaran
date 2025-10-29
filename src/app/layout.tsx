import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Номаран – Память Имен",
  description:
    "Северо-Осетинская региональная общественная организация «Ассоциация жертв политических репрессий «Номаран (Память Имен)»».",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="mx-auto max-w-[95%]">
        <Header />
        {children}
      </body>
    </html>
  );
}
