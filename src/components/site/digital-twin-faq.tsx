import { Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/reveal";
import type { FaqAnswerSegment, DigitalTwinFaqContent } from "@/i18n/types";

function FaqAnswerBody({ segments }: { segments: FaqAnswerSegment[] }) {
  return (
    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
      {segments.map((segment, index) => {
        if (segment.type === "text") {
          return <span key={index}>{segment.value}</span>;
        }
        const className = "font-medium text-primary underline-offset-2 hover:underline";
        if (segment.href.startsWith("mailto:")) {
          return (
            <a key={index} href={segment.href} className={className}>
              {segment.label}
            </a>
          );
        }
        if (segment.external || segment.href.startsWith("http")) {
          return (
            <a
              key={index}
              href={segment.href}
              className={className}
              target="_blank"
              rel="noopener noreferrer"
            >
              {segment.label}
            </a>
          );
        }
        if (segment.href.includes("#")) {
          return (
            <a key={index} href={segment.href} className={className}>
              {segment.label}
            </a>
          );
        }
        return (
          <Link key={index} to={segment.href} className={className}>
            {segment.label}
          </Link>
        );
      })}
    </p>
  );
}

type DigitalTwinFaqProps = {
  faq: DigitalTwinFaqContent;
};

export function DigitalTwinFaq({ faq }: DigitalTwinFaqProps) {
  return (
    <section
      className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-muted/30 border-t border-border/40"
      aria-labelledby="digital-twin-faq-title"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="text-center mb-10 md:mb-12">
            <h2
              id="digital-twin-faq-title"
              className="text-2xl md:text-3xl font-bold text-black tracking-tight"
            >
              {faq.title}
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {faq.subtitle}
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Accordion type="single" collapsible className="w-full rounded-xl border border-border/60 bg-background px-4 sm:px-6">
            {faq.items.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-base font-semibold text-navy hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <FaqAnswerBody segments={item.segments} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
