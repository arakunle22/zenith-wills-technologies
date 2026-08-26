import { site } from "@/config/site";

const items = [
  "Serving all of Lagos",
  ...site.areasServed,
  `Call ${site.phone.display}`,
  "Book on WhatsApp",
];

export function TopBanner() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] border-b border-white/10 bg-ink">
      <div className="relative h-10 overflow-hidden">
        <div className="flex h-full w-max items-center animate-marquee motion-reduce:animate-none">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              aria-hidden={dup === 1}
              className="flex h-full items-center"
            >
              {items.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2.5 whitespace-nowrap px-6 text-xs font-medium tracking-wide text-frost/85"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
