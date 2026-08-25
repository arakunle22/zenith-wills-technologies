import Image from "next/image";
import { Container } from "@/components/ui/container";

export function PageHeader({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/60 to-ink/85" />
      </div>
      <Container className="relative pb-16 pt-32 sm:pb-20 sm:pt-40">
        <h1 className="font-display text-4xl font-bold tracking-tight text-frost sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-frost/85">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
