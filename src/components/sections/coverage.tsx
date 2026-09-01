import { MapPin, Navigation, Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site } from "@/config/site";

const zoneIcons = [Compass, Navigation, MapPin];

export function Coverage() {
  return (
    <section id="coverage" className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Coverage Areas"
          title="Fast dispatch across Lagos & its surroundings."
          subtitle="From Victoria Island to Badagry and across the Mainland, our certified technicians are positioned to assess and install at your property."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.coverageZones.map((zone, idx) => {
            const Icon = zoneIcons[idx % zoneIcons.length];
            return (
              <Reveal key={zone.region} delay={idx * 0.08} className="h-full">
                <div className="flex h-full flex-col justify-between rounded-3xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                        Active Coverage
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold text-ink">
                      {zone.region}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">
                      {zone.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {zone.places.map((place) => (
                        <span
                          key={place}
                          className="inline-flex items-center rounded-lg border border-line/80 bg-frost/50 px-2.5 py-1 text-xs font-medium text-ink transition-colors hover:border-primary/40 hover:bg-primary/5"
                        >
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 border-t border-line/60 pt-5">
                    <ButtonLink
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2348128293556"}?text=Hello%20Zenith%20Wills%2C%20I%20need%20installation%20service%20around%20${encodeURIComponent(
                        zone.region
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      size="md"
                      className="w-full justify-center text-xs font-semibold hover:border-accent hover:bg-accent/10 hover:text-accent-deep"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      Book in {zone.region.split(" ")[0]}
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-white p-6 sm:flex-row sm:px-8">
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent-deep">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-ink sm:text-base">
                  Serving Victoria Island, Badagry, Egan, Ikotun, Alimosho, LASU, Mile 2 & all of Lagos
                </p>
                <p className="text-xs text-mist">
                  Headquartered in Victoria Island with mobile installation units stationed across Lagos.
                </p>
              </div>
            </div>
            <ButtonLink
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              className="shrink-0"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Confirm My Location
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
