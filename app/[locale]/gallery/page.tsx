import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { PageHero } from "@/components/common/page-hero";
import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { Reveal } from "@/components/common/reveal";
import { ClosingCta } from "@/components/sections/closing-cta";
import { GALLERY } from "@/lib/site-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "galleryPage" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      <PageHero
        eyebrow={t("galleryPage.eyebrow")}
        title={t("galleryPage.title")}
        subtitle={t("galleryPage.subtitle")}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionEyebrow>{t("galleryPage.sectionTitle")}</SectionEyebrow>
            <h2 className="text-h2 mt-3 max-w-2xl">
              {t("galleryPage.sectionSubtitle")}
            </h2>
          </Reveal>

          {/* To add more: drop the file in public/photos/gallery/ and add a row
              to GALLERY in lib/site-data.ts (set type:"video" for clips). */}
          <Reveal stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((item) => {
              const caption = t(`galleryPage.captions.${item.captionKey}`);
              return (
                <figure
                  key={item.src}
                  className="ring-border shadow-card ssi-lift group overflow-hidden rounded-xl bg-white ring-1"
                >
                  <div className="bg-cloud relative aspect-[4/3] overflow-hidden">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        controls
                        playsInline
                        preload="metadata"
                        className="size-full object-cover"
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt={caption}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <figcaption className="text-steel px-4 py-3 text-sm">
                    {caption}
                  </figcaption>
                </figure>
              );
            })}
          </Reveal>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
