import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/pages/layout"; // Adjust the path if layout.tsx is in another directory
import { WishlistProvider } from "../context/WishlistContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WishlistProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </WishlistProvider>
  );
}

