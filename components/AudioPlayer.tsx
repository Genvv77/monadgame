"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaVolumeUp,
  FaVolumeMute,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const playlist = [
  { title: "Nightcall - Kavinsky ft. Angèle", src: "/Nightcall.mp3" },
  { title: "Move - Adam Port ft. Camila Cabello", src: "/Move.mp3" },
  { title: "Sesso e Samba - Tony Effe ft. Gaia", src: "/samba.mp3" },
  { title: "I Adore You - HUGEL", src: "/adore you.mp3" },
  { title: "Jolie Fille - Maz ft. Layefa", src: "/jolie.mp3" },
  { title: "Fama - HMWME", src: "/FAMA.mp3" },
  { title: "Madrina - Maes ft. Booba", src: "/Madrina.mp3" },
  { title: "Toto - Noizy ft. Raf Camora", src: "/toto.mp3" },
];

export default function AudioPlayerWithPlaylist() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const currentTrack = playlist[currentTrackIndex];

  const fadeInAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0;
    const fadeTarget = volume;
    let currentVolume = 0;
    const step = 0.03;

    const interval = setInterval(() => {
      currentVolume = Math.min(currentVolume + step, fadeTarget);
      if (audio) audio.volume = currentVolume;
      if (currentVolume >= fadeTarget) clearInterval(interval);
    }, 150);
  };

  useEffect(() => {
    const handleAutoplay = () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.src = playlist[currentTrackIndex].src;
      audio.play().then(() => {
        setIsPlaying(true);
        fadeInAudio();
      }).catch((err) => {
        console.log("Autoplay failed", err);
      });
    };
    window.addEventListener("audio-autoplay-start", handleAutoplay);
    return () => {
      window.removeEventListener("audio-autoplay-start", handleAutoplay);
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = currentTrack.src;
    if (isPlaying) {
      audio.play().then(fadeInAudio).catch(console.error);
    }
  }, [currentTrackIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(fadeInAudio).catch(console.error);
      setIsPlaying(true);
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  const handleVolumeToggle = () => {
    const newVolume = volume > 0 ? 0 : 0.3;
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(audio.currentTime);
    setDuration(audio.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return (
    <div className="w-[310px] mx-auto mb-4 z-50 sm:fixed sm:bottom-4 sm:right-4 sm:mx-0">
      <audio
        ref={audioRef}
        onEnded={nextTrack}
        onTimeUpdate={handleTimeUpdate}
        preload="none"
      />
      <div className="bg-zinc-900 p-4 rounded-xl shadow-lg text-white space-y-2 mb-1">
        <div className="flex justify-between items-center">
          <button onClick={prevTrack}><FaBackward /></button>
          <button onClick={togglePlay} className="text-2xl">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={nextTrack}><FaForward /></button>
          <button onClick={handleVolumeToggle}>
            {volume > 0 ? <FaVolumeUp /> : <FaVolumeMute />}
          </button>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <FaChevronDown /> : <FaChevronUp />}
          </button>
        </div>
        <div className="marquee text-xs font-semibold text-purple-300 truncate">
          <span>{currentTrack.title}</span>
        </div>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="w-full"
        />
      </div>

      {isExpanded && (
        <div className="relative mt-3 w-full max-w-md mx-auto rounded-2xl bg-zinc-900/90 backdrop-blur-md shadow-2xl ring-1 ring-white/10 overflow-hidden">
          <div className="max-h-40 overflow-y-auto divide-y divide-white/5">
            {playlist.map((track, index) => (
              <div
                key={track.title}
                onClick={() => {
                  setCurrentTrackIndex(index);
                  setIsPlaying(true);
                }}
                className={`cursor-pointer px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  index === currentTrackIndex
                    ? "bg-purple-700 text-white"
                    : "bg-zinc-800 text-purple-300 hover:bg-zinc-700"
                }`}
              >
                {track.title}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-zinc-900/90 to-transparent" />
        </div>
      )}
    </div>
  );
}









