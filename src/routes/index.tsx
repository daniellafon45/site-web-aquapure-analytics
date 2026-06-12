import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Calendar,
  Zap,
  Database,
  Upload,
  Users,
  Share2,
  Layers,
  Code2,
  Webhook,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import indWater from "@/assets/ind-water.png";
import indMine from "@/assets/ind-mine.png";
import indPaper from "@/assets/ind-paper.png";
import indAgro from "@/assets/ind-agro.png";
import erdMock from "@/assets/erd-mock.png";
import featureApis from "@/assets/features/apis.png";
import featureAutomate from "@/assets/features/automate.png";
import featureImportExport from "@/assets/features/import-export.png";
import featureInviteTeam from "@/assets/features/invite-team.png";
import featureMissionScoot from "@/assets/features/mission-scoot.png";
import featureRealtime from "@/assets/features/realtime.png";
import featureShareProject from "@/assets/features/share-project.png";
import honeywellLogo from "@/assets/integrations/honeywell.png";
import knxLogo from "@/assets/integrations/knx.png";
import lacroixLogo from "@/assets/integrations/lacroix.png";
import modbusLogo from "@/assets/integrations/modbus.png";
import opcUaLogo from "@/assets/integrations/opc-ua.png";
import profinetLogo from "@/assets/integrations/profinet.png";
import rockwellLogo from "@/assets/integrations/rockwell.png";
import schneiderLogo from "@/assets/integrations/schneider.png";
import siemensLogo from "@/assets/integrations/siemens.png";
import wagoLogo from "@/assets/integrations/wago.png";
import aquaActionLogo from "@/assets/partners/aqua-action.png";
import aquaHackingLogo from "@/assets/partners/aqua-hacking.png";
import desjardinsLogo from "@/assets/partners/desjardins.png";
import etsLogo from "@/assets/partners/ets.png";
import oseEntreprendreLogo from "@/assets/partners/ose-entreprendre.png";
import { submitContactFormClient } from "@/lib/contact-submit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aquapure Analytics, Maîtrisez vos opérations hydriques" },
      { name: "description", content: "Optimisez la gestion de l'eau grâce à la donnée, l'IA et l'intelligence en temps réel. Réduisez vos coûts, atteignez vos objectifs ESG." },
    ],
  }),
  component: Index,
});
function SpreadsheetHoverBackground({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50, active: false });

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  const zoomMask = `radial-gradient(circle 220px at ${spot.x}% ${spot.y}%, #000 0%, #000 35%, transparent 72%)`;

  return (
    <main
      ref={containerRef}
      className="relative bg-background overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setSpot((s) => ({ ...s, active: false }))}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
        <div
          className="absolute inset-0 spreadsheet-grid transition-opacity duration-200"
          style={{
            opacity: spot.active ? 1 : 0,
            transform: spot.active ? "scale(1.4)" : "scale(1)",
            transformOrigin: `${spot.x}% ${spot.y}%`,
            WebkitMaskImage: zoomMask,
            maskImage: zoomMask,
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </main>
  );
}

function Hero() {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <Reveal>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08]">
            <span className="text-black">Maîtrisez vos opérations hydriques<br className="hidden sm:block" />{" "}grâce à la donnée et l&apos;IA</span>
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Transformez vos données en décisions immédiates : moins de gaspillage, plus de contrôle,
            et une performance durable, sans bouleverser vos opérations actuelles.
            <span className="mt-3 block font-semibold text-foreground">
              Vos données sont hébergées au Québec, chez vous.
            </span>
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto">
            <a href="#contact" className="rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent transition-colors text-center">Nous contacter</a>
            <a href="#contact" className="group rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 inline-flex items-center justify-center gap-1.5">
              Demander une démo <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5"/>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Industries() {
  const items = [
    {
      img: indWater,
      label: "EAUX MUNICIPALES",
      title: "Distribution efficace, eau de qualité.",
      desc: "Assurez une distribution efficace et la qualité de l'eau grâce à l'analyse en temps réel, prévenant les fuites et optimisant le traitement pour les communautés.",
    },
    {
      img: indMine,
      label: "MINE",
      title: "Extraction optimisée, impact maîtrisé.",
      desc: "Optimisez l'extraction et la gestion des ressources avec des modèles prédictifs robustes, garantissant la sécurité opérationnelle et réduisant l'impact environnemental.",
    },
    {
      img: indPaper,
      label: "PÂTE ET PAPIER",
      title: "Eau industrielle sous contrôle.",
      desc: "Réduisez la consommation d'eau et maîtrisez le traitement des effluents grâce à une supervision en temps réel et une maintenance prédictive de vos installations.",
    },
    {
      img: indAgro,
      label: "AGRO ALIMENTAIRE",
      title: "Qualité et conformité, en continu.",
      desc: "Sécurisez la qualité de l'eau dans vos procédés alimentaires avec une analyse intelligente, des alertes proactives et une traçabilité complète.",
    },
  ];
  return (
    <section id="secteurs" className="px-4 sm:px-6 pb-20 sm:pb-24 scroll-mt-28 sm:scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">Nos secteurs</div>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-black leading-[1.15]">
              Conçu pour les environnements opérationnels complexes
            </h2>
            <p className="mt-4 text-base md:text-lg text-black leading-relaxed max-w-3xl mx-auto">
              Transformez vos engagements ESG en résultats opérationnels concrets : réduisez la consommation d&apos;eau,
              limitez votre empreinte carbone et documentez vos progrès avec une précision que vos équipes et vos
              parties prenantes peuvent défendre, grâce à l&apos;analyse en temps réel et à l&apos;IA, au cœur des
              industries québécoises.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 100}>
              <article className="group overflow-hidden rounded-2xl border border-border/60 bg-card hover-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.label}
                    width={800}
                    height={500}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href="#contact"
                      className="rounded-md bg-white text-navy px-5 py-2.5 text-sm font-semibold shadow-md hover:bg-white/90 transition-colors"
                    >
                      Planifier une rencontre
                    </a>
                  </div>
                  <span className="absolute bottom-4 left-5 text-[11px] font-bold tracking-[0.18em] text-white">
                    {it.label}
                  </span>
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-navy leading-snug">{it.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

type FeatureView = {
  id: string;
  label: string;
  icon: LucideIcon;
  category: string;
  categoryIcon: LucideIcon;
  title: string;
  description: string;
  image: string;
};

const FEATURE_VIEWS: FeatureView[] = [
  {
    id: "connect-external-db",
    label: "Connexion BD externe",
    icon: Database,
    category: "Intégration des données\net connectivité",
    categoryIcon: Database,
    title: "Données capteurs en temps réel",
    description: "Visualisez chaque lecture, chaque équipement, chaque filière, et réagissez avant que le problème ne coûte cher.",
    image: featureRealtime,
  },
  {
    id: "import",
    label: "Import",
    icon: Upload,
    category: "Intégration des données\net connectivité",
    categoryIcon: Database,
    title: "Import et export",
    description: "Récupérez l'historique sur la période et le format qui comptent pour vos rapports, audits et décisions.",
    image: featureImportExport,
  },
  {
    id: "invite-team",
    label: "Inviter l'équipe",
    icon: Users,
    category: "Collaboration",
    categoryIcon: Users,
    title: "Gestion d'équipe",
    description: "Centralisez rôles, activités terrain et suivi opérationnel, une seule source de vérité pour toute l'organisation.",
    image: featureInviteTeam,
  },
  {
    id: "share-project",
    label: "Partager un projet",
    icon: Share2,
    category: "Collaboration",
    categoryIcon: Users,
    title: "Éditeur de rapports",
    description: "Produisez des rapports clairs et partageables qui renforcent la confiance de vos parties prenantes.",
    image: featureShareProject,
  },
  {
    id: "mission-scoot",
    label: "Mission Scoot",
    icon: Target,
    category: "Collaboration",
    categoryIcon: Users,
    title: "Missions terrain",
    description: "Envoyez vos techniciens au bon endroit, au bon moment, avec preuves photo, GPS et instructions précises.",
    image: featureMissionScoot,
  },
  {
    id: "erd",
    label: "Schéma ERD",
    icon: Layers,
    category: "Gestion des schémas",
    categoryIcon: Layers,
    title: "Diagramme ERD",
    description: "Comprenez en un coup d'œil la structure de vos données et accélérez chaque intégration.",
    image: erdMock,
  },
  {
    id: "apis",
    label: "APIs",
    icon: Code2,
    category: "Intégrations\net automatisations",
    categoryIcon: Code2,
    title: "Jumeau numérique et APIs",
    description: "Pilotez paramètres, seuils de sécurité et autorisations SCADA depuis une plateforme unifiée.",
    image: featureApis,
  },
  {
    id: "automate",
    label: "Intégration automate facile",
    icon: Webhook,
    category: "Intégrations\net automatisations",
    categoryIcon: Code2,
    title: "Connexions SCADA",
    description: "Branchez vos automates et systèmes industriels, PI, Ignition, Wonderware, sans repartir de zéro.",
    image: featureAutomate,
  },
];

function Features() {
  const [activeId, setActiveId] = useState("erd");
  const activeView = FEATURE_VIEWS.find((v) => v.id === activeId) ?? FEATURE_VIEWS[0];

  const featureRows = FEATURE_VIEWS.reduce<
    { title: string; icon: LucideIcon; views: FeatureView[] }[]
  >((rows, view) => {
    const existing = rows.find((r) => r.title === view.category);
    if (existing) {
      existing.views.push(view);
    } else {
      rows.push({ title: view.category, icon: view.categoryIcon, views: [view] });
    }
    return rows;
  }, []);

  return (
    <section id="fonctionnalites" className="px-4 sm:px-6 pb-20 sm:pb-24 scroll-mt-28 sm:scroll-mt-32">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Fonctionnalités</h2>
          <p className="mt-3 text-sm md:text-base text-navy/85 max-w-md leading-relaxed font-medium">
            L&apos;interface est très ergonomique et pensée pour être très intuitive et facile à utiliser.
          </p>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
            Nous déployons des systèmes interopérables branchés sur votre infrastructure actuelle, puis adaptons
            chaque module à vos besoins réels, pour que la technologie accélère vos opérations, sans les
            complexifier.
          </p>
          <div className="mt-8 space-y-5">
            {featureRows.map((row) => (
              <div key={row.title} className="flex flex-col gap-3 sm:grid sm:grid-cols-[minmax(0,140px)_minmax(0,1fr)] sm:items-center sm:gap-4">
                <div className="flex items-center gap-2 min-w-0">
                  <row.icon className="size-4 text-muted-foreground shrink-0" />
                  <span className="text-[13px] font-semibold text-navy whitespace-pre-line leading-tight">
                    {row.title}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {row.views.map((view) => (
                    <button
                      key={view.id}
                      type="button"
                      onClick={() => setActiveId(view.id)}
                      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[12px] font-medium shadow-sm transition-all duration-300 cursor-pointer ${
                        activeId === view.id
                          ? "border-primary/40 bg-primary/10 text-primary"
                          : "border-border bg-card text-navy/80 hover:border-primary/25 hover:bg-primary/5"
                      }`}
                    >
                      <view.icon className="size-3" />
                      {view.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-soft-2 p-4 sm:p-6 lg:sticky lg:top-28 min-h-0 lg:min-h-[500px] flex flex-col">
          <div key={activeId} className="feature-preview-animate flex flex-col flex-1">
            <div className="min-h-[4.5rem]">
              <div className="text-navy font-bold">{activeView.title}</div>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                {activeView.description}
              </p>
            </div>
            <div className="mt-4 rounded-xl bg-card overflow-hidden border border-border/60 h-[280px] sm:h-[300px] md:h-[340px] relative shrink-0">
              <img
                src={activeView.image}
                alt={activeView.title}
                width={1024}
                height={640}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-left-top grayscale select-none pointer-events-none"
                draggable={false}
              />
            </div>
            <a
              href="#contact"
              className="mt-4 self-start rounded-md bg-card border border-border px-3 py-1.5 text-xs font-medium hover:bg-accent transition-colors"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCircle({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div className="relative size-14 shrink-0">
      <svg viewBox="0 0 60 60" className="size-full -rotate-90">
        <circle cx="30" cy="30" r="26" stroke="oklch(0.92 0.01 255)" strokeWidth="4" fill="none"/>
        <circle cx="30" cy="30" r="26" stroke={color} strokeWidth="4" fill="none" strokeDasharray="120 200" strokeLinecap="round"/>
      </svg>
      <div className="absolute inset-0 grid place-items-center">{children}</div>
    </div>
  );
}

function Stats() {
  const items = [
    {
      icon: (
        <div className="size-14 rounded-md border-2 border-navy/80 grid place-items-center relative shrink-0">
          <div className="absolute top-0 left-2 w-1 h-2 bg-yellow-400 -translate-y-1"/>
          <div className="absolute top-0 right-2 w-1 h-2 bg-yellow-400 -translate-y-1"/>
          <Calendar className="size-7 text-navy/80"/>
        </div>
      ),
      value: "24/7",
      label: "Pilotage intelligent de vos procédés industriels",
    },
    {
      icon: (
        <StatCircle color="oklch(0.75 0.16 70)">
          <Zap className="size-5 text-yellow-500 fill-yellow-500"/>
        </StatCircle>
      ),
      value: "-30%",
      label: "Réduction mesurable de votre consommation énergétique",
    },
    {
      icon: (
        <StatCircle color="oklch(0.7 0.15 160)">
          <span className="text-[10px] font-bold text-emerald-700">CO<sub>2</sub></span>
        </StatCircle>
      ),
      value: "-40%",
      label: "Diminution concrète de votre empreinte carbone",
    },
  ];

  return (
    <section className="px-4 sm:px-6 pb-16 sm:pb-20">
      <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card px-5 py-8 sm:px-8 sm:py-10 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {items.map((item) => (
            <div key={item.value} className="flex items-center gap-5 w-[240px] max-w-full">
              {item.icon}
              <div className="min-w-0">
                <div className="text-3xl font-extrabold text-navy leading-none">{item.value}</div>
                <div className="text-xs text-muted-foreground leading-tight mt-1.5">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  const logos = [
    { name: "Honeywell", src: honeywellLogo },
    { name: "KNX", src: knxLogo },
    { name: "LACROIX", src: lacroixLogo },
    { name: "Modbus", src: modbusLogo },
    { name: "OPC UA", src: opcUaLogo },
    { name: "PROFINET", src: profinetLogo },
    { name: "Rockwell Automation", src: rockwellLogo },
    { name: "Schneider Electric", src: schneiderLogo },
    { name: "Siemens", src: siemensLogo },
    { name: "WAGO", src: wagoLogo },
  ];
  return (
    <section id="integrations" className="px-4 sm:px-6 pb-12 scroll-mt-28 sm:scroll-mt-32">
      <div className="mx-auto max-w-7xl rounded-2xl bg-soft px-4 py-10 sm:px-6 md:px-10 sm:py-14 overflow-hidden">
        <Reveal>
          <h2 className="text-center text-2xl md:text-3xl font-bold text-navy">Compatible avec votre environnement de production</h2>
          <p className="mt-3 text-center text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Connectez-vous aux automates et protocoles que vous utilisez déjà, Modbus, OPC UA, Siemens, Schneider
            et plus, sans refonte de votre infrastructure.
          </p>
        </Reveal>
        <div className="mt-12 relative [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max items-center gap-20 md:gap-24 animate-marquee">
            {[...logos, ...logos].map((l, i) => (
              <img
                key={i}
                src={l.src}
                alt={l.name}
                width={280}
                height={96}
                loading="lazy"
                className="h-16 md:h-20 lg:h-24 w-auto shrink-0 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  const partners = [
    { name: "Aqua Action", src: aquaActionLogo },
    { name: "Desjardins", src: desjardinsLogo },
    { name: "AquaHacking Défi Québec", src: aquaHackingLogo },
    { name: "Défi OSEntreprendre", src: oseEntreprendreLogo },
    { name: "ÉTS", src: etsLogo },
  ];
  return (
    <section className="px-4 sm:px-6 pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl text-center overflow-hidden">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
            Soutenu par l&apos;écosystème d&apos;innovation du Québec
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Une technologie éprouvée, portée par les leaders de l&apos;innovation québécoise, pour accélérer votre
            transition numérique en toute confiance.
          </p>
        </Reveal>
        <div className="mt-10 relative [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max items-center gap-16 md:gap-20 animate-marquee">
            {[...partners, ...partners].map((p, i) => (
              <img
                key={i}
                src={p.src}
                alt={p.name}
                width={220}
                height={72}
                loading="lazy"
                className="h-14 md:h-16 w-auto shrink-0 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


type ContactFormState = {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  message: string;
};

const emptyContactForm: ContactFormState = {
  lastName: "",
  firstName: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  message: "",
};

function ContactField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  name: keyof ContactFormState;
  value: string;
  onChange: (name: keyof ContactFormState, value: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm text-white/90" htmlFor={name}>
        {label}
        {(name === "lastName" || name === "firstName" || name === "email") && (
          <span className="text-red-400">*</span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        className="mt-2 w-full h-11 rounded-xl bg-white px-3 text-navy outline-none placeholder:text-navy/40"
      />
    </div>
  );
}

function validateContactForm(form: ContactFormState): string | null {
  if (!form.lastName.trim()) return "Le nom est requis.";
  if (!form.firstName.trim()) return "Le prénom est requis.";
  if (!form.email.trim()) return "Le courriel est requis.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    return "Veuillez entrer une adresse courriel valide.";
  }
  if (!form.message.trim()) return "Décrivez votre besoin.";
  return null;
}

function Contact() {
  const [form, setForm] = useState<ContactFormState>(emptyContactForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const updateField = (name: keyof ContactFormState, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const validationError = validateContactForm(form);
    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);

    try {
      await submitContactFormClient(form);
      setForm(emptyContactForm);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-4 sm:px-6 pb-16 sm:pb-20 scroll-mt-28 sm:scroll-mt-32">
      <div className="mx-auto max-w-7xl rounded-2xl bg-navy text-navy-foreground overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="p-6 sm:p-8 lg:p-12 lg:pr-8">
            <h3 className="text-2xl md:text-3xl font-bold max-w-sm leading-tight">Parlons de votre projet</h3>
            <p className="mt-5 text-sm text-white/70 max-w-md leading-relaxed">
              Découvrez comment Aquapure Analytics peut améliorer votre performance environnementale et
              économique, avec une stratégie sur mesure, adaptée à votre réalité opérationnelle.
            </p>
          </div>

          <div className="border-t lg:border-t-0 lg:border-l border-white/10 p-6 sm:p-8 lg:p-12 lg:pl-10">
            <h3 className="text-xl md:text-2xl font-bold">Décrivez votre besoin</h3>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <ContactField label="Prénom" name="firstName" value={form.firstName} onChange={updateField} />
                <ContactField label="Nom" name="lastName" value={form.lastName} onChange={updateField} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <ContactField label="Courriel" name="email" type="email" value={form.email} onChange={updateField} />
                <ContactField label="Téléphone" name="phone" type="tel" value={form.phone} onChange={updateField} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <ContactField label="Entreprise" name="company" value={form.company} onChange={updateField} />
                <ContactField
                  label="Site web"
                  name="website"
                  value={form.website}
                  onChange={updateField}
                  placeholder="ex. aquapure-analytics.com"
                />
              </div>
              <div>
                <label className="text-sm text-white/90" htmlFor="message">
                  Votre besoin<span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Décrivez votre défi opérationnel, vos objectifs ESG ou le secteur visé…"
                  className="mt-2 w-full rounded-xl bg-white px-3 py-3 text-navy outline-none resize-y min-h-[120px] placeholder:text-navy/40"
                />
              </div>

              {error && <p className="text-sm text-red-300">{error}</p>}
              {success && (
                <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-sm leading-relaxed">
                  <p className="font-semibold text-white">Demande enregistrée avec succès</p>
                  <p className="mt-1.5 text-white/80">
                    Un membre de l&apos;équipe AquaPure analysera votre besoin et vous contactera
                    d&apos;ici un à deux jours ouvrables pour convenir d&apos;un échange ciblé sur
                    vos opérations hydriques.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="rounded-md bg-white text-navy px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Envoi en cours…" : "Envoyer ma demande"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <SpreadsheetHoverBackground>
      <SiteNav />
      <Hero />
      <Industries />
      <Features />
      <Stats />
      <Integrations />
      <TrustedBy />
      <Contact />
      <SiteFooter />
    </SpreadsheetHoverBackground>
  );
}
