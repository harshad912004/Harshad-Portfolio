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

const siteUrl = "https://harshad-portfolio-blush.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Harshad Dhongade | Software Engineer & Full Stack Developer Portfolio",
    template: "%s | Harshad Dhongade",
  },
  description:
    "Official portfolio of Harshad Dhongade - Software Engineer, Full Stack Web Developer & MCA student specializing in Java, React, Node.js, Express, and database optimization.",
  keywords: [
    "Harshad Dhongade",
    "Harshad",
    "Harshad Dhongade Portfolio",
    "Harshad Software Engineer",
    "Harshad Developer",
    "Harshad Dhongade Developer",
    "Full Stack Developer",
    "Software Engineer Portfolio",
    "Backend Developer",
    "Java Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "MySQL",
    "MCA Student India",
  ],
  authors: [{ name: "Harshad Dhongade", url: siteUrl }],
  creator: "Harshad Dhongade",
  publisher: "Harshad Dhongade",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Harshad Dhongade | Software Engineer & Full Stack Developer Portfolio",
    description:
      "Explore the software engineering projects, technical skills, experience, and certifications of Harshad Dhongade.",
    url: siteUrl,
    siteName: "Harshad Dhongade Portfolio",
    images: [
      {
        url: "/HD_Photo_New.jpg",
        width: 1200,
        height: 630,
        alt: "Harshad Dhongade - Software Engineer & Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshad Dhongade | Software Engineer & Full Stack Developer Portfolio",
    description:
      "Explore the software engineering projects, technical skills, experience, and certifications of Harshad Dhongade.",
    images: ["/HD_Photo_New.jpg"],
    creator: "@harshad912004",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googlef3aefb68bdd7b31a",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Harshad Dhongade",
      alternateName: ["Harshad", "Harshad Dhongade Portfolio", "Harshad Tech", "Harshad Developer"],
      jobTitle: "Software Engineer & Full Stack Developer",
      url: siteUrl,
      image: `${siteUrl}/HD_Photo_New.jpg`,
      sameAs: [
        "https://github.com/harshad912004",
        "https://linkedin.com/in/harshad-dhongade",
      ],
      knowsAbout: [
        "Software Engineering",
        "Full Stack Web Development",
        "Java",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "REST APIs",
        "Database Optimization",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Master of Computer Applications (MCA)",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Harshad Dhongade Portfolio",
      description: "Software Engineer & Full Stack Developer Portfolio of Harshad Dhongade",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Harshad Dhongade - Software Engineer Portfolio",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${firaCode.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#0d1b2a] text-[#e0e1dd] min-h-screen selection:bg-[#ff5d5d] selection:text-[#0d1b2a]">
        {children}
      </body>
    </html>
  );
}
