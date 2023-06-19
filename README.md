# waveformer

https://waveformer.replicate.dev

Text to music using MusicGen. Save your generations as audio of waveform video.

## About

This is a [Next.js](https://nextjs.org/) project that uses [Replicate’s API](https://replicate.com/).

It also uses:

- [MusicGen](https://github.com/facebookresearch/audiocraft)
- the [MusicGen model on Replicate](https://replicate.com/joehoover/musicgen-melody)
- the [audio to waveform model on Replicate](https://replicate.com/fofr/audio-to-waveform)

## Usage

Install dependencies:

```console
npm install
```

Add your [Replicate API token](https://replicate.com/account#token) to `.env.local`:

```
REPLICATE_API_TOKEN=<your-token-here>
```

Run the development server:

```console
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.
