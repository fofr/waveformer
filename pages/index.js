import Head from "next/head";
import Meta from "../components/Meta";
import GenerateForm from "../components/GenerateForm";
import Link from "next/link";
import FooterPromo from "../components/FooterPromo";
const title = "Waveformer";

export default function Home() {
  return (
    <div>
      <div className="container max-w-4xl mx-auto md:px-8 px-4 py-4 pb-10 bg-white border-black min-h-screen">
        <Head>
          <title>Waveformer</title>
          <Meta />
        </Head>

        <h1 className="calistoga md:text-8xl text-5xl text-black text-center mb-6 pt-10">
          {title}
        </h1>

        <p className="text-center mb-10 -mt-2 md:text-2xl text-xl">
          Make music from text with <Link className="hover:bg-violet-900 underline md:underline-offset-4 hover:no-underline bg-black text-white md:px-2 md:py-1 px-1 rounded" href="https://github.com/facebookresearch/audiocraft#musicgen">MusicGen</Link>&nbsp;and <Link href="https://replicate.com/joehoover/musicgen-melody?utm_source=project&utm_campaign=waveformer" className="hover:bg-violet-900 underline md:underline-offset-4 hover:no-underline bg-black text-white md:px-2 px-1 md:py-1 rounded">Replicate</Link>
        </p>

        <GenerateForm />
        <FooterPromo />
      </div>
    </div>
  );
}
