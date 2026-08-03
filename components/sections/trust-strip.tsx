import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/common/container";

export function TrustStrip() {
  const t = useTranslations("home.trust");
  const items = t.raw("items") as string[];

  return (
    <div className="bg-navy text-white/85">
      <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3.5 text-sm">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <Check className="size-4 text-sky" />
            {item}
          </span>
        ))}
      </Container>
    </div>
  );
}
