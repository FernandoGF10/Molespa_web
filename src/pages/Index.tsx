import { Link } from "react-router-dom";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import logoClaro from "@/assets/logos/LogoMole_claro.png";
import heroPiping from "@/assets/obras/obras-1.jpeg";
import heroObra from "@/assets/obras/Obras (7).jpeg";
import obraPiping from "@/assets/obras/Obras (10).jpeg";
import obraEquipo from "@/assets/obras/Obras (14).jpeg";
import obraMontaje from "@/assets/obras/Obras (12).jpeg";

const GALLERY = [
    { src: obraPiping, alt: "Montaje de piping industrial", label: "Fabricación y montaje piping" },
    { src: obraEquipo, alt: "Equipo en obra de cañerías", label: "Fabricación y montaje industrial" },
    { src: obraMontaje, alt: "Montaje industrial en terreno", label: "Fabricación y montaje piping" },
];

const obraModules = import.meta.glob<string>("/src/assets/obras/*.{jpeg,jpg,png}", {
    eager: true,
    query: "?url",
    import: "default",
});

const WORK_CATEGORIES = {
    "Obras (1).jpeg": "Fabricación y montaje piping",
    "Obras (4).jpeg": "Fabricación y montaje piping",
    "Obras (12).jpeg": "Fabricación y montaje piping",
    "Obras (19).jpeg": "Fabricación y montaje piping",
    "Obras (20).jpeg": "Fabricación y montaje piping",
    "Obras (21).jpeg": "Fabricación y montaje piping",
    "obras-1.jpeg": "Fabricación y montaje piping",
    "Obras (18).jpeg": "Obras civiles",
} as const;

const DEFAULT_WORK_CATEGORY = "Fabricación y montaje industrial";

const WORK_GALLERY = Object.entries(obraModules)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, "es", { numeric: true }))
    .map(([path, src], index) => ({
        src,
        alt: `Obra industrial Mole ${index + 1}`,
        label: WORK_CATEGORIES[path.split("/").pop() as keyof typeof WORK_CATEGORIES] ?? DEFAULT_WORK_CATEGORY,
        name: path.split("/").pop() ?? `obra-${index + 1}`,
    }));

const SELECTED_GALLERY =
    WORK_GALLERY.length > 0
        ? WORK_GALLERY
        : GALLERY.map((work, index) => ({ ...work, name: `obra-${index + 1}` }));

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
        alt: "Grúa industrial en montaje de estructura metálica",
        mode: "cover",
        className: "object-cover object-[68%_8%]",
    },
];

export default function Index() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeWork, setActiveWork] = useState(0);
    const [selectedWork, setSelectedWork] = useState<(typeof SELECTED_GALLERY)[number] | null>(null);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
        }, 5200);

        return () => window.clearInterval(interval);
    }, []);

    const currentSlide = HERO_SLIDES[activeSlide];
    const currentWorks = [0, 1, 2].map((offset) => SELECTED_GALLERY[(activeWork + offset) % SELECTED_GALLERY.length]);
    const goToPreviousWork = () => {
        setActiveWork((current) => (current - 1 + SELECTED_GALLERY.length) % SELECTED_GALLERY.length);
    };
    const goToNextWork = () => {
        setActiveWork((current) => (current + 1) % SELECTED_GALLERY.length);
    };
    const openWorkPreview = (work: (typeof SELECTED_GALLERY)[number]) => {
        setSelectedWork(work);
    };

    return (
        <Layout>
            <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-16 bg-hero">
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

                <div className="absolute inset-0 hero-overlay" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(200_80%_50%/0.08),transparent_46%)]" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-hero-dark/65 to-transparent" />

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
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
                            to="/#contacto-proyecto"
                            className="rounded-full border border-white/20 bg-accent/88 px-8 py-3.5 text-base font-heading font-bold text-accent-foreground shadow-[inset_0_1px_0_hsl(0_0%_100%/0.35),0_14px_34px_hsl(200_80%_30%/0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
                        >
                            ¡Contáctanos!
                        </Link>

                        <Link
                            to="/#servicios"
                            className="rounded-full border border-white/24 bg-white/8 px-8 py-3.5 text-base font-heading font-semibold text-hero-foreground shadow-[inset_0_1px_0_hsl(0_0%_100%/0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/14"
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
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-hero-foreground/50 animate-bounce"
                >
                    <ChevronDown size={32} />
                </motion.a>
            </section>

            <ServicesSection />

            <section id="obras" className="relative overflow-hidden py-24 scroll-mt-16">
                <div className="absolute inset-0 bg-muted/40" />
                <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(120deg,transparent_0,transparent_46%,hsl(200_80%_50%/0.22)_46%,hsl(200_80%_50%/0.22)_47%,transparent_47%),linear-gradient(90deg,hsl(215_28%_20%/0.12)_1px,transparent_1px),linear-gradient(0deg,hsl(215_28%_20%/0.12)_1px,transparent_1px)] [background-size:280px_280px,72px_72px,72px_72px]" />
                <div className="absolute left-[8%] top-24 h-44 w-44 rounded-full border border-accent/20" />
                <div className="absolute right-[10%] bottom-24 h-64 w-64 rounded-full border border-primary/10" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                <div className="relative container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="mx-auto mb-12 max-w-3xl text-center"
                    >
                        <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-3">
                            Nuestro trabajo
                        </p>
                        <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground">
                            Obras en terreno
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Proyectos reales de mantenimiento, montaje y soluciones industriales ejecutadas con foco en seguridad y calidad.
                        </p>
                    </motion.div>

                    <div className="relative mx-auto max-w-6xl py-8 md:py-12">
                        <button
                            type="button"
                            aria-label="Obra anterior"
                            onClick={goToPreviousWork}
                            className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition hover:-translate-x-1 hover:brightness-110 md:h-14 md:w-14"
                        >
                            <ChevronLeft size={28} />
                        </button>
                        <button
                            type="button"
                            aria-label="Obra siguiente"
                            onClick={goToNextWork}
                            className="absolute right-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition hover:translate-x-1 hover:brightness-110 md:h-14 md:w-14"
                        >
                            <ChevronRight size={28} />
                        </button>

                        <div className="relative min-h-[760px] md:min-h-[660px]">
                            <div className="absolute left-[12%] top-0 hidden h-32 w-72 rounded-3xl bg-accent/10 backdrop-blur-md md:block" />
                            <div className="absolute right-[8%] top-28 hidden h-40 w-64 rounded-3xl bg-primary/10 backdrop-blur-md md:block" />
                            <div className="absolute bottom-16 left-[4%] hidden h-28 w-80 rounded-3xl bg-white/45 backdrop-blur-md md:block" />

                            <motion.div
                                key={currentWorks[0].name}
                                initial={{ opacity: 0, y: 26 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                role="button"
                                tabIndex={0}
                                onClick={() => openWorkPreview(currentWorks[0])}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" || event.key === " ") openWorkPreview(currentWorks[0]);
                                }}
                                className="group glass-panel absolute left-0 top-28 z-10 w-[76%] cursor-zoom-in overflow-hidden p-1 md:left-0 md:top-20 md:w-[38%]"
                            >
                                <img
                                    src={currentWorks[0].src}
                                    alt={currentWorks[0].alt}
                                    className="h-[340px] w-full rounded-[0.85rem] object-cover transition-transform duration-500 group-hover:scale-105 md:h-[470px]"
                                    loading="lazy"
                                />
                                <div className="absolute inset-x-1 bottom-1 h-28 rounded-b-[0.85rem] bg-gradient-to-t from-hero-dark/75 to-transparent" />
                                <span className="absolute bottom-5 left-5 rounded-full bg-hero-dark/70 px-4 py-2 text-sm font-heading font-bold text-hero-foreground backdrop-blur-md">
                                    {currentWorks[0].label}
                                </span>
                            </motion.div>

                            <motion.div
                                key={currentWorks[1].name}
                                initial={{ opacity: 0, y: 28 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                role="button"
                                tabIndex={0}
                                onClick={() => openWorkPreview(currentWorks[1])}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" || event.key === " ") openWorkPreview(currentWorks[1]);
                                }}
                                className="glass-panel absolute left-[7%] top-0 z-0 h-[460px] w-[86%] cursor-zoom-in overflow-hidden p-1 shadow-[0_34px_100px_hsl(215_35%_20%/0.24)] md:left-[18%] md:h-[560px] md:w-[62%]"
                            >
                                <img
                                    src={currentWorks[1].src}
                                    alt={currentWorks[1].alt}
                                    className="h-full w-full rounded-[0.85rem] object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-x-1 bottom-1 h-32 rounded-b-[0.85rem] bg-gradient-to-t from-hero-dark/70 to-transparent" />
                                <span className="absolute bottom-6 left-6 rounded-full bg-white/80 px-4 py-2 text-sm font-heading font-bold text-primary backdrop-blur-md">
                                    Trabajo en terreno
                                </span>
                            </motion.div>

                            <motion.div
                                key={currentWorks[2].name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                role="button"
                                tabIndex={0}
                                onClick={() => openWorkPreview(currentWorks[2])}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" || event.key === " ") openWorkPreview(currentWorks[2]);
                                }}
                                className="group glass-panel absolute bottom-0 right-0 z-10 w-[82%] cursor-zoom-in overflow-hidden p-1 md:bottom-10 md:w-[36%]"
                            >
                                <img
                                    src={currentWorks[2].src}
                                    alt={currentWorks[2].alt}
                                    className="h-[300px] w-full rounded-[0.85rem] object-cover transition-transform duration-500 group-hover:scale-105 md:h-[430px]"
                                    loading="lazy"
                                />
                                <div className="absolute inset-x-1 bottom-1 h-28 rounded-b-[0.85rem] bg-gradient-to-t from-hero-dark/75 to-transparent" />
                                <span className="absolute bottom-5 left-5 rounded-full bg-hero-dark/70 px-4 py-2 text-sm font-heading font-bold text-hero-foreground backdrop-blur-md">
                                    {currentWorks[2].label}
                                </span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 34 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.7, delay: 0.28 }}
                                className="glass-panel-dark absolute bottom-10 left-[6%] z-20 w-[88%] p-5 md:bottom-0 md:left-[25%] md:w-[58%] md:p-6"
                            >
                                <p className="text-accent font-heading font-semibold text-xs tracking-widest uppercase mb-2">
                                    Seguridad y calidad
                                </p>
                                <h3 className="font-heading font-black text-xl md:text-2xl text-hero-foreground leading-tight">
                                    Proyectos ejecutados con equipos preparados para la operación industrial.
                                </h3>
                                <div className="section-divider my-4" />
                                <p className="text-hero-foreground/65 text-sm">
                                    Fabricación, montaje y mantención con compromiso en plazo, prevención de riesgos y continuidad operacional.
                                </p>
                            </motion.div>
                        </div>

                        <div className="mt-8 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8" aria-label="Seleccionar obra">
                            {SELECTED_GALLERY.map((work, index) => (
                                <button
                                    key={work.name}
                                    type="button"
                                    onClick={() => {
                                        setActiveWork(index);
                                        openWorkPreview(work);
                                    }}
                                    className={`group relative aspect-[4/3] overflow-hidden rounded-lg border-2 bg-white/70 shadow-sm transition ${
                                        activeWork === index
                                            ? "border-accent shadow-[0_12px_30px_hsl(200_80%_45%/0.25)]"
                                            : "border-white/80 hover:border-accent/70"
                                    }`}
                                    aria-label={`Ver obra ${index + 1}`}
                                    aria-current={activeWork === index ? "true" : undefined}
                                >
                                    <img
                                        src={work.src}
                                        alt=""
                                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <span className="absolute bottom-1 right-1 rounded-full bg-hero-dark/75 px-2 py-0.5 text-[10px] font-heading font-bold text-hero-foreground backdrop-blur">
                                        {index + 1}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <AboutSection />

            <ContactSection />

            <Dialog open={selectedWork !== null} onOpenChange={(open) => !open && setSelectedWork(null)}>
                <DialogContent className="max-h-[92vh] w-[calc(100vw-2rem)] max-w-6xl overflow-hidden border-white/20 bg-hero-dark/88 p-2 shadow-[0_28px_100px_hsl(215_35%_8%/0.55)] backdrop-blur-2xl sm:rounded-2xl md:p-3">
                    {selectedWork && (
                        <div className="overflow-hidden rounded-xl border border-white/15 bg-white/5">
                            <DialogTitle className="sr-only">{selectedWork.alt}</DialogTitle>
                            <img
                                src={selectedWork.src}
                                alt={selectedWork.alt}
                                className="max-h-[78vh] w-full object-contain"
                            />
                            <div className="flex items-center justify-center border-t border-white/10 bg-hero-dark/75 px-4 py-4 text-center">
                                <div>
                                    <p className="font-heading text-sm font-bold uppercase tracking-widest text-accent">
                                        {selectedWork.label}
                                    </p>
                                    <p className="mt-1 text-sm text-hero-foreground/65">
                                        Imagen de obra ejecutada por Mole Servicio Industrial.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </Layout>
    );
}
