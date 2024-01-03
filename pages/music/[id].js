import Head from "next/head";
import Meta from "../../components/Meta";
import Link from 'next/link';
import Card from '../../components/Card';
import FooterPromo from "../../components/FooterPromo";
import VideoContainer from '../../components/VideoContainer';

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
  const duration = parseInt(prediction?.logs?.match(/Duration: 00:00:(\d+).00/)?.[1] ?? 8);
  return {
    props: {
      prompt: prediction.input.caption_text,
      video: prediction.output,
      audio: prediction.input.audio,
      duration,
      prediction
    },
  }
}

export default function Music({ prompt, video, audio }) {
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
          Made with <Link href="https://replicate.com/meta/musicgen?utm_source=project&utm_campaign=waveformer" className="underline underline-offset-4">MusicGen and Replicate</Link>
        </p>

        <Card>
          <VideoContainer video={video} audio={audio} />
        </Card>

        <FooterPromo />
      </div>
    </div>
  );
}
