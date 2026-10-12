import { useRef } from "react";
import type { PersonalInterest } from "../data/personalInterests";

type PersonalCardProps = {
  interest: PersonalInterest;
  onAction?: () => void;
};

const canPlayHoverVideo = () => {
  const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return supportsHover && !prefersReducedMotion;
};

function PersonalCard({ interest, onAction }: PersonalCardProps) {
  const { title, description, media } = interest;

  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePointerEnter = () => {
    if (!canPlayHoverVideo()) return;

    void videoRef.current?.play();
  };

  const handlePointerLeave = () => {
    const video = videoRef.current;

    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

  return (
    <article
      className="group min-w-0"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div className="relative aspect-4/3 overflow-hidden bg-surface">
        {media.type === "image-reveal" ? (
          <>
            <img
              src={media.imageSrc}
              alt={media.imageAlt}
              width={1200}
              height={900}
              loading="lazy"
              className="absolute inset-0 z-10 block h-full w-full object-cover grayscale [transition:opacity_400ms_ease,filter_400ms_ease,transform_500ms_ease] group-hover:grayscale-0 motion-safe:group-hover:scale-[1.03] motion-safe:group-hover:opacity-0 motion-reduce:transition-none"
            />

            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 block h-full w-full object-cover opacity-0 grayscale [transition:opacity_400ms_ease,filter_400ms_ease,transform_500ms_ease] group-hover:grayscale-0 motion-safe:group-hover:scale-[1.03] motion-safe:group-hover:opacity-100 motion-reduce:transition-none"
            >
              <source src={media.videoSrc} type="video/mp4" />
            </video>
          </>
        ) : (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster={media.posterSrc}
            className="absolute inset-0 block h-full w-full object-cover grayscale [transition:filter_400ms_ease,transform_500ms_ease] group-hover:grayscale-0 motion-safe:group-hover:scale-[1.03] motion-reduce:transition-none"
          >
            <source src={media.videoSrc} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="pt-4">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-label text-muted">{title}</h3>

        <p className="max-w-104 text-lg leading-body text-foreground">{description}</p>

        {interest.action && onAction && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            <p className="max-w-72 text-sm leading-body text-muted">
              {interest.action.description}
            </p>

            <button
              type="button"
              onClick={onAction}
              className="group/action inline-flex cursor-pointer items-center gap-2 text-sm font-semibold transition-colors hover:text-accent focus-visible:text-accent"
            >
              {interest.action.label}

              <span
                aria-hidden="true"
                className="transition-transform motion-safe:group-hover/action:translate-x-1 motion-safe:group-focus-visible/action:translate-x-1"
              >
                →
              </span>
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

export default PersonalCard;
