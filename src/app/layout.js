import Navbar from "../../components/Nav/Nav";
import Head from "./head";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        {" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
