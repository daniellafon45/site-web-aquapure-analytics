import { createFileRoute } from "@tanstack/react-router";
import {
  Box,
  Database,
  Leaf,
  LineChart,
  Monitor,
  Shield,
  SlidersHorizontal,
  Upload,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SiteFooter } from "@/components/site/footer";
import { SiteNav } from "@/components/site/nav";
import logoAquapure from "@/assets/logo-aquapure.png";
import logoAquapureIcon from "@/assets/logo-aquapure-icon.png";
import indWater from "@/assets/ind-water.png";
import indMine from "@/assets/ind-mine.png";
import aquaActionLogo from "@/assets/partners/aqua-action.png";
import aquaHackingLogo from "@/assets/partners/aqua-hacking.png";
import desjardinsLogo from "@/assets/partners/desjardins.png";
import etsLogo from "@/assets/partners/ets.png";
import oseEntreprendreLogo from "@/assets/partners/ose-entreprendre.png";
import { useLocale } from "@/i18n/context";
import { PageMeta } from "@/components/site/page-meta";

export const Route = createFileRoute("/jumeau-numerique")({
  component: JumeauNumeriquePage,
});

function DiagramWires() {
  return (
    <svg
      className="diagram-wires absolute inset-0 hidden lg:block w-full h-full pointer-events-none"
      viewBox="0 0 1040 520"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <line className="wire-blue" x1="278" y1="260" x2="762" y2="260" />
      <circle className="wire-dot" cx="278" cy="260" r="4" />
      <circle className="wire-dot" cx="762" cy="260" r="4" />
    </svg>
  );
}

function PlatformDiagram() {
  const { t } = useLocale();
  const diagram = t.digitalTwin.diagram;
  return (
    <div className="diagram-platform rounded-2xl border border-border/50 p-4 sm:p-5 md:p-8 lg:p-10 shadow-sm">
      <div className="relative mx-auto w-full max-w-6xl min-h-[380px] lg:min-h-[420px]">
        <DiagramWires />

        <div className="relative grid lg:grid-cols-[minmax(0,280px)_auto_minmax(0,320px)] gap-y-8 lg:gap-x-16 xl:gap-x-24 items-center justify-items-center">
          <div className="w-full max-w-[280px] lg:justify-self-end">
            <article className="diagram-node diagram-node--violet p-5 text-left">
              <div className="flex items-center gap-2 mb-3">
                <img src={logoAquapure} alt="" className="h-5 w-auto" />
                <span className="text-[11px] font-semibold text-violet-900/80">{diagram.brandLabel}</span>
              </div>
              <p className="text-sm font-bold text-navy leading-snug">{diagram.hostedTitle}</p>
              <p className="text-xs text-muted-foreground mt-1">{diagram.hostedSubtitle}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(diagram.databases || ["PostgreSQL", "MongoDB", "SQL"]).map((db: string) => (
                  <span key={db} className="diagram-format">
                    <Database className="size-3 text-primary" />
                    {db}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-[11px] font-semibold text-primary">{diagram.connectedLabel}</p>

              <div className="mt-5 pt-5 border-t border-border/50">
                <p className="text-sm font-bold text-navy">{diagram.externalSourcesTitle}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(diagram.externalFormats || [{ label: "JSON", color: "text-amber-700" }]).map((f: any) => (
                    <span key={f.label} className="diagram-format">
                      <Upload className={`size-3 ${f.color}`} />
                      {f.label}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>

          <div className="flex items-center justify-center px-4 lg:px-8 z-10 lg:self-center">
            <div className="diagram-node size-[4.5rem] rounded-2xl flex items-center justify-center shadow-md p-2.5 bg-white relative">
              <img src={logoAquapureIcon} alt="Hub AquaPure" className="h-full w-full object-contain" />
            </div>
          </div>

          <div className="w-full max-w-[320px] lg:justify-self-start">
            <article className="diagram-node diagram-node--sky p-5 md:p-6 text-left space-y-4">
              <p className="text-sm font-bold text-navy">{diagram.platformTitle}</p>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{diagram.interfaceLabel}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {(diagram.interfaceItems || ["Grille", "Moniteur", "Éditeur", "Formulaire"]).map((t: string) => (
                    <span key={t} className="diagram-format text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-[11px] font-semibold text-primary">{diagram.moreLabel}</p>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{diagram.apiServerLabel}</p>
                <div className="mt-2 space-y-1.5">
                  {(diagram.serverTargets || ["Web", "Applications tierces", "Mobile"]).map((t: string) => (
                    <div key={t} className="diagram-format w-full justify-start text-[11px]">
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border/50 bg-white p-3">
                <p className="text-[10px] font-semibold text-muted-foreground leading-snug">{diagram.requestLabel}</p>
                <div className="mt-3 h-[4.5rem] rounded-lg bg-gradient-to-br from-slate-50 to-white border border-border/40 relative overflow-hidden">
                  <svg className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)]" viewBox="0 0 200 60" aria-hidden>
                    <polyline points="0,45 30,38 55,42 80,22 105,28 130,15 155,25 180,10 200,18" fill="none" stroke="oklch(0.55 0.22 264)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    {[
                      [0, 45],
                      [30, 38],
                      [55, 42],
                      [80, 22],
                      [105, 28],
                      [130, 15],
                      [155, 25],
                      [180, 10],
                      [200, 18],
                    ].map(([cx, cy], i) => (
                      <circle key={i} cx={cx} cy={cy} r="2.5" fill="oklch(0.55 0.22 264)" />
                    ))}
                  </svg>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

const ICONS = [LineChart, Box, Monitor, SlidersHorizontal, Leaf, Shield];

function JumeauNumeriquePage() {
  const { t } = useLocale();
  const partners = [
    { name: "Aqua Action", src: aquaActionLogo },
    { name: "ÉTS", src: etsLogo },
    { name: "AquaHacking Défi Québec", src: aquaHackingLogo },
    { name: "Défi OSEntreprendre", src: oseEntreprendreLogo },
    { name: "Desjardins", src: desjardinsLogo },
  ];

  const why = (t.digitalTwin.whyFeatures || []).map((f: any, i: number) => ({
    icon: ICONS[i] ?? LineChart,
    title: f.title,
    desc: f.desc,
  }));

  return (
    <main className="bg-background overflow-hidden">
      <PageMeta title={t.meta.digitalTwinTitle} description={t.meta.digitalTwinDescription} />
      <SiteNav active="jumeau-numerique" />

      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight">{t.digitalTwin.title}</h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.digitalTwin.lead}</p>
          </Reveal>
          <Reveal delay={120} className="mt-10">
            <PlatformDiagram />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#0a1628] text-navy-foreground px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.digitalTwin.whyTitle}</h2>
              <p className="mt-4 text-sm md:text-base text-white/60 leading-relaxed">{t.digitalTwin.whyLead}</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {why.map((f: any, i: number) => (
              <Reveal key={f.title} delay={i * 60} className="h-full">
                <article className="feature-card-nocodb group h-full">
                  <f.icon className="size-8 text-white/85 mb-6 transition-transform duration-300 group-hover:scale-105" strokeWidth={1.25} />
                  <h3 className="font-bold text-base md:text-[1.05rem] text-white leading-snug pr-2">{f.title}</h3>
                  <p className="mt-3 text-sm text-white/55 leading-relaxed">{f.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">{t.digitalTwin.partnersTitle}</h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.digitalTwin.partnersLead}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-14">
              {partners.map((p) => (
                <img key={p.name} src={p.src} alt={p.name} width={180} height={60} loading="lazy" className="h-12 md:h-14 w-auto object-contain" />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-center text-2xl md:text-3xl font-bold text-black">{t.digitalTwin.contactTitle}</h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              { img: indWater, label: t.digitalTwin.contactCardMunicipal, href: "/#contact" },
              { img: indMine, label: t.digitalTwin.contactCardIndustry, href: "/#contact" },
            ].map((card, i) => (
              <Reveal key={card.label} delay={i * 100}>
                <a href={card.href} className="group relative block aspect-[16/9] overflow-hidden rounded-2xl border border-border/60 hover-lift">
                  <img src={card.img} alt={card.label} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-md bg-white text-navy px-5 py-2.5 text-sm font-semibold shadow-md group-hover:bg-white/90 transition-colors">{t.digitalTwin.contactCta}</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <span className="absolute bottom-6 left-6 text-xl md:text-2xl font-bold text-white">{card.label}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
