import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/common/container";
import { HeadingRule } from "@/components/common/heading-rule";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  const c = await getTranslations("cta");

  return (
    <section className="bg-ink text-white">
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <HeadingRule className="[&>span]:bg-sky [&>svg]:text-sky" />
        <p className="font-heading text-sky mt-6 text-6xl font-bold sm:text-7xl">
          404
        </p>
        <h1 className="font-heading mt-4 text-2xl font-bold text-white sm:text-3xl">
          {t("title")}
        </h1>
        <p className="mt-3 max-w-md text-white/70">{t("body")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-signal text-white hover:bg-sky"
            )}
          >
            {t("home")}
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "border-white/30 bg-transparent text-white hover:bg-white/10"
            )}
          >
            {c("contactUs")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
