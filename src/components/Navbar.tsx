import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logos/LogoMole_oscuro.png";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/95 border-b border-hero-dark/50 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/#inicio" className="flex h-11 w-28 items-center overflow-hidden rounded-sm">
          <img src={logo} alt="Mole SPA" className="h-full w-full object-cover object-center" />
        </Link>
        <div className="hidden md:flex gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                isActive(item.hash)
                  ? "text-accent"
                  : "text-hero-foreground/70 hover:text-hero-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          to="/#contacto"
          className="hidden md:inline-flex px-5 py-2 rounded-md bg-accent text-accent-foreground font-heading font-semibold text-sm hover:brightness-110 transition"
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
        <div className="md:hidden bg-hero-dark border-t border-hero/50 px-4 pb-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-hero-foreground/70 hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#contacto"
            onClick={() => setOpen(false)}
            className="block w-full text-center px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-heading font-semibold text-sm mt-2"
          >
            ¡Contáctanos!
          </Link>
        </div>
      )}
    </nav>
  );
}
