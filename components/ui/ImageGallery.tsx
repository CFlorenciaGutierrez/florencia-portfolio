import Image from 'next/image';

type ImageGalleryProps = {
  images: string[];
  title: string;
};

export function ImageGallery({ images, title }: ImageGalleryProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className="card-border relative aspect-[16/10] overflow-hidden rounded-lg"
        >
          {image.startsWith('/') ? (
            <Image
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center p-6 text-center font-mono text-sm text-slate-400">
              {/* Replace this placeholder with a file in public/images. */}
              {image}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
