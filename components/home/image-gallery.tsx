"use client";

import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState, type KeyboardEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { TimelineImage } from "@/data/timeline";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: TimelineImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  const isOpen = activeIndex !== null;
  const active = isOpen ? images.at(activeIndex) ?? null : null;
  const hasMany = images.length > 1;

  const go = (step: number) =>
    setActiveIndex((i) => (i === null ? i : (i + step + images.length) % images.length));

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!hasMany) return;
    if (event.key === "ArrowRight") go(1);
    if (event.key === "ArrowLeft") go(-1);
  };

  return (
    <>
      <ul
        className={cn(
          "grid grid-cols-2 gap-2",
          images.length >= 4 ? "sm:grid-cols-4" : "sm:grid-cols-3"
        )}
      >
        {images.map((image, index) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Zoom in: ${image.alt}`}
              className="group/thumb relative block aspect-[16/10] w-full overflow-hidden border-2 border-dotted border-border bg-muted shadow-sm outline-none transition-transform hover:-rotate-1 focus-visible:ring-3 focus-visible:ring-ring/50 motion-reduce:transition-none"
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 180px, (min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover/thumb:scale-105 motion-reduce:transition-none"
              />
              <span className="absolute inset-0 flex items-center justify-center gap-1.5 bg-black/50 text-base text-white opacity-0 transition-opacity group-hover/thumb:opacity-100 group-focus-visible/thumb:opacity-100">
                <ZoomIn className="size-4" aria-hidden="true" />
                Zoom in
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={isOpen} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent className="max-w-[calc(100%-2rem)] gap-3 p-2 sm:max-w-5xl" onKeyDown={onKeyDown}>
          {active && activeIndex !== null && (
            <>
              <DialogTitle className="sr-only">{active.alt}</DialogTitle>
              <DialogDescription className="sr-only">
                Image {activeIndex + 1} of {images.length}
                {hasMany && ". Use the left and right arrow keys to navigate."}
              </DialogDescription>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <Image
                  key={active.src}
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-contain"
                />
              </div>
              {hasMany && (
                <div className="flex items-center justify-between gap-2 px-1 pb-1">
                  <Button variant="outline" size="icon-sm" aria-label="Previous image" onClick={() => go(-1)}>
                    <ChevronLeft />
                  </Button>
                  <span className="text-base text-muted-foreground tabular-nums" aria-hidden="true">
                    {activeIndex + 1} / {images.length}
                  </span>
                  <Button variant="outline" size="icon-sm" aria-label="Next image" onClick={() => go(1)}>
                    <ChevronRight />
                  </Button>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
