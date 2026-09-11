import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bashmati Tech | Technology, Projects & Innovation",
  description:
    "Bashmati Tech — technology projects, digital innovation, tutorials, and online community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
