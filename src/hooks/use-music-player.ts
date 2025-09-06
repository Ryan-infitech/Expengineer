import { useState, useRef, useEffect } from 'react';

export interface Song {
  id: string;
  title: string;
  artist: string;
  src: string;
}

const songs: Song[] = [
  {
    id: '1',
    title: 'Last Night On Earth (cover)',
    artist: 'Green Day',
    src: '/mp3/[YT2mp3.info] - Green Day - Last Night On Earth (cover) (320kbps).mp3'
  },
  {
    id: '2',
    title: 'If I\'m a Bird',
    artist: 'Unknown Artist',
    src: '/mp3/[YT2mp3.info] - if i_\'m a bird (320kbps).mp3'
  },
  {
    id: '3',
    title: 'Hati-hati di Jalan',
    artist: 'Tulus',
    src: '/mp3/[YT2mp3.info] - Tulus - hati-hati di jalan (lyrics video) _ tn.msclyrics (320kbps).mp3'
  },
  {
    id: '4',
    title: 'Curse Of The Dreamer',
    artist: 'John Michael Howell',
    src: '/mp3/John Michael Howell  - Curse Of The Dreamer [OFFICIAL LYRIC VIDEO].mp3'
  },
  {
    id: '5',
    title: 'Tenang',
    artist: 'Widz Antazura',
    src: '/mp3/Widz Antazura - Tenang.mp3'
  }
];

// Shuffle function
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const useMusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const nextAudioRef = useRef<HTMLAudioElement | null>(null); // For preloading next song
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [shuffledSongs] = useState(() => shuffleArray(songs));
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isLoading, setIsLoading] = useState(false);

  const currentSong = shuffledSongs[currentSongIndex];
  const nextSong = shuffledSongs[(currentSongIndex + 1) % shuffledSongs.length];

  // Preload next song when current song is playing
  useEffect(() => {
    if (isPlaying && nextAudioRef.current && nextSong) {
      nextAudioRef.current.src = nextSong.src;
      nextAudioRef.current.preload = "metadata"; // Only load metadata, not full audio
    }
  }, [isPlaying, nextSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnd = () => playNext();
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleWaiting = () => setIsLoading(true);
    const handlePlaying = () => setIsLoading(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnd);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('playing', handlePlaying);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnd);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('playing', handlePlaying);
    };
  }, [currentSongIndex]);

  const initializePlayer = async () => {
    if (audioRef.current) {
      try {
        // Auto-play with user interaction
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Autoplay prevented:', error);
        // Fallback: user needs to interact first
      }
    }
  };

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Playback failed:', error);
      }
    }
  };

  const playNext = () => {
    const nextIndex = (currentSongIndex + 1) % shuffledSongs.length;
    setCurrentSongIndex(nextIndex);
    
    // If we preloaded the next song, we can use it for smoother transition
    if (nextAudioRef.current && nextAudioRef.current.src) {
      // Optional: implement seamless transition here
    }
  };

  const playPrevious = () => {
    setCurrentSongIndex((prev) => (prev - 1 + shuffledSongs.length) % shuffledSongs.length);
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return {
    audioRef,
    nextAudioRef,
    isPlaying,
    isLoading,
    currentSong,
    nextSong,
    currentTime,
    duration,
    volume,
    setVolume,
    initializePlayer,
    togglePlay,
    playNext,
    playPrevious,
    seek,
    formatTime,
    shuffledSongs
  };
};
