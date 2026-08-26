import Image from "next/image";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Solar panel installation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/85" />
      </div>

      <Container className="relative flex min-h-[92vh] flex-col justify-center py-28">
        <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-frost/20 bg-frost/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-frost">
          Solar · CCTV · Car Tracking · Intercom · Networking
        </p>
        <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-frost sm:text-6xl lg:text-7xl">
          We power <span className="text-accent">what matters</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-frost/85">
          Zenith Wills installs the solar, security and connectivity systems
          that keep Nigerian homes, offices and estates safe, connected and
          powered — done right the first time.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <ButtonLink
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Book us
          </ButtonLink>
          <ButtonLink
            href={`tel:${site.phone.tel}`}
            variant="outline"
            size="lg"
            className="border-frost/40 text-frost hover:border-frost hover:text-frost"
          >
            <Phone className="h-4 w-4" />
            {site.phone.display}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
