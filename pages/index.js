import Head from "next/head";
import Meta from "../components/Meta";
import GenerateForm from "../components/GenerateForm";
import Link from "next/link";
import { ArrowRightIcon, Cog8ToothIcon, MusicalNoteIcon } from "@heroicons/react/24/solid";
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

        <div className="md:grid gap-4 md:grid-cols-2 mt-20">
          <div className="p-6 mb-6 bg-gray-100 rounded-lg">
            <div className="max-w-prose">
              <h2 className="font-bold text-2xl mb-4">
                <Cog8ToothIcon className="h-6 w-6 inline-block pb-1"></Cog8ToothIcon> Replicate
              </h2>

              <p className="mb-4">Replicate lets you run machine learning models with a few lines of code, without needing to understand how machine learning works.</p>

              <Link href="https://replicate.com/docs" className="bg-black text-white px-5 py-3 mt-2 rounded" type="submit">
                Build with Replicate <ArrowRightIcon className="h-5 w-5 inline-block"></ArrowRightIcon>
              </Link>
            </div>
          </div>
          <div className="p-6 mb-6 bg-gray-100 rounded-lg">
            <div className="max-w-prose">
              <h2 className="font-bold text-2xl mb-4">
                <MusicalNoteIcon className="h-6 w-6 inline-block"></MusicalNoteIcon> MusicGen
              </h2>

              <p className="mb-4">MusicGen is a <Link className="underline" href="https://github.com/facebookresearch/audiocraft">tool developed by Facebook Research</Link> that uses AI to create music.</p>

              <p className="mb-4">It was trained on 20,000 hours of licensed music.</p>

              <p><Link className="underline" href="https://github.com/facebookresearch/audiocraft/blob/main/MODEL_CARD.md">Model card</Link></p>
            </div>
          </div>
        </div>

        <div class="mt-8 flex flex-wrap justify-center">
          <div className="w-full md:w-1/2">

          </div>

        </div>
      </div>
    </div>
  );
}
