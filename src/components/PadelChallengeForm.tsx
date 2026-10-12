import { type ChangeEvent, type SubmitEvent, useState } from "react";
import { submitForm } from "../services/formspree";

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

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialFormData: ChallengeFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function PadelChallengeForm({ reactionTime, rating }: PadelChallengeFormProps) {
  // Controlled form state
  const [formData, setFormData] = useState<ChallengeFormData>(initialFormData);

  const [errors, setErrors] = useState<FormErrors>({});

  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  // Field updates
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
    }));

    if (formStatus === "error") {
      setFormStatus("idle");
    }
  };

  // Validation
  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Jag behöver något att kalla dig.";
    } else if (formData.name.trim().length < 2) {
      nextErrors.name = "Två tecken får du bjuda på.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Vart ska jag svara? Släng in en e-postadress.";
    } else if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = "Den där e-posten ser lite suspekt ut. Kolla den en gång till.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Ett nummer också, ifall mejlen går på semester.";
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = "Ge mig en liten ledtråd - vad gäller det?";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Du kan inte lämna mig hängande här. Skriv några rader.";
    } else if (formData.message.trim().length < 5) {
      nextErrors.message = "Lite mer än så kan du ge mig";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  // Formspree submit
  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    setFormStatus("submitting");

    const submissionData = new FormData(event.currentTarget);

    try {
      await submitForm(submissionData);

      setFormStatus("success");
      setFormData(initialFormData);
      setErrors({});
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="flex min-h-112 flex-col justify-center max-sm:h-full max-sm:min-h-0">
      {formStatus === "success" ? (
        <div role="status" aria-live="polite" className="max-w-136">
          <p className="mb-3 text-sm font-semibold uppercase tracking-label text-muted">
            Bollen är över nät
          </p>

          <h2 className="font-display text-[clamp(2rem,1.5rem+2vw,3rem)] leading-heading">
            Meddelandet är iväg.
          </h2>

          <p className="mt-3 text-lg leading-body text-muted">
            Nu är det min tur att svara — jag plockar upp bollen härifrån.
          </p>
        </div>
      ) : (
        <>
          <p className="mb-3 text-sm font-semibold uppercase tracking-label text-muted">
            Padel Challenge
          </p>

          <h2 className="font-display text-[clamp(2rem,1.5rem+2vw,3rem)] leading-heading">
            Är du säker?
          </h2>

          <p className="mt-3 max-w-136 text-lg leading-body text-muted">
            Lämna dina uppgifter så skickas meddelandet direkt till Alex.
          </p>

          {formStatus === "error" && (
            <div
              role="alert"
              className="mt-6 max-w-136 border-l-3 border-accent bg-surface px-5 py-4 leading-body text-accent"
            >
              Aj då. Bollen fastnade i nätet. Försök igen om en stund.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="mt-6 grid max-w-136 gap-5">
            <div className="grid gap-2">
              <label htmlFor="challenge-name" className="text-sm font-semibold">
                Namn <span className="text-accent">*</span>
              </label>

              <input
                id="challenge-name"
                name="name"
                type="text"
                required
                maxLength={80}
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

            <div className="grid gap-2">
              <label htmlFor="challenge-email" className="text-sm font-semibold">
                E-post <span className="text-accent">*</span>
              </label>

              <input
                id="challenge-email"
                name="email"
                type="email"
                required
                maxLength={254}
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

            <div className="grid gap-2">
              <label htmlFor="challenge-phone" className="text-sm font-semibold">
                Telefon <span className="text-accent">*</span>
              </label>

              <input
                id="challenge-phone"
                name="phone"
                type="tel"
                required
                maxLength={30}
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

            <div className="grid gap-2">
              <label htmlFor="challenge-subject" className="text-sm font-semibold">
                Ämne <span className="text-accent">*</span>
              </label>

              <input
                id="challenge-subject"
                name="subject"
                type="text"
                required
                maxLength={80}
                list="challenge-subject-options"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Välj en väg in – eller skriv din egen"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "challenge-subject-error" : undefined}
                className="min-h-14 rounded-[0.65rem] border border-border bg-surface px-4 text-foreground"
              />

              <datalist id="challenge-subject-options">
                <option value="Uppdrag – låt oss bygga något" />
                <option value="Padel – jag tar med racket" />
                <option value="Övrigt – överraska mig" />
              </datalist>

              {errors.subject && (
                <p id="challenge-subject-error" className="text-sm text-accent">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <label htmlFor="challenge-message" className="text-sm font-semibold">
                Meddelande <span className="text-accent">*</span>
              </label>

              <textarea
                id="challenge-message"
                name="message"
                rows={4}
                required
                maxLength={500}
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
              disabled={formStatus === "submitting"}
              className="mt-2 inline-flex min-h-13 w-fit cursor-pointer items-center justify-center gap-2 rounded-[0.65rem] bg-foreground px-5 font-semibold text-background transition-colors hover:bg-accent disabled:cursor-wait disabled:opacity-60"
            >
              {formStatus === "submitting" ? "Skickar..." : "Skicka meddelandet"}

              {formStatus !== "submitting" && <span aria-hidden="true">→</span>}
            </button>

            {/* Spam protection */}
            <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
              <label htmlFor="challenge-website">Website</label>

              <input
                id="challenge-website"
                name="_gotcha"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Game result metadata */}
            <input
              type="hidden"
              name="reactionTime"
              value={`${(reactionTime / 1000).toFixed(2)} s`}
            />

            <input type="hidden" name="matchiRating" value={`${rating}/10`} />
          </form>
        </>
      )}
    </div>
  );
}

export default PadelChallengeForm;
