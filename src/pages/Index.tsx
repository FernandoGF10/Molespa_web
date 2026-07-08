import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import obras1 from "@/assets/obras-1.jpeg";
import obras2 from "@/assets/obras-2.jpeg";
import obras3 from "@/assets/obras-3.jpeg";
import obras4 from "@/assets/obras-4.jpeg";

const GALLERY = [
    { src: obras2, alt: "Montaje de piping industrial" },
    { src: obras3, alt: "Equipo en obra de cañerías" },
    { src: obras4, alt: "Instalación de red contra incendio" },
];

export default function Index() {
    return (
        <Layout>
            <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden scroll-mt-16">
                <motion.img
                    src={obras1}
                    alt="Trabajo industrial"
                    initial={{ scale: 1.08, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 hero-overlay"
                />

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
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
                        className="font-heading font-black text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-hero-foreground"
                    >
                        Empresa de servicios de mantenimiento, fabricación y{" "}
                        <span className="text-gradient">montaje industrial</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-hero-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10"
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

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {GALLERY.map((img, index) => (
                            <motion.div
                                key={img.alt}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.6, delay: index * 0.12 }}
                                className="rounded-lg overflow-hidden group aspect-[4/3]"
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
