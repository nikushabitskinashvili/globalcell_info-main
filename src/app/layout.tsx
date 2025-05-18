import { I18nProvider } from "../i18n";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { CountryProvider } from "./context/CountryContext";

export const metadata = {
  title: "Globalcell",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Clash+Grotesk:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/globalcell.svg" />
      </head>
      <body className={`${poppins.className} body`}>
        <CountryProvider>
          <I18nProvider>
            <Header />
            {children}
            <Footer />
          </I18nProvider>
        </CountryProvider>
      </body>
    </html>
  );
}
