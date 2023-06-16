import { useEffect, useState } from 'react';
import Head from "next/head";
import Meta from "../../components/Meta";
import Link from 'next/link';
import Card from '../../components/Card';
import FooterPromo from "../../components/FooterPromo";
import VideoContainer from '../../components/VideoContainer';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch(`${process.env.PUBLIC_URL}/api/${id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  })

  if (!res.ok) {
    return {
      notFound: true,
    }
  }

  const prediction = await res.json();
  return {
    props: { prediction },
  }
}

export default function Music({ prediction }) {
  const prompt = prediction.input.caption_text;
  const video = prediction.output;
  const audio = prediction.input.audio;
  const title = `${prompt} – Waveformer`;

  return (
    <div>
      <div className="container max-w-4xl mx-auto md:px-8 px-4 py-4 pb-10 bg-white border-black min-h-screen">
        <Head>
          <title>{title}</title>
          <Meta prompt={prompt} video={video} />
        </Head>

        <h1 className="calistoga md:text-6xl text-4xl text-black text-center mb-6 pt-10">
          <Link href="/">Waveformer</Link>
        </h1>

        <p className="text-center md:mb-10 mb-6 -mt-2 md:text-2xl">
          Made with <Link className="underline underline-offset-4" href="https://github.com/facebookresearch/audiocraft#musicgen">MusicGen</Link> and <Link href="https://replicate.com/joehoover/musicgen-melody" className="underline underline-offset-4">Replicate</Link>
        </p>

        <Card>
          <VideoContainer video={video} audio={audio} />
        </Card>

        <div className="flex flex-row items-center">
          <Link
            href="/"
            className="text-center w-full bg-violet-800 text-white px-5 py-3 mt-2 rounded"
          >
            Make more music <ArrowRightIcon className="h-5 w-5 inline-block"></ArrowRightIcon>
          </Link>
        </div>

        <FooterPromo />
      </div>
    </div>
  );
}
