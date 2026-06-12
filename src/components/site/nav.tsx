import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Logo } from "./logo";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { label: "Nos secteurs", href: "/#secteurs" },
  { label: "Fonctionnalités", href: "/#fonctionnalites" },
  { label: "Intégrations", href: "/#integrations" },
  { label: "Jumeau numérique", to: "/jumeau-numerique" as const, id: "jumeau-numerique" },
  { label: "Blogue", to: "/blogue" as const, id: "blogue" },
];

function NavLinkItem({
  link,
  active,
  onNavigate,
}: {
  link: (typeof links)[number];
  active?: string;
  onNavigate?: () => void;
}) {
  const className =
    "to" in link
      ? `block py-2 text-base font-medium transition-colors hover:text-primary ${
          active === link.id ? "text-primary font-semibold" : "text-navy/80"
        }`
      : "block py-2 text-base font-medium text-navy/80 hover:text-primary transition-colors";

  if ("to" in link) {
    return (
      <Link to={link.to} className={className} onClick={onNavigate}>
        {link.label}
      </Link>
    );
  }

  return (
    <a href={link.href} className={className} onClick={onNavigate}>
      {link.label}
    </a>
  );
}

export function SiteNav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3">
        <Logo className="h-9 sm:h-11 md:h-12 w-auto shrink-0" />

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-base font-medium text-navy/80">
          {links.map((l) => (
            <NavLinkItem key={l.label} link={l} active={active} />
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="/#contact"
            className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent whitespace-nowrap"
          >
            Nous contacter
          </a>
          <a
            href="/#contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 whitespace-nowrap"
          >
            Demander une démo
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <a
            href="/#contact"
            className="rounded-md bg-primary px-3 py-2 text-xs sm:text-sm font-medium text-primary-foreground hover:bg-primary/90 whitespace-nowrap"
          >
            Démo
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-10 items-center justify-center rounded-md border border-input bg-background hover:bg-accent"
              aria-label="Ouvrir le menu"
            >
              <Menu className="size-5 text-navy" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw-2rem,20rem)] p-6">
              <SheetTitle className="text-left text-lg font-bold text-navy">Menu</SheetTitle>
              <nav className="mt-6 flex flex-col gap-1">
                {links.map((l) => (
                  <NavLinkItem key={l.label} link={l} active={active} onNavigate={closeMenu} />
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="/#contact"
                  onClick={closeMenu}
                  className="rounded-md border border-input bg-background px-4 py-2.5 text-center text-sm font-medium hover:bg-accent"
                >
                  Nous contacter
                </a>
                <a
                  href="/#contact"
                  onClick={closeMenu}
                  className="rounded-md bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Demander une démo
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
