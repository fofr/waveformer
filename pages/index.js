import Head from "next/head";
import Meta from "../components/Meta";
import GithubLogo from "../components/GithubLogo";
import ReplicateLogo from "../components/ReplicateLogo";

export default function Home() {
  return (
    <div>
      <div className="container max-w-4xl mx-auto md:px-8 px-4 py-4 pb-10 bg-white border-black min-h-screen">
        <Head>
          <title>Waveformer</title>
          <Meta />
        </Head>

        <h1 className="md:text-4xl text-3xl font-bold text-black text-center pt-10">
          Waveformer is an open&nbsp;source
          <br />
          web app built by{" "}
          <a
            className="underline underline-offset-4"
            href="https://replicate.com/docs/get-started/nextjs?utm_source=project&utm_campaign=waveformer"
          >
            Replicate
          </a>
          <br />
        </h1>

        <p className="text-xl text-black text-center my-12">
          It uses{" "}
          <a
            className="underline underline-offset-4"
            href="https://replicate.com/meta/musicgen?utm_source=project&utm_campaign=waveformer"
          >
            MusicGen
          </a>{" "}
          to generate&nbsp;music&nbsp;from&nbsp;text
        </p>

        <div className="cta my-12 justify-center items-center flex-col sm:flex sm:flex-row">
          <a
            className="text-white bg-black p-5 flex mb-2 mx-6"
            href="https://github.com/fofr/waveformer"
          >
            <GithubLogo
              width={24}
              height={24}
              className="mr-4"
              fill="#ffffff"
            />
            Code on Github
          </a>
          <a
            className="text-white bg-black p-5 flex mb-2 mx-6"
            href="https://replicate.com/collections/audio-generation?utm_source=project&utm_campaign=waveformer"
          >
            <ReplicateLogo className="mr-4" width={24} />
            Explore music models on Replicate
          </a>
        </div>

        <img
          src="/site.webp"
          alt="A screenshot of the Waveformer web app"
          className="mx-auto"
        />
      </div>
    </div>
  );
}
