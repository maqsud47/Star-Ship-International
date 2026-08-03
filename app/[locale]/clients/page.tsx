import Image from "next/image";
import { Check, Building2 } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { PageHero } from "@/components/common/page-hero";
import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { Reveal } from "@/components/common/reveal";
import { ClosingCta } from "@/components/sections/closing-cta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "clientsPage" });
  return { title: t("title"), description: t("subtitle") };
}

// Real branded photos we have; the rest are placeholders (TODO: extract heavy-lift
// photos from the Company Profile PDF for the gallery).
const GALLERY = [
  { src: "/photos/truck-1.jpg", captionKey: "brandedTruck" },
  { src: "/photos/truck-2.jpg", captionKey: "fleetLine" },
];

export default async function ClientsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const clientList = t.raw("clients.list") as string[];
  const industries = t.raw("clientsPage.industries") as string[];
  const expertise = t.raw("clientsPage.expertise") as string[];

  return (
    <>
      <PageHero
        eyebrow={t("clientsPage.eyebrow")}
        title={t("clientsPage.title")}
        subtitle={t("clientsPage.subtitle")}
      />

      {/* Clients */}
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionEyebrow>{t("clientsPage.clientsTitle")}</SectionEyebrow>
          </Reveal>
          {/* TODO: swap text chips for approved client logos when provided. */}
          <Reveal stagger className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {clientList.map((c) => (
              <div
                key={c}
                className="border-border text-slate/80 shadow-card ssi-lift hover:border-signal/30 flex items-center justify-center rounded-lg border bg-white px-4 py-6 text-center text-sm font-medium"
              >
                {c}
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Industries */}
      <section className="border-border bg-cloud border-y py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionEyebrow>{t("clientsPage.industriesTitle")}</SectionEyebrow>
          </Reveal>
          <Reveal stagger className="mt-8 flex flex-wrap gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="ring-border text-navy shadow-card inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium ring-1"
              >
                <Building2 className="text-signal size-4" />
                {ind}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Cargo expertise */}
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionEyebrow>{t("clientsPage.expertiseTitle")}</SectionEyebrow>
            <h2 className="text-h2 mt-3 max-w-xl">
              {t("clientsPage.expertiseSubtitle")}
            </h2>
          </Reveal>
          <Reveal stagger className="mt-8 grid gap-4 sm:grid-cols-2">
            {expertise.map((item) => (
              <div
                key={item}
                className="ring-border shadow-card ssi-lift flex items-start gap-3 rounded-xl bg-white px-5 py-4 ring-1"
              >
                <Check className="text-signal mt-0.5 size-5 shrink-0" />
                <span className="text-slate/85 text-sm">{item}</span>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Gallery */}
      <section className="border-border bg-cloud border-t py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionEyebrow>{t("clientsPage.galleryTitle")}</SectionEyebrow>
            <h2 className="text-h2 mt-3">{t("clientsPage.gallerySubtitle")}</h2>
          </Reveal>
          <Reveal stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((g) => (
              <div
                key={g.src}
                className="ring-border ssi-lift group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1"
              >
                <Image
                  src={g.src}
                  alt={t(`galleryPage.captions.${g.captionKey}`)}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
            {/* TODO: add heavy-lift photos from the brochure */}
            <div className="border-border text-steel flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed bg-white text-center text-sm">
              More photos coming soon
            </div>
          </Reveal>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
