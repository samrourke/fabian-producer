import Navbar from "../../components/Nav/Nav";
import { openSauce, courierPrime } from "../fonts";
import Head from "./head";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${openSauce.variable} ${courierPrime.variable}`}
    >
      <Head />
      <body>
        {" "}
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
