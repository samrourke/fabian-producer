import Navbar from "../../components/Nav/Nav";
import { openSauce, courierPrime, instrumentSerif } from "../fonts";
import Head from "./head";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${openSauce.variable} ${courierPrime.variable} ${instrumentSerif.variable}`}
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
