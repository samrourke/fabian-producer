import Head from "./head";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://fabianprynn.com/"),
  title: {
    default: "Fabian Prynn",
  },
  description:
    "Fabian Prynn is a Producer, Engineer, Mixer and Drummer based in London. He has worked with artists including Ex, Clara Mann, Douglas Dare and Declan McKenna, bringing a distinctive, artist-focused approach to recording and production. His work spans production, mixing, engineering and performance, and he is based at 4AD Studios in London.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        {" "}
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
