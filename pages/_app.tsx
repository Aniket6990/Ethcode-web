import "../styles/globals.css";
import "../styles/Navbar.css";
import "../styles/Home.css";
import "../styles/RectangleCard.css";
import "../styles/CircleCard.css";
import "../styles/Footer.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
