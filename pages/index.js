import Head from "next/head";
import Meta from "../components/Meta";
const title = "Waveformer";

export default function Home() {
  return (
    <div>
      <div className="container max-w-4xl mx-auto px-8 py-4 pb-10 bg-white border-black min-h-screen">
        <Head>
          <title>Waveformer</title>
          <Meta />
        </Head>

        <h1 className="calistoga md:text-8xl text-6xl text-black text-center mb-12 pt-10">
          {title}
        </h1>
      </div>
    </div>
  );
}
