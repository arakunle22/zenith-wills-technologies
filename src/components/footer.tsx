import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Brand } from "@/components/logo";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-frost/10 bg-ink">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Brand onDark markClassName="h-10" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-frost/70">
              {site.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-frost">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-frost/70 transition-colors hover:text-accent"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-frost">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {site.services.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="text-sm text-frost/70 transition-colors hover:text-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-frost">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={site.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-frost/70 transition-colors hover:text-accent"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.tel}`}
                  className="text-sm text-frost/70 transition-colors hover:text-accent"
                >
                  {site.phone.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-frost/10 pt-6 sm:flex-row">
          <p className="text-xs text-frost/60">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-frost/50">
            Built to keep you powered, safe and connected.
          </p>
        </div>
      </Container>
    </footer>
  );
}
