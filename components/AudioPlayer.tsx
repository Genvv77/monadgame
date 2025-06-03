"use client";

import React, { RefObject, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

type AudioControlProps = {
  audioRef: RefObject<HTMLAudioElement | null>;
};

const AudioControl: React.FC<AudioControlProps> = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex items-center group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <img
        src="/v-image.jpg"
        alt="music"
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full shadow-md object-cover cursor-pointer transition-transform ${
          isPlaying ? "animate-spin-slow" : ""
        }`}
      />

      {showControls && (
        <button
          onClick={togglePlay}
          className="ml-2 p-2 bg-black text-white rounded-full shadow hover:bg-gray-800 transition"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      )}
    </div>
  );
};

export default AudioControl;



