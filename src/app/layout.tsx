import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "НОМАРАН",
  description:
    "Северо-Осетинская республиканская общественно-благотворительная ассоциация пенсионеров и инвалидов, жертв незаконных политических репрессий",
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
