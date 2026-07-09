import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logos/logo_sin_fondo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-hero px-4 py-10 text-hero-foreground">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(120deg,transparent_0,transparent_45%,hsl(200_80%_50%/0.24)_45%,hsl(200_80%_50%/0.24)_46%,transparent_46%),linear-gradient(90deg,hsl(0_0%_100%/0.08)_1px,transparent_1px),linear-gradient(0deg,hsl(0_0%_100%/0.08)_1px,transparent_1px)] [background-size:280px_280px,88px_88px,88px_88px]" />
      <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full border border-accent/15" />
      <div className="absolute bottom-[-10rem] right-[-6rem] h-96 w-96 rounded-full border border-white/10" />
      <div className="relative w-full">
        <div className="rounded-2xl border border-white/15 bg-white/8 p-6 shadow-[inset_0_1px_0_hsl(0_0%_100%/0.18),0_22px_70px_hsl(215_35%_8%/0.28)] backdrop-blur-2xl md:p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.8fr_1.1fr] md:items-start md:divide-x md:divide-white/10">
          <div className="md:pr-10">
            <div className="mb-5 flex h-24 w-64 max-w-full items-center justify-start rounded-2xl border border-white/15 bg-white/92 p-2 shadow-[inset_0_1px_0_hsl(0_0%_100%/0.55),0_16px_40px_hsl(215_35%_8%/0.18)]">
              <div className="h-full w-full overflow-hidden rounded-xl bg-white px-4">
                <img src={logo} alt="Mole SPA" className="h-full w-full object-contain object-left contrast-125 saturate-125" />
              </div>
            </div>
            <p className="text-hero-foreground/60 text-sm leading-relaxed">
              Servicios de Mantenimiento, Fabricación y Montaje Industrial
            </p>
          </div>
          <div className="md:px-10">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-accent mb-4">Navegación</h4>
            <div className="space-y-2.5">
              {[
                { label: "Inicio", href: "/#inicio" },
                { label: "¿Quiénes Somos?", href: "/#nosotros" },
                { label: "Servicios", href: "/#servicios" },
                { label: "Obras", href: "/#obras" },
                { label: "Contacto", href: "/#contacto" },
              ].map((l) => (
                <Link key={l.href} to={l.href} className="block border-b border-white/5 pb-1.5 text-sm text-hero-foreground/60 transition-colors last:border-b-0 hover:text-accent">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:pl-10">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-accent mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-hero-foreground/60">
              <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span>Calle San Martín 553, Segundo Piso - Concepción - Chile</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-3">
                <Phone size={16} className="text-accent shrink-0" />
                <span>+56 9 8229 1920</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-3">
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
      </div>
    </footer>
  );
}
