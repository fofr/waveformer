import React, { useState, Fragment } from 'react';
import { ClipboardDocumentIcon } from '@heroicons/react/24/solid';

const CopyButton = ({ text, copiedText }) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = (e) => {
    e.preventDefault();
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(function() {
      setIsCopied(true);
    });
  };

  return (
    <Fragment>
      {!isCopied && (
        <button
          onClick={copyToClipboard}
          className="flex-grow bg-white hover:bg-green-100 border-2 border-green-600 text-green-600 rounded-md block px-5 py-3"
        >
          <ClipboardDocumentIcon className="h-6 w-6 text-color-white inline-block" /> {text}
        </button>
      )}
      {isCopied && (
        <button
        onClick={copyToClipboard}
        className="flex-grow bg-green-600 hover:bg-green-900 border-2 border-green-600 text-white rounded-md block px-5 py-3"
      >
        <ClipboardDocumentIcon className="h-6 w-6 text-color-white inline-block" /> {copiedText}
      </button>
      )}
    </Fragment>
  );
};

export default CopyButton;
