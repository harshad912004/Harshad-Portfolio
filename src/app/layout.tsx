import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harshad Dhongade | Software Developer Portfolio",
  description: "Professional software engineer portfolio specializing in building scalable full-stack web applications, designing RESTful APIs, and optimizing database performance.",
  keywords: ["Software Engineer", "Full Stack Developer", "Backend Developer", "Java Developer", "React Developer", "Next.js", "TypeScript"],
  authors: [{ name: "Harshad Dhongade" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Harshad Dhongade | Software Developer Portfolio",
    description: "Software Engineer specializing in building scalable full-stack web applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshad Dhongade | Software Developer Portfolio",
    description: "Software Engineer specializing in building scalable full-stack web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${firaCode.variable}`}>
      <body className="font-sans antialiased bg-gray-950 text-gray-150 min-h-screen selection:bg-orange-550 selection:text-gray-950">
        {children}
      </body>
    </html>
  );
}
