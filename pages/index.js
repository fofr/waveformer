import Head from "next/head";
import Meta from "../components/Meta";
import GenerateForm from "../components/GenerateForm";
import Link from "next/link";
const title = "Waveformer";

export default function Home() {
  return (
    <div>
      <div className="container max-w-4xl mx-auto px-8 py-4 pb-10 bg-white border-black min-h-screen">
        <Head>
          <title>Waveformer</title>
          <Meta />
        </Head>

        <h1 className="calistoga md:text-8xl text-6xl text-black text-center mb-6 pt-10">
          {title}
        </h1>

        <p className="text-center mb-10 -mt-2 text-2xl">
          Make music from text with <Link className="hover:bg-violet-900 underline underline-offset-2 hover:no-underline bg-black text-white px-2 py-1 rounded" href="https://replicate.com/joehoover/musicgen-melody">MusicGen</Link> and <Link href="https://replicate.com/" className="hover:bg-violet-900 underline underline-offset-2 hover:no-underline bg-black text-white px-2 py-1 rounded">Replicate</Link>
        </p>

        <GenerateForm />
      </div>
    </div>
  );
}
