import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from "next/head";
import Meta from "../../components/Meta";
import Link from 'next/link';
import Card from '../../components/Card';
import FooterPromo from "../../components/FooterPromo";
import VideoContainer from '../../components/VideoContainer';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function List() {
  const router = useRouter();
  const [prompt, setPrompt] = useState('');
  const [audio, setAudio] = useState('');
  const [video, setVideo] = useState('');
  const [prediction, setPrediction] = useState({});

  const fetchPrediction = async (id) => {
    fetch(`/api/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setAudio(data.input.audio)
      setPrompt(data.input.caption_text)
      setVideo(data.output)
      setPrediction(data);
      console.log(data)
    })
    .catch((error) => {
      console.error('Failed to generate:', error);
    });
  };

  useEffect(() => {
    if (router.query.id) {
      fetchPrediction(router.query.id);
    }
  }, [router.query]);

  return (
    <div>
      <div className="container max-w-4xl mx-auto px-8 py-4 pb-10 bg-white border-black min-h-screen">
        <Head>
          <title>Waveformer</title>
          <Meta />
        </Head>

        <h1 className="calistoga md:text-6xl text-4xl text-black text-center mb-6 pt-10">
          Waveformer
        </h1>

        <p className="text-center mb-10 -mt-2 text-2xl">
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
