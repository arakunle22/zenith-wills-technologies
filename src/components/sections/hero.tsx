"use client";
import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { SolarPanel } from "@/components/solar-panel";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site } from "@/config/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-accent/15 blur-[100px]" />
      </div>

      <Container className="relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:py-0">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-frost/10 bg-frost/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-mist"
          >
            Solar · CCTV · Car Tracking · Intercom · Networking
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-frost sm:text-6xl lg:text-7xl"
          >
            We power{" "}
            <span className="text-accent">what matters</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-mist"
          >
            Zenith Wills installs the solar, security and connectivity systems
            that keep Nigerian homes, offices and estates safe, connected and
            powered — done right the first time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <ButtonLink
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Book us
            </ButtonLink>
            <ButtonLink href={`tel:${site.phone.tel}`} variant="outline" size="lg">
              <Phone className="h-4 w-4" />
              {site.phone.display}
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="lg:pl-6"
        >
          <SolarPanel className="mx-auto w-full max-w-md" />
        </motion.div>
      </Container>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-mist/60">
            Scroll
          </span>
          <span className="block h-6 w-px bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
