import { type ChangeEvent, type SubmitEvent, useState } from "react";

// Form data types

type PadelChallengeFormProps = {
  reactionTime: number;
  rating: number;
};

type ChallengeFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof ChallengeFormData, string>>;

const initialFormData: ChallengeFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function PadelChallengeForm({ reactionTime, rating }: PadelChallengeFormProps) {
  // Controlled form state
  const [formData, setFormData] = useState<ChallengeFormData>(initialFormData);

  const [errors, setErrors] = useState<FormErrors>({});

  // Form helpers
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Ange ditt namn.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Ange din e-postadress.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Ange ditt telefonnummer.";
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = "Ange ett ämne.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Skriv ett meddelande.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    // Formspree
  };

  return (
    <div className="flex min-h-112 flex-col justify-center max-sm:h-full max-sm:min-h-0">
      <p className="mb-3 text-sm font-semibold uppercase tracking-label text-muted">
        Padel Challenge
      </p>

      <h2 className="font-display text-[clamp(2rem,1.5rem+2vw,3rem)] leading-heading">
        Är du säker?
      </h2>

      <p className="mt-3 max-w-136 text-lg leading-body text-muted">
        Lämna dina uppgifter så skickas utmaningen direkt till Alex.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 grid max-w-136 gap-5">
        {/* Name */}
        <div className="grid gap-2">
          <label htmlFor="challenge-name" className="text-sm font-semibold">
            Namn <span className="text-accent">*</span>
          </label>

          <input
            id="challenge-name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "challenge-name-error" : undefined}
            className="min-h-14 rounded-[0.65rem] border border-border bg-surface px-4 text-foreground"
          />

          {errors.name && (
            <p id="challenge-name-error" className="text-sm text-accent">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="grid gap-2">
          <label htmlFor="challenge-email" className="text-sm font-semibold">
            E-post <span className="text-accent">*</span>
          </label>

          <input
            id="challenge-email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "challenge-email-error" : undefined}
            className="min-h-14 rounded-[0.65rem] border border-border bg-surface px-4 text-foreground"
          />

          {errors.email && (
            <p id="challenge-email-error" className="text-sm text-accent">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="grid gap-2">
          <label htmlFor="challenge-phone" className="text-sm font-semibold">
            Telefon <span className="text-accent">*</span>
          </label>

          <input
            id="challenge-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "challenge-phone-error" : undefined}
            className="min-h-14 rounded-[0.65rem] border border-border bg-surface px-4 text-foreground"
          />

          {errors.phone && (
            <p id="challenge-phone-error" className="text-sm text-accent">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Subject */}
        <div className="grid gap-2">
          <label htmlFor="challenge-subject" className="text-sm font-semibold">
            Ämne <span className="text-accent">*</span>
          </label>

          <input
            id="challenge-subject"
            name="subject"
            type="text"
            list="challenge-subject-options"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Välj eller skriv ett ämne"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "challenge-subject-error" : undefined}
            className="min-h-14 rounded-[0.65rem] border border-border bg-surface px-4 text-foreground"
          />

          <datalist id="challenge-subject-options">
            <option value="Uppdrag" />
            <option value="Padel" />
            <option value="Övrigt" />
          </datalist>

          {errors.subject && (
            <p id="challenge-subject-error" className="text-sm text-accent">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="grid gap-2">
          <label htmlFor="challenge-message" className="text-sm font-semibold">
            Meddelande <span className="text-accent">*</span>
          </label>

          <textarea
            id="challenge-message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Trash talk, matchförslag, uppdragsidé eller något annat..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "challenge-message-error" : undefined}
            className="min-h-32 resize-y rounded-[0.65rem] border border-border bg-surface p-4 text-foreground"
          />

          {errors.message && (
            <p id="challenge-message-error" className="text-sm text-accent">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex min-h-13 w-fit cursor-pointer items-center justify-center gap-2 rounded-[0.65rem] bg-foreground px-5 font-semibold text-background transition-colors hover:bg-accent"
        >
          Skicka utmaningen
          <span aria-hidden="true">→</span>
        </button>

        {/* Formspree */}
        <input type="hidden" name="reactionTime" value={`${(reactionTime / 1000).toFixed(2)} s`} />

        <input type="hidden" name="matchiRating" value={`${rating}/10`} />
      </form>
    </div>
  );
}

export default PadelChallengeForm;
