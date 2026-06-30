import Image from 'next/image';

import type { Screenshot } from '@/data/projects';

type ImageGalleryProps = {
  images: Screenshot[];
  title: string;
};

export function ImageGallery({ images, title }: ImageGalleryProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className="card-border relative aspect-[16/10] overflow-hidden rounded-lg"
        >
          {image.src.startsWith('/') ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center p-6 text-center font-mono text-sm text-slate-400">
              {/* Replace this placeholder with a file in public/images. */}
              {image.src || `${title} screenshot ${index + 1}`}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
