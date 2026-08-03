import { useTranslations } from "next-intl";
import { Container } from "@/components/common/container";
import { HeadingRule } from "@/components/common/heading-rule";
import { Reveal } from "@/components/common/reveal";

export function ClientsStrip() {
  const t = useTranslations("home.clients");
  const clients = useTranslations("clients");
  const list = clients.raw("list") as string[];

  return (
    <section className="border-border bg-cloud border-y py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <HeadingRule />
          </div>
          <p className="text-eyebrow text-signal mt-3 font-semibold uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="text-h2 mt-3">{t("title")}</h2>
          <p className="text-steel mt-3">{t("subtitle")}</p>
        </Reveal>

        {/* TODO: swap text chips for approved client logos when provided. */}
        <Reveal stagger className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {list.map((c) => (
            <div
              key={c}
              className="border-border text-slate/80 shadow-card ssi-lift hover:border-signal/30 flex items-center justify-center rounded-lg border bg-white px-4 py-5 text-center text-sm font-medium"
            >
              {c}
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
