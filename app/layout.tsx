export const metadata = {
  title: "Chico Digital Transformation Lab — Student‑powered digital transformation",
  description:
    "Affordable student-powered digital transformation projects in Chico — POS setups, social marketing, and training. Fees support the BSIS Endowment and scholarships.",
  openGraph: {
    title: "Chico Digital Transformation Lab",
    description: "Student‑powered digital transformation for local businesses.",
  },
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
