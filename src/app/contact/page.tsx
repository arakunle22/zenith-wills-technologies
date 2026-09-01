import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book solar, CCTV, car tracking, intercom or networking installation in Victoria Island, Badagry, Egan, Ikotun, Alimosho, LASU, Mile 2 and across Lagos — reach Zenith Wills Technologies on WhatsApp or by phone.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Get in touch"
          subtitle="Tell us what you need and we'll come back with a clear quote — no pressure, no jargon."
          image="/images/intercom.jpg"
        />

        <section className="py-16 sm:py-20">
          <Container className="max-w-3xl">
            <div className="grid gap-5 md:grid-cols-2">
              <Reveal className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent-deep">
                    <WhatsAppIcon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-bold text-ink">
                    WhatsApp
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">
                    The fastest way to book or ask a question. Message us and
                    we&apos;ll get back to you.
                  </p>
                  <ButtonLink
                    href={site.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    className="mt-6 w-full"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Chat on WhatsApp
                  </ButtonLink>
                </div>
              </Reveal>

              <Reveal delay={0.08} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-bold text-ink">
                    Call us
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">
                    Prefer to talk? Give us a call and describe what you need.
                  </p>
                  <ButtonLink
                    href={`tel:${site.phone.tel}`}
                    variant="primary"
                    size="lg"
                    className="mt-6 w-full"
                  >
                    <Phone className="h-5 w-5" />
                    {site.phone.display}
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.08}>
              <div className="mt-5 flex items-center gap-4 rounded-2xl border border-line bg-white p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-ink">
                    Primary Office
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-mist">
                    {site.address.street}, {site.address.locality},{" "}
                    {site.address.region}, {site.address.countryName}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 rounded-2xl border border-line bg-surface p-6 sm:p-8">
                <h3 className="font-display text-base font-bold text-ink">
                  Coverage Hubs across Lagos
                </h3>
                <p className="mt-1 text-xs text-mist">
                  We deploy technicians directly to your site across the Island, West Corridor, and Mainland:
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {site.coverageZones.map((zone) => (
                    <div
                      key={zone.region}
                      className="rounded-xl border border-line bg-white p-4"
                    >
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                        {zone.region}
                      </h4>
                      <ul className="mt-2 space-y-1">
                        {zone.places.map((place) => (
                          <li
                            key={place}
                            className="text-xs text-ink/80"
                          >
                            • {place}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 text-center text-sm text-mist">
                After you reach out, we&apos;ll arrange a site assessment and
                give you a clear, itemised quote before any work begins.
              </p>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
