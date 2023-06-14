import React, { useRef, useEffect } from 'react';

const Logs = ({ logs, status = 'Starting…' }) => {
  const containerRef = useRef(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [logs]);

  return (
    <div ref={containerRef} className="block font-mono overflow-y-scroll rounded max-h-64 max-w-full mt-4 p-2 pt-3 mb-0 bg-black text-white">
      <h3 className="mb-2 text-white text-m">
        {status}
      </h3>
      <pre className="text-xs">
        {logs}
      </pre>
    </div>
  );
};

export default Logs;
