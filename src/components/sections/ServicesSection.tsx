import { Wrench, Hammer, Cog, HardHat, Building, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import fondoMole from "@/assets/fondos/fondo-mole.jpeg";

const SERVICES = [
    {
        icon: Wrench,
        title: "Mantención Mecánica-Estructural Industrial",
        desc: "Mantenimiento especializado en equipos industriales, estructuras y transportadores.",
        items: [
            "Limpieza mecánica y química de estanques",
            "Reparación estructural",
            "Transportadores de correa, cadenas y tornillos",
            "Desmontaje y montaje de bombas, agitadores y reductores",
            "Alineamiento y tensión de correas y bombas",
        ],
    },
    {
        icon: Hammer,
        title: "Fabricación y Montaje de Estructuras",
        desc: "Soluciones en estructuras metálicas, livianas y pesadas, con acabados de alta calidad.",
        items: [
            "Fabricación y montaje de estructura liviana y pesada",
            "Esquema de pinturas, arenado, anticorrosivo, epóxico, etc.",
            "Galvanizado en caliente",
        ],
    },
    {
        icon: Cog,
        title: "Fabricación y Montaje de Piping",
        desc: "Montaje y mejoras en cañerías industriales, redes de incendio y líneas de proceso.",
        items: [
            "Cañerías de acero carbono e inoxidable",
            "Red de incendio húmeda y seca",
            "Líneas de vapor, agua y condensado",
            "Soldadura MIG y TIG",
            "Uniones victaulic",
        ],
    },
    {
        icon: HardHat,
        title: "Obras Civiles",
        desc: "Construcción, excavaciones, instalaciones hidráulicas y servicios de pintura para la industria.",
        items: [
            "Losas de hormigón armado",
            "Excavaciones y reparación de redes de agua",
            "Montaje de bombas, válvulas y medidores",
            "Redes hidráulicas en PVC, CPVC, PPR y HDPE",
            "Perforaciones de losa y muros",
            "Pintura industrial y domiciliaria",
        ],
    },
    {
        icon: Building,
        title: "Instalaciones y Equipamientos",
        desc: "Infraestructura y equipamiento para proyectos industriales y comerciales.",
        items: [
            "Oficinas, galpones y bodegas",
            "Camiones 3/4 de carga y camionetas",
            "Máquinas de soldar 220 y 380 volts",
            "Herramientas manuales y de medición",
            "Elementos de maniobras y oxi-corte",
            "Esmeriles, elementos de medición y otros activos",
        ],
    },
];

const TEAM = [
    "Ingenieros Mecánicos",
    "Constructor Civil",
    "Prevencionista de Riesgo",
    "Mecánicos Industriales",
    "Soldadores TIG y estructurales",
    "Caldereros/Estructureros",
    "Pintores",
];

const CLIENTS = [
    "FPC Papeles, Planta Coronel",
    "FPC Tissue, Planta Coronel",
    "Unipapel, Planta San Pedro de la Paz",
    "CMPC Maderas, Planta Coronel",
    "Colbún Santa María, Planta Coronel",
    "Embosur S.A., Planta Coronel",
    "Inchalam S.A., Planta Talcahuano",
    "Terramar Chile, Planta Coronel",
    "Terramar SBH, Planta Coronel",
    "Orizon, Planta Coronel/Talcahuano",
    "Solenis, Región del Bio Bio",
    "Mercado Público",
];

export default function ServicesSection() {
    return (
        <section id="servicios" className="scroll-mt-16">
            <div className="bg-hero py-20 text-center">
                <div className="container mx-auto px-4">
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-3"
                    >
                        Soluciones integrales para la industria
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-heading font-black text-3xl md:text-5xl text-hero-foreground"
                    >
                        Nuestros Servicios
                    </motion.h2>
                </div>
            </div>

            <div className="relative py-20 overflow-hidden">
                <motion.img
                    src={fondoMole}
                    alt=""
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 0.36, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover contrast-125 saturate-125"
                    aria-hidden="true"
                />

                <div className="relative z-10 container mx-auto px-4 max-w-5xl space-y-12">
                    {SERVICES.map((s, index) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 34 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.65, delay: index * 0.08 }}
                            className="glass-panel p-8 hover:border-accent/30 hover:-translate-y-1 transition duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="glass-icon w-12 h-12 flex items-center justify-center shrink-0">
                                    <s.icon className="text-accent" size={24} />
                                </div>
                                <h3 className="font-heading font-bold text-xl text-foreground">
                                    {s.title}
                                </h3>
                            </div>
                            <p className="text-muted-foreground text-sm mb-5">{s.desc}</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {s.items.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                                        <span className="text-foreground text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="bg-hero py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.7 }}
                            className="glass-panel-dark p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Users className="text-accent" size={24} />
                                <h3 className="font-heading font-bold text-2xl text-hero-foreground">
                                    Equipo de Trabajo
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {TEAM.map((t, index) => (
                                    <motion.li
                                        key={t}
                                        initial={{ opacity: 0, x: -16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45, delay: index * 0.06 }}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                                        <span className="text-hero-foreground/70 text-sm">{t}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="glass-panel-dark p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Briefcase className="text-accent" size={24} />
                                <h3 className="font-heading font-bold text-2xl text-hero-foreground">
                                    Clientes
                                </h3>
                            </div>
                            <p className="text-hero-foreground/50 text-sm mb-4">
                                Empresas que han confiado en nuestros servicios:
                            </p>
                            <ul className="space-y-2">
                                {CLIENTS.map((c, index) => (
                                    <motion.li
                                        key={c}
                                        initial={{ opacity: 0, x: 16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45, delay: index * 0.05 }}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                                        <span className="text-hero-foreground/70 text-sm">{c}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
