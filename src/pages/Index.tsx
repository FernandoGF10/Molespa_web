import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import logoClaro from "@/assets/logos/LogoMole_claro.png";
import heroPiping from "@/assets/obras/obras-1.jpeg";
import heroObra from "@/assets/obras/Obras (18).jpeg";
import obraPiping from "@/assets/obras/Obras (10).jpeg";
import obraEquipo from "@/assets/obras/Obras (14).jpeg";
import obraIncendio from "@/assets/obras/Obras (21).jpeg";
import obraDetalle from "@/assets/obras/Obras (7).jpeg";
import obraMontaje from "@/assets/obras/Obras (12).jpeg";
import obraCivil from "@/assets/obras/Obras (23).jpeg";

const GALLERY = [
    { src: obraPiping, alt: "Montaje de piping industrial", className: "sm:col-span-2" },
    { src: obraEquipo, alt: "Equipo en obra de cañerías", className: "" },
    { src: obraIncendio, alt: "Instalación de red contra incendio", className: "" },
    { src: obraDetalle, alt: "Detalle de mantenimiento industrial", className: "" },
    { src: obraMontaje, alt: "Montaje industrial en terreno", className: "sm:col-span-2" },
    { src: obraCivil, alt: "Obras civiles industriales", className: "sm:col-span-3" },
];

const HERO_SLIDES = [
    {
        src: logoClaro,
        alt: "Logo de Mole Servicio Industrial",
        mode: "cover",
        className: "object-cover object-center",
    },
    {
        src: heroPiping,
        alt: "Equipo Mole trabajando en piping industrial",
        mode: "cover",
        className: "object-cover object-center",
    },
    {
        src: heroObra,
        alt: "Equipo Mole en obra industrial",
        mode: "cover",
        className: "object-cover object-center",
    },
];

export default function Index() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
        }, 5200);

        return () => window.clearInterval(interval);
    }, []);

    const currentSlide = HERO_SLIDES[activeSlide];

    return (
        <Layout>
            <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden scroll-mt-16 bg-hero">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentSlide.src}
                        src={currentSlide.src}
                        alt={currentSlide.alt}
                        initial={{ opacity: 0, scale: currentSlide.mode === "cover" ? 1.08 : 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: currentSlide.mode === "cover" ? 1.03 : 0.98 }}
                        transition={{ duration: 1.15, ease: "easeOut" }}
                        className={`absolute inset-0 h-full w-full ${currentSlide.className}`}
                    />
                </AnimatePresence>

                <div className="absolute inset-0 bg-hero/80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(200_80%_50%/0.16),transparent_42%)]" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-hero-dark to-transparent" />

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-accent font-heading font-semibold text-sm md:text-base tracking-widest uppercase mb-4"
                    >
                        MOLE SPA — CONCEPCIÓN, CHILE
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="font-heading font-black text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-hero-foreground drop-shadow-[0_8px_28px_hsl(215_35%_10%/0.45)]"
                    >
                        Empresa de servicios de mantenimiento, fabricación y{" "}
                        <span className="text-gradient">montaje industrial</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-hero-foreground/75 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                    >
                        Soluciones integrales para la industria con los más altos estándares de
                        calidad, seguridad y compromiso.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            to="/#contacto"
                            className="px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-heading font-bold text-base hover:brightness-110 hover:-translate-y-0.5 transition duration-300"
                        >
                            ¡Contáctanos!
                        </Link>

                        <Link
                            to="/#servicios"
                            className="px-8 py-3.5 rounded-md border border-hero-foreground/20 text-hero-foreground font-heading font-semibold text-base hover:bg-hero-foreground/10 hover:-translate-y-0.5 transition duration-300"
                        >
                            Nuestros Servicios
                        </Link>
                    </motion.div>

                    <div className="mt-8 flex justify-center gap-2" aria-label="Imágenes destacadas">
                        {HERO_SLIDES.map((slide, index) => (
                            <button
                                key={slide.alt}
                                type="button"
                                onClick={() => setActiveSlide(index)}
                                className={`h-1.5 rounded-full transition-all ${
                                    activeSlide === index ? "w-8 bg-accent" : "w-2.5 bg-hero-foreground/35 hover:bg-hero-foreground/60"
                                }`}
                                aria-label={`Ver imagen ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <motion.a
                    href="#servicios"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-hero-foreground/50 animate-bounce"
                >
                    <ChevronDown size={32} />
                </motion.a>
            </section>

            <AboutSection />

            <ServicesSection />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12"
                    >
                        <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-3">
                            Nuestro trabajo
                        </p>
                        <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground">
                            Obras
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-[240px] md:auto-rows-[280px]">
                        {GALLERY.map((img, index) => (
                            <motion.div
                                key={img.alt}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.6, delay: index * 0.12 }}
                                className={`rounded-lg overflow-hidden group ${img.className}`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />
        </Layout>
    );
}
