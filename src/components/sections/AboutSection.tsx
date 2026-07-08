import { Building2, Handshake, Users, Target, Eye } from "lucide-react";
import { motion } from "framer-motion";
import fondoMole from "@/assets/fondos/fondo-mole.jpeg";

export default function AboutSection() {
    return (
        <section id="nosotros" className="scroll-mt-16">
            <div className="bg-hero py-20 text-center">
                <div className="container mx-auto px-4">
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-3"
                    >
                        Conócenos
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-heading font-black text-3xl md:text-5xl text-hero-foreground"
                    >
                        ¿Quiénes Somos?
                    </motion.h2>
                </div>
            </div>

            <div className="relative py-20 overflow-hidden">
                <motion.img
                    src={fondoMole}
                    alt=""
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 0.2, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-hidden="true"
                />

                <div className="relative z-10 container mx-auto px-4 max-w-4xl space-y-8">
                    {[
                        {
                            icon: Building2,
                            title: "Nuestra Empresa",
                            text: "MOLE Spa. Es una empresa de servicios de mantenimiento, fabricación y montaje industrial. Sus oficinas se encuentran en la región del Biobío, Concepción, Chile. Mole Spa. fue creada en el año 2018, desde sus inicios ha ido en constante crecimiento, prestando servicios a importantes empresas de la región, principalmente en el área industrial mecánica.",
                        },
                        {
                            icon: Handshake,
                            title: "Nuestro Compromiso",
                            text: "MOLE Spa, ha adquirido el compromiso de estar orientada a satisfacer los requerimientos de sus clientes, tanto en el ámbito técnico, administrativo como también en el ámbito reglamentario. La política fundamental de la empresa radica en ejecutar proyectos de calidad en los tiempos establecidos, resguardando la integridad física y mental de sus trabajadores.",
                        },
                        {
                            icon: Users,
                            title: "Nuestro Equipo",
                            text: "El equipo profesional de Mole Spa. tiene más de 15 años de experiencia en el rubro Industrial, donde han desarrollado proyectos en diversos sectores: Maderero; Papeles; Químico; Generación Eléctrica; Portuaria; Captación, Tratamiento y Distribución de Agua Potable; Tratamiento de Aguas Servidas y Medio Ambiente.",
                        },
                    ].map((block, index) => (
                        <div key={block.title}>
                            <motion.div
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-panel flex items-start gap-6 p-7 hover:-translate-y-1 hover:border-accent/30 transition duration-300"
                            >
                                <div className="glass-icon w-14 h-14 flex items-center justify-center shrink-0">
                                    <block.icon className="text-accent" size={28} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                                        {block.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">{block.text}</p>
                                </div>
                            </motion.div>
                            {index < 2 && <div className="section-divider mt-8" />}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-hero py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            {
                                icon: Target,
                                title: "Nuestra Misión",
                                text: "Ser una empresa de servicio industrial comprometida con la calidad de nuestros proyectos y con la seguridad de nuestros colaboradores, para así entregar un servicio de excelencia a las necesidades de nuestros clientes.",
                            },
                            {
                                icon: Eye,
                                title: "Nuestra Visión",
                                text: "Ser una empresa líder en el área de mantenimiento industrial, prestar servicios de excelencia a los diversos sectores industriales de nuestro país, con equipos humanos altamente calificados y comprometidos con la calidad del servicio, con la seguridad y protección al medio ambiente.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="glass-panel-dark p-8 hover:-translate-y-1 hover:border-accent/30 transition duration-300"
                            >
                                <div className="glass-icon w-12 h-12 flex items-center justify-center mb-5">
                                    <item.icon className="text-accent" size={24} />
                                </div>
                                <h3 className="font-heading font-bold text-xl text-hero-foreground mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-hero-foreground/60 text-sm leading-relaxed">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
