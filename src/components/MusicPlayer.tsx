import { useEffect, useState } from 'react';
import { useMusicPlayer } from '@/hooks/use-music-player';
import { Button } from '@/components/ui/button';
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  VolumeX,
  Music,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const MusicPlayer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  
  const {
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
    formatTime
  } = useMusicPlayer();

  useEffect(() => {
    const timer = setTimeout(() => {
      initializePlayer();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleUserInteraction = () => {
      initializePlayer();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    seek(newTime);
  };

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    setVolume(Math.max(0, Math.min(1, percent)));
  };

  if (!currentSong) return null;

  return (
    <>
      {/* Main audio element */}
      <audio 
        ref={audioRef} 
        src={currentSong.src} 
        preload="metadata"
        onLoadStart={() => console.log(`Loading: ${currentSong.title}`)}
        onCanPlay={() => console.log(`Ready to play: ${currentSong.title}`)}
      />
      
      {/* Preload next song */}
      <audio 
        ref={nextAudioRef} 
        preload="none"
        style={{ display: 'none' }}
      />
      
      {/* Compact Music Player */}
      <div
        className={cn(
          "fixed z-50 bg-background/95 backdrop-blur-md border rounded-lg shadow-xl transition-all duration-300 ease-in-out",
          // Mobile: bottom center
          "bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-auto",
          // Desktop: top right
          "md:top-4 md:w-64",
          isExpanded ? "md:h-auto" : "md:h-14"
        )}
      >
        {/* Compact Header */}
        <div className="flex items-center gap-3 p-3">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <Music className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium truncate">{currentSong.title}</p>
              <p className="text-xs text-muted-foreground truncate">{currentSong.artist}</p>
            </div>
          </div>
          
          {/* Control buttons */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={playPrevious}
              className="h-8 w-8 p-0"
            >
              <SkipBack className="h-3 w-3" />
            </Button>
            
                      <Button
            variant="ghost"
            size="sm"
            onClick={togglePlay}
            className="h-8 w-8 p-0"
          >
            {isLoading ? (
              <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={playNext}
              className="h-8 w-8 p-0"
            >
              <SkipForward className="h-3 w-3" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-8 w-8 p-0 hidden md:flex"
            >
              {isExpanded ? (
                <ChevronUp className="h-3 w-3" />
              ) : (
                <ChevronDown className="h-3 w-3" />
              )}
            </Button>
          </div>
        </div>

        {/* Progress bar - always visible on mobile, expandable on desktop */}
        <div className={cn(
          "px-3 pb-2",
          "md:hidden", // Always show on mobile
          isExpanded && "md:block" // Show on desktop when expanded
        )}>
          <div 
            className="w-full bg-secondary/30 rounded-full h-1 cursor-pointer"
            onClick={handleSeek}
          >
            <div 
              className="bg-primary h-1 rounded-full transition-all duration-100"
              style={{ 
                width: duration ? `${(currentTime / duration) * 100}%` : '0%' 
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Expanded content - desktop only */}
        {isExpanded && (
          <div className="hidden md:block px-3 pb-3 space-y-2">
            {/* Volume control */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowVolumeSlider(!showVolumeSlider)}
                className="h-6 w-6 p-0"
              >
                {volume > 0 ? (
                  <Volume2 className="h-3 w-3" />
                ) : (
                  <VolumeX className="h-3 w-3" />
                )}
              </Button>
              
              {showVolumeSlider && (
                <div 
                  className="flex-1 bg-secondary/30 rounded-full h-1 cursor-pointer"
                  onClick={handleVolumeChange}
                >
                  <div 
                    className="bg-primary h-1 rounded-full transition-all duration-100"
                    style={{ width: `${volume * 100}%` }}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
