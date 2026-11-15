import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manas Kummarapurugu | Portfolio",
  description: "Manas Kummarapurugu — Computer Science and Economics at Rutgers University–New Brunswick, graduating January 2028. Experience and projects in AI, machine learning, and software engineering.",
  metadataBase: new URL('https://manaskumm.github.io'),
  alternates: { canonical: '/' },
  icons: { icon: '/assets/images/manas-logo.webp' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
