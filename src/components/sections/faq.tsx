import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/config/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: site.faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export function Faq() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked questions."
          align="center"
        />
        <div className="mt-10 space-y-3">
          {site.faqs.map((f) => (
            <details
              key={f.question}
              className="group rounded-2xl border border-line bg-white px-5 py-4 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {f.question}
                <span className="text-xl leading-none text-mist transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
