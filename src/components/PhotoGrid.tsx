import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface Photo {
  id: string;
  src: string;
  alt: string;
  className?: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid = ({ photos }: PhotoGridProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = (photo: Photo) => {
    setIsLoading(true);
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  useEffect(() => {
    // Prevent scrolling when modal is open
    if (selectedPhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedPhoto]);

  return (
    <>
      {/* Changed columns-1 to columns-2 for mobile to avoid single column stack */}
      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 md:gap-4 space-y-3 md:space-y-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={`group relative overflow-hidden rounded-lg bg-muted cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg break-inside-avoid ${
              photo.className || ""
            }`}
            onClick={() => openModal(photo)}
          >
            <img
              src={`/images/${photo.src}`}
              alt={photo.alt}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Enhanced Modal with better responsiveness */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeModal}
        >
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition-all duration-300"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="w-full h-full flex items-center justify-center">
              <img
                src={`/images/${selectedPhoto.src}`}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
                onLoad={() => setIsLoading(false)}
              />

              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>

            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white bg-black/60 py-1 px-3 rounded-lg inline-block text-sm">
                {selectedPhoto.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGrid;
