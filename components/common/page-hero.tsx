import { Container } from "./container";
import { HeadingRule } from "./heading-rule";

/** Compact navy banner at the top of inner pages. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-ink relative overflow-hidden text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-signal/20 absolute top-[-40%] right-[-10%] h-[60vh] w-[60vh] rounded-full blur-3xl" />
      </div>
      <Container className="relative py-14 sm:py-20">
        <HeadingRule className="[&>span]:bg-sky [&>svg]:text-sky" />
        <p className="text-eyebrow text-sky mt-4 font-semibold uppercase">
          {eyebrow}
        </p>
        <h1 className="font-heading mt-3 text-[clamp(2rem,1.4rem+2.4vw,3rem)] leading-[1.08] font-bold tracking-tight text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-white/75">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}
