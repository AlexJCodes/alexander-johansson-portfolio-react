import { useState } from "react";
import PersonalCard from "../components/PersonalCard";
import { personalInterests } from "../data/personalInterests";
import PadelChallenge from "../components/PadelChallenge";

function PersonalSection() {
  const [isPadelChallengeOpen, setIsPadelChallengeOpen] = useState(false);

  const openPadelChallenge = () => {
    setIsPadelChallengeOpen(true);
  };

  const closePadelChallenge = () => {
    setIsPadelChallengeOpen(false);
  };

  return (
    <section
      id="personligt"
      aria-labelledby="personal-title"
      className="scroll-mt-16 border-t border-border py-section"
    >
      <div className="mx-auto w-[calc(100%-2*var(--page-padding))] max-w-content">
        <header className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-label text-muted">
            Utanför koden
          </p>

          <h2
            id="personal-title"
            className="max-w-[12ch] font-display text-section-title leading-heading tracking-[-0.02em]"
          >
            Det som laddar batterierna
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {personalInterests.map((interest) => (
            <div
              key={interest.id}
              className="md:last:col-span-2 md:last:w-[calc((100%-1.5rem)/2)] md:last:justify-self-center lg:last:col-span-1 lg:last:w-auto lg:last:justify-self-stretch"
            >
              <PersonalCard
                interest={interest}
                onAction={interest.id === "padel" ? openPadelChallenge : undefined}
              />
            </div>
          ))}
        </div>
      </div>

      <PadelChallenge isOpen={isPadelChallengeOpen} onClose={closePadelChallenge} />
    </section>
  );
}

export default PersonalSection;
