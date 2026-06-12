import { Link } from "@tanstack/react-router";
import logoAquapure from "@/assets/logo-aquapure.png";

export function Logo({ className = "h-11 md:h-12 w-auto" }: { className?: string }) {
  return (
    <Link to="/">
      <img src={logoAquapure} alt="AquaPure Analytics" width={200} height={48} className={className} />
    </Link>
  );
}
