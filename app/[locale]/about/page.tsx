import Image from "next/image";
import { Check, Quote, Truck } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { PageHero } from "@/components/common/page-hero";
import { HeadingRule } from "@/components/common/heading-rule";
import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { Reveal } from "@/components/common/reveal";
import { ClosingCta } from "@/components/sections/closing-cta";
import { SITE } from "@/lib/site-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const story = t.raw("about.story") as string[];
  const mission = t.raw("about.mission") as string[];
  const team = t.raw("about.team") as { name: string; role: string }[];

  return (
    <>
      <PageHero
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      />

      {/* Story */}
      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <Reveal>
            <SectionEyebrow>{t("about.storyTitle")}</SectionEyebrow>
            <div className="mt-5 space-y-4">
              {story.map((p, i) => (
                <p key={i} className="text-slate/90 text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal
            delay={120}
            className="border-border bg-cloud flex flex-col justify-center gap-6 rounded-2xl border p-8"
          >
            <div>
              <div className="font-heading text-navy text-5xl font-bold">
                {t("about.foundedYear")}
              </div>
              <div className="text-steel mt-1 text-sm">
                {t("about.foundedLabel")}
              </div>
            </div>
            <div className="border-border border-t pt-6">
              <div className="text-navy font-heading text-base font-semibold">
                {t("about.philosophyTitle")}
              </div>
              <p className="text-steel mt-2 text-sm">{t("about.philosophy")}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="border-border bg-cloud border-y py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="bg-navy rounded-2xl p-8 text-white sm:p-10">
            <div className="flex flex-col gap-3">
              <HeadingRule className="[&>span]:bg-sky [&>svg]:text-sky" />
              <span className="text-eyebrow text-sky font-semibold uppercase">
                {t("about.visionTitle")}
              </span>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              {t("about.vision")}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <SectionEyebrow>{t("about.missionTitle")}</SectionEyebrow>
            <ul className="mt-5 flex flex-col gap-4">
              {mission.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <Check className="text-signal mt-1 size-5 shrink-0" />
                  <span className="text-slate/90">{m}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Transportation wing */}
      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="ring-border group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_20px_50px_-20px_rgba(6,25,58,0.35)] ring-1">
            <Image
              src="/photos/truck-2.jpg"
              alt={t("about.wingName")}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="bg-signal/10 text-signal inline-flex size-12 items-center justify-center rounded-xl">
              <Truck className="size-6" />
            </span>
            <SectionEyebrow className="mt-5">{t("about.wingTitle")}</SectionEyebrow>
            <h2 className="text-h2 text-navy mt-3">{t("about.wingName")}</h2>
            <p className="text-steel mt-4 text-lg">{t("about.wing")}</p>
          </Reveal>
        </Container>
      </section>

      {/* Management team */}
      <section className="border-border bg-cloud border-t py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionEyebrow>{t("about.teamTitle")}</SectionEyebrow>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-h2 max-w-xl">{t("about.teamSubtitle")}</h2>
            </div>
          </Reveal>

          <Reveal stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div
                key={m.name}
                className="ring-border shadow-card ssi-lift rounded-xl bg-white p-5 ring-1"
              >
                <div className="bg-signal h-1 w-8 rounded-full" />
                <div className="text-navy font-heading mt-4 text-sm font-semibold">
                  {m.name}
                </div>
                <div className="text-steel mt-0.5 text-xs">{m.role}</div>
              </div>
            ))}
          </Reveal>

          <Reveal className="border-border mt-10 rounded-xl border border-dashed bg-white p-5">
            <p className="text-steel text-sm">
              <span className="text-navy font-semibold">
                {t("about.structureTitle")}:
              </span>{" "}
              {t("about.structure")}
            </p>
          </Reveal>

          {/* Team photos */}
          <Reveal stagger className="mt-8 grid gap-4 sm:grid-cols-2">
            {["/photos/team-1.jpg", "/photos/team-2.jpg"].map((src) => (
              <div
                key={src}
                className="ring-border group relative aspect-[16/10] overflow-hidden rounded-2xl ring-1"
              >
                <Image
                  src={src}
                  alt={t("about.teamTitle")}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
