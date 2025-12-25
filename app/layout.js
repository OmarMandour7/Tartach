import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
    metadataBase: new URL("https://tartash.netlify.app/"), // غيّرها لدومينك الحقيقي
    title: {
        default: "Tartash  Menu",
        template: "%s | Tartash",
    },
    description:
        "Explore Tartash’s fresh tropical juices and specials. View the full  menu with prices, photos.",
    applicationName: "Tartash Menu",
    keywords: [
        "Tartash",
        "juice menu",
        "tropical juice",
        "fresh juice",

        "menu QR",
        "عصائر",
        "منيو",
        "منيو إلكتروني",
        "طرطش",
    ],
    authors: [{ name: "Tartash" }],
    creator: "Tartash",
    publisher: "Tartash",

    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://tartash.netlify.app/", // غيّرها
        siteName: "Tartash Menu",
        title: "Tartash  Menu",
        description:
            "Fresh tropical juices, updated menu pages, and quick access to socials & location.",
        images: [
            {
                url: "/Logo.png", // حط صورة 1200x630 في public/og.jpg
                width: 1200,
                height: 630,
                alt: "Tartash  Menu",
            },
        ],
    },



    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },

  // اختياري (لو هتعمل PWA)
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    category: "food",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
