import { Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site } from "@/config/site";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-frost sm:text-5xl">
            Ready to power up?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-mist">
            Tell us what you need — solar, CCTV, tracking, intercom or
            networking — and we&apos;ll come back with a clear quote. No
            pressure, no jargon.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Book us on WhatsApp
            </ButtonLink>
            <ButtonLink href={`tel:${site.phone.tel}`} variant="outline" size="lg">
              <Phone className="h-4 w-4" />
              {site.phone.display}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
