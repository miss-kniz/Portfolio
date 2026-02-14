import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mehak | Digital Product Studio",
  description:
    "Web developer and designer specializing in building exceptional digital experiences. Loves teaching and sharing knowledge. Passionate about creating user-friendly interfaces and seamless interactions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
