import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site } from "@/config/site";

export function Cta() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Ready to power up?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-mist">
            Tell us what you need — solar, CCTV, tracking, intercom or
            networking — and we&apos;ll come back with a clear quote. No
            pressure, no jargon.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Book us on WhatsApp
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline" size="lg">
              Contact us
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
