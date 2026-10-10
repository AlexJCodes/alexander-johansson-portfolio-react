import type { PersonalInterest } from "../data/personalInterests";

type PersonalCardProps = {
  interest: PersonalInterest;
};

function PersonalCard({ interest }: PersonalCardProps) {
  const { title, description, media } = interest;

  return (
    <article className="group min-w-0">
      <div className="relative aspect-4/3 overflow-hidden bg-surface">
        {media.type === "image-reveal" ? (
          <>
            <img
              src={media.imageSrc}
              alt={media.imageAlt}
              width={1200}
              height={900}
              loading="lazy"
              className="absolute inset-0 block h-full w-full object-cover grayscale"
            />

            <video
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 block h-full w-full object-cover opacity-0"
            >
              <source src={media.videoSrc} type="video/mp4" />
            </video>
          </>
        ) : (
          <video
            muted
            loop
            playsInline
            preload="metadata"
            poster={media.posterSrc}
            className="absolute inset-0 block h-full w-full object-cover grayscale"
          >
            <source src={media.videoSrc} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="pt-4">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-label text-muted">{title}</h3>

        <p className="max-w-104 text-lg leading-body text-foreground">{description}</p>
      </div>
    </article>
  );
}

export default PersonalCard;
