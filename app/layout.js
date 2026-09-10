import "./globals.css";

export const metadata = {
  title: "Codegrid Collection",
  description: "A unified collection of interactive visual experiments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
