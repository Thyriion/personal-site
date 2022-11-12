import Head from "next/head";
import Navigation from "../components/Navbar/Navigation";
import UeberMich from "../components/UeberMich";
import Skills from "../components/Skills";
import Referenzen from "../components/Referenzen";

export default function Home() {
  return (
    <div className="bg-gray-800 min-h-screen h-full relative">
      <Head>
        <title>Kevin Schüler</title>
        <meta
          name="description"
          content="Persönliche Seite von Kevin Schüler"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="h-20 top-0 z-50">
        <Navigation />
      </header>

      <main className="p-4 mx-auto max-w-7xl h-fit text-center">
        <h2 id="UeberMich" className="py-10 text-5xl">
          Über Mich
        </h2>
        <UeberMich />
        <h2 id="Skills" className="py-10 text-5xl">
          Skills
        </h2>
        <Skills />

        <h2 id="Referenzen" className="py-10 text-5xl">
          Referenzen
        </h2>
        <Referenzen />
      </main>

      <footer></footer>
    </div>
  );
}
