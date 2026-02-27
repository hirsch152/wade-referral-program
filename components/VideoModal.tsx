
import React, { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoId }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const portraitImage = "https://user.fm/files/v2-328d024e04918d226b8026c37861552f/headshot.jpg";

  // Reset loading state when the modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLoaded(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Construct the Privacy-Enhanced YouTube embed URL with specific parameters
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/95 backdrop-blur-md transition-opacity duration-300">
      <div className="relative w-full max-w-6xl bg-black rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300 border border-white/10">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-[110] p-3 bg-black/60 hover:bg-black/90 rounded-full text-white transition-all backdrop-blur-md border border-white/20 hover:scale-110"
          aria-label="Close video"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="aspect-video w-full relative">
          {/* Placeholder while loading */}
          {!isLoaded && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-900">
              <img 
                src={portraitImage} 
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" 
                alt="Loading referral video..."
              />
              <div className="flex flex-col items-center gap-6 relative z-20">
                <Loader2 className="w-16 h-16 text-[#a81255] animate-spin" />
                <div className="text-center">
                  <span className="text-white text-lg font-bold block mb-1">Preparing your video...</span>
                  <span className="text-slate-400 text-sm animate-pulse">Starting immediately</span>
                </div>
              </div>
            </div>
          )}
          
          <iframe
            src={embedUrl}
            className={`w-full h-full transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            // Permissions updated for Safari (ITP) and immediate autoplay
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Referral Program Video"
            onLoad={() => setIsLoaded(true)}
          ></iframe>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 cursor-pointer" onClick={onClose}></div>
    </div>
  );
};
