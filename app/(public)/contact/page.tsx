"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { contactSchema } from "@/lib/validations";
import { CyberCard } from "@/components/ui/primitives";
import { PublicSectionHeader } from "@/components/public/public-section-header";

type ContactFormValues = z.infer<typeof contactSchema>;
const CONTACT_FORM_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
const CONTACT_FORM_ENABLED = Boolean(CONTACT_FORM_ENDPOINT);
const input = "w-full rounded-lg border border-[rgba(0,255,136,0.2)] bg-automa-bg px-4 py-2.5 text-sm text-automa-text focus:border-automa-green focus:outline-none";
const label = "block text-xs font-mono uppercase text-automa-muted mb-2";

export default function ContactPage() {
  const [submissionMessage, setSubmissionMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFormValues) => {
    if (!CONTACT_FORM_ENDPOINT) return;

    setSubmissionMessage(null);
    try {
      // TODO: Connect the form to the configured public contact endpoint.
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        setSubmissionMessage({ type: "error", text: "Your message could not be sent. Please try again later." });
        return;
      }

      setSubmissionMessage({ type: "success", text: "Your message was sent successfully." });
      reset();
    } catch {
      setSubmissionMessage({ type: "error", text: "A network error prevented your message from being sent. Please try again." });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PublicSectionHeader
        as="h1"
        eyebrow="Contact AUTOMA SECURITY"
        title="Contact AUTOMA SECURITY"
        description="AUTOMA SECURITY is in development. Contact details will be shared when available."
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-6">
          <CyberCard className="space-y-4">
            <h2 className="font-display text-xl font-bold text-automa-text">In Development</h2>
            <p className="text-sm text-automa-muted">
              {CONTACT_FORM_ENABLED
                ? "Use the form to send a message to AUTOMA SECURITY."
                : "This contact page is a prototype. Messages cannot currently be submitted."}
            </p>
          </CyberCard>
        </div>
        <div className="lg:col-span-7">
          <CyberCard>
            {!CONTACT_FORM_ENABLED && (
              <p role="status" className="mb-5 rounded-lg border border-[rgba(0,255,136,0.2)] bg-automa-secondaryBg px-4 py-3 text-sm text-automa-muted">
                The contact form is not available yet. Please check back soon.
              </p>
            )}
            {submissionMessage && (
              <p
                role={submissionMessage.type === "success" ? "status" : "alert"}
                className={`mb-5 rounded-lg border px-4 py-3 text-sm ${
                  submissionMessage.type === "success"
                    ? "border-automa-green/30 bg-automa-secondaryBg text-automa-green"
                    : "border-red-500/30 bg-automa-secondaryBg text-red-300"
                }`}
              >
                {submissionMessage.text}
              </p>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className={label}>Full Name</label>
                <input id="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} {...register("name")} className={input} placeholder="Your name" />
                {errors.name && <p id="name-error" className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className={label}>Email</label>
                <input id="email" type="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} className={input} placeholder="name@company.com" />
                {errors.email && <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="subject" className={label}>Subject</label>
                <input id="subject" aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "subject-error" : undefined} {...register("subject")} className={input} placeholder="Question about development" />
                {errors.subject && <p id="subject-error" className="mt-1 text-xs text-red-400">{errors.subject.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className={label}>Message</label>
                <textarea id="message" rows={4} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} {...register("message")} className={input} placeholder="Describe your question..." />
                {errors.message && <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
              </div>
              <button type="submit" disabled={!CONTACT_FORM_ENABLED || isSubmitting} className="inline-flex items-center gap-2 rounded-lg bg-automa-green px-6 py-3 text-sm font-semibold text-automa-bg hover:bg-automa-secondaryGreen disabled:opacity-50">
                <Send className="h-4 w-4" />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </CyberCard>
        </div>
      </div>
    </div>
  );
}
