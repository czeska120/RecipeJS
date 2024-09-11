import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="bg-accent px-6 text-white text-xl font-bold text-center md:text-start md:font-bold md:text-2xl p-2">
        RecipeJS
      </nav>
      <Component {...pageProps} />
    </>
  );
}
