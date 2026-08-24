"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Brand } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-frost/5 bg-ink/80 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label={site.name}>
          <Brand markClassName="h-8" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-mist transition-colors hover:text-frost"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book us
          </ButtonLink>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-6 w-6 text-frost" />
          ) : (
            <Menu className="h-6 w-6 text-frost" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-frost/5 bg-ink md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-frost hover:bg-ink-2"
                >
                  {item.label}
                </a>
              ))}
              <ButtonLink
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full"
              >
                Book us
              </ButtonLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
