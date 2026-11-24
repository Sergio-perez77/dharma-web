import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dharma | Veterinaria y Terapias Holísticas",
  description:
    "Bienestar integral para vos y tu compañero animal. Veterinaria, flores de Bach y sanación con símbolos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${fraunces.variable} ${nunitoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}