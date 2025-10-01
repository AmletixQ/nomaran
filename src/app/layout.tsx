import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "НОМАРАН",
  description: "Северо-Осетинская республиканская общественно-благотворительная ассоциация пенсионеров и инвалидов, жертв незаконных политических репрессий",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
