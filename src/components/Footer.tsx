import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logos/LogoMole_oscuro.png";

export default function Footer() {
  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-4 h-14 w-36 overflow-hidden rounded-sm">
              <img src={logo} alt="Mole SPA" className="h-full w-full object-cover object-center" />
            </div>
            <p className="text-hero-foreground/60 text-sm leading-relaxed">
              Servicios de Mantenimiento, Fabricación y Montaje Industrial
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-accent mb-4">Navegación</h4>
            <div className="space-y-2">
              {[
                { label: "Inicio", href: "/#inicio" },
                { label: "¿Quiénes Somos?", href: "/#nosotros" },
                { label: "Servicios", href: "/#servicios" },
                { label: "Contacto", href: "/#contacto" },
              ].map((l) => (
                <Link key={l.href} to={l.href} className="block text-sm text-hero-foreground/60 hover:text-accent transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-accent mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-hero-foreground/60">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span>Calle San Martín 553, Segundo Piso - Concepción - Chile</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent shrink-0" />
                <span>+56 9 8229 1920</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-accent shrink-0" />
                <span>contacto@molespa.cl</span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-divider mt-10 mb-6" />
        <p className="text-center text-hero-foreground/40 text-xs">
          © {new Date().getFullYear()} MOLE SPA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
