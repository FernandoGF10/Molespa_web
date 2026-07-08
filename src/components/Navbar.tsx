import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logos/logo_transparente.png";

const NAV_ITEMS = [
  { label: "Inicio", href: "/#inicio", hash: "#inicio" },
  { label: "¿Quiénes Somos?", href: "/#nosotros", hash: "#nosotros" },
  { label: "Servicios", href: "/#servicios", hash: "#servicios" },
  { label: "Contacto", href: "/#contacto", hash: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = (hash: string) =>
    location.hash === hash || (!location.hash && hash === "#inicio");

  return (
    <nav className="fixed top-3 left-0 right-0 z-50 px-3">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 rounded-2xl border border-white/22 bg-hero-dark/72 shadow-[0_18px_60px_hsl(215_35%_8%/0.32)] backdrop-blur-2xl supports-[backdrop-filter]:bg-hero-dark/58">
        <Link to="/#inicio" className="flex h-12 w-36 items-center rounded-xl bg-white/90 px-3 shadow-[inset_0_1px_0_hsl(0_0%_100%/0.35),0_8px_24px_hsl(215_35%_8%/0.12)]">
          <img src={logo} alt="Mole SPA" className="h-full w-full object-contain object-left drop-shadow-sm" />
        </Link>
        <div className="hidden md:flex gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                isActive(item.hash)
                  ? "bg-white text-accent shadow-[0_8px_24px_hsl(215_35%_8%/0.18)]"
                  : "bg-white/90 text-foreground shadow-[inset_0_1px_0_hsl(0_0%_100%/0.35)] hover:bg-white hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          to="/#contacto"
          className="hidden md:inline-flex rounded-full border border-accent bg-accent px-5 py-2 text-sm font-heading font-semibold text-accent-foreground shadow-[0_10px_30px_hsl(200_80%_30%/0.28)] transition hover:brightness-110 hover:-translate-y-0.5"
        >
          ¡Contáctanos!
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-hero-foreground"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="container mx-auto mt-2 rounded-2xl border border-white/18 bg-hero-dark/78 px-4 pb-4 pt-2 shadow-[0_18px_60px_hsl(215_35%_8%/0.32)] backdrop-blur-2xl md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-full bg-white/90 px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-white hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#contacto"
            onClick={() => setOpen(false)}
            className="block w-full text-center px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-heading font-semibold text-sm mt-2"
          >
            ¡Contáctanos!
          </Link>
        </div>
      )}
    </nav>
  );
}
