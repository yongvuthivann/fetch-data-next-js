import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen space-y-5">
      <Head>
        <title>Data Fetching with NEXT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-lg font-bold">Data Fetching Docker</h1>
      </div>

      <nav>
        <ul className="flex space-x-5">
          <li className="cursor-pointer">
            <Link href={`/server-side-props`}>Get Server Side Props</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
