import React from "react";
import Link from "next/link";
import { ArrowRightIcon, Cog8ToothIcon, MusicalNoteIcon } from "@heroicons/react/24/solid";

const FooterPromo = () => {
  return (
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
          <p className="mb-4">MusicGen is a <Link className="underline" href="https://github.com/facebookresearch/audiocraft">model developed by Facebook Research</Link> (Jade Copet, Felix Kreuk, et al).</p>
          <p className="mb-4">It uses AI to create music. It was trained on 20,000 hours of licensed music.</p>
          <p><Link className="underline" href="https://github.com/facebookresearch/audiocraft/blob/main/MODEL_CARD.md">Model card</Link></p>
        </div>
      </div>
    </div>
  );
};

export default FooterPromo;
