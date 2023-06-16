import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

const DownloadButton = ({ href, text }) => {
  return (
    <a
      href={href}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="flex-grow bg-white hover:bg-green-100 border-2 border-green-600 text-green-600 rounded-md block px-5 py-3"
    >
      <ArrowDownTrayIcon className="h-6 w-6 text-color-white inline-block" /> {text}
    </a>
  );
};

export default DownloadButton;
