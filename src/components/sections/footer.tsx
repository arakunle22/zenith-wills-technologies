import { Container } from "@/components/ui/container";
import { Brand } from "@/components/logo";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-frost/5 bg-ink py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Brand markClassName="h-10" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
              {site.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-frost">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {site.services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-mist transition-colors hover:text-accent"
                  >
                    {s.title}
                  </a>
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
                  className="inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-accent"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.tel}`}
                  className="text-sm text-mist transition-colors hover:text-accent"
                >
                  {site.phone.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-frost/5 pt-6 sm:flex-row">
          <p className="text-xs text-mist/70">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-mist/50">
            Built to keep you powered, safe and connected.
          </p>
        </div>
      </Container>
    </footer>
  );
}
