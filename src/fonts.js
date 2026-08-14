import localFont from "next/font/local";

export const openSauce = localFont({
  src: [
    {
      path: "../public/fonts/OpenSauceOne-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/fonts/OpenSauceOne-Medium.woff2",
      style: "normal",
      weight: "500",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const courierPrime = localFont({
  src: [
    {
      path: "../public/fonts/CourierPrime-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/fonts/CourierPrime-Bold.woff2",
      style: "normal",
      weight: "700",
    },
  ],
  variable: "--font-open-sauce",
  display: "swap",
});

export const instrumentSerif = localFont({
  src: "../public/fonts/InstrumentSerif-Regular.woff2",
  variable: "--font-instrument-serif",
  display: "swap",
});
