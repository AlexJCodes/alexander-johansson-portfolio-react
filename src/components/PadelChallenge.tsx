import { useEffect, useRef, useState } from "react";

type PadelChallengeProps = {
  isOpen: boolean;
  onClose: () => void;
};

type GameScreen = "intro" | "game";

function PadelChallenge({ isOpen, onClose }: PadelChallengeProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [screen, setScreen] = useState<GameScreen>("intro");

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    }

    if (!isOpen && dialog.open) {
      dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setScreen("intro");
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="padel-game-title"
      aria-describedby="padel-game-description"
      onClose={handleClose}
      className="m-auto max-h-[calc(100dvh-2*var(--page-padding))] w-[calc(100%-2*var(--page-padding))] max-w-3xl overflow-hidden border border-border bg-background p-0 text-foreground backdrop:bg-black/55 backdrop:backdrop-blur-sm max-sm:h-dvh max-sm:max-h-dvh max-sm:w-full max-sm:max-w-none max-sm:border-0"
    >
      <div className="relative min-h-136 p-12 max-sm:h-dvh max-sm:min-h-0 max-sm:px-(--page-padding) max-sm:pb-6 max-sm:pt-20">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Stäng Padel Challenge"
          className="absolute right-4 top-4 grid aspect-square w-11 cursor-pointer place-items-center border border-border bg-transparent transition-colors hover:border-foreground focus-visible:border-foreground max-sm:right-(--page-padding)"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
            <path
              d="M6 6l12 12M18 6L6 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {screen === "intro" && (
          <div className="flex min-h-112 flex-col items-start justify-center max-sm:h-full max-sm:min-h-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-label text-muted">
              Padel Challenge
            </p>

            <h2
              id="padel-game-title"
              className="max-w-[10ch] font-display text-section-title leading-heading tracking-[-0.02em]"
            >
              Redo att testa reaktionen?
            </h2>

            <p
              id="padel-game-description"
              className="mt-6 max-w-120 text-lg leading-body text-muted"
            >
              Fem bollar. Så snabbt du kan. Vi ser om du är redo för en riktig match.
            </p>

            <button
              type="button"
              onClick={() => setScreen("game")}
              className="mt-8 cursor-pointer border border-foreground bg-foreground px-5 py-3.5 font-semibold text-background transition-colors hover:bg-accent hover:border-accent"
            >
              Starta utmaningen
            </button>
          </div>
        )}

        {screen === "game" && (
          <div className="flex min-h-112 flex-col gap-4 max-sm:h-full max-sm:min-h-0">
            <p className="pr-14 text-sm font-semibold uppercase tracking-label text-muted">
              Träff 1 / 5
            </p>

            <div className="flex-1 border border-border bg-surface" />

            <p className="sr-only" aria-live="polite">
              Gör dig redo
            </p>
          </div>
        )}
      </div>
    </dialog>
  );
}

export default PadelChallenge;
