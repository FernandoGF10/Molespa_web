import { Building2, Handshake, Users, Target, Eye } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import fondoMole from "@/assets/fondo-mole.jpeg";

export default function About() {
    return (
        <Layout>
            {/* HEADER */}
            <section className="bg-hero py-24 text-center">
                <div className="container mx-auto px-4">
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-3"
                    >
                        Conócenos
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 26 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-heading font-black text-4xl md:text-6xl text-hero-foreground"
                    >
                        ¿Quiénes Somos?
                    </motion.h1>
                </div>
            </section>

            {/* CONTENIDO */}
            <section className="relative py-20 overflow-hidden">
                <motion.img
                    src={fondoMole}
                    alt=""
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 0.2, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-hidden="true"
                />

                <div className="relative z-10 container mx-auto px-4 max-w-4xl">

                    {/* BLOQUE 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-6 mb-12"
                    >
                        <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                            <Building2 className="text-accent" size={28} />
                        </div>
                        <div>
                            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                                Nuestra Empresa
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                MOLE Spa. Es una empresa de servicios de mantenimiento, fabricación y montaje industrial. Sus oficinas se encuentran en la región del Biobío, Concepción, Chile. Mole Spa. fue creada en el año 2018, desde sus inicios ha ido en constante crecimiento, prestando servicios a importantes empresas de la región, principalmente en el área industrial mecánica.
                            </p>
                        </div>
                    </motion.div>

                    <div className="section-divider my-12" />

                    {/* BLOQUE 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-6 mb-12"
                    >
                        <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                            <Handshake className="text-accent" size={28} />
                        </div>
                        <div>
                            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                                Nuestro Compromiso
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                MOLE Spa, ha adquirido el compromiso de estar orientada a satisfacer los requerimientos de sus clientes, tanto en el ámbito técnico, administrativo como también en el ámbito reglamentario. La política fundamental de la empresa radica en ejecutar proyectos de calidad en los tiempos establecidos, resguardando la integridad física y mental de sus trabajadores. La Prevención de Riesgos es parte integrante del proceso productivo de la Empresa y uno de los pilares fundamentales para alcanzar niveles óptimos de calidad y productividad.
                            </p>
                        </div>
                    </motion.div>

                    <div className="section-divider my-12" />

                    {/* BLOQUE 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-6"
                    >
                        <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                            <Users className="text-accent" size={28} />
                        </div>
                        <div>
                            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                                Nuestro Equipo
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                El equipo profesional de Mole Spa. tiene más de 15 años de experiencia en el rubro Industrial, donde han desarrollado proyectos en diversos sectores: Maderero; Papeles; Químico; Generación Eléctrica; Portuaria; Captación, Tratamiento y Distribución de Agua Potable; Tratamiento de Aguas Servidas y Medio Ambiente.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* MISIÓN Y VISIÓN */}
            <section className="bg-hero py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* MISIÓN */}
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="bg-hero-dark/50 border border-hero-foreground/10 rounded-lg p-8 hover:-translate-y-1 transition duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                                <Target className="text-accent" size={24} />
                            </div>
                            <h3 className="font-heading font-bold text-xl text-hero-foreground mb-4">
                                Nuestra Misión
                            </h3>
                            <p className="text-hero-foreground/60 text-sm leading-relaxed">
                                Ser una empresa de servicio industrial comprometida con la calidad de nuestros proyectos y con la seguridad de nuestros colaboradores, para así entregar un servicio de excelencia a las necesidades de nuestros clientes.
                            </p>
                        </motion.div>

                        {/* VISIÓN */}
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            viewport={{ once: true }}
                            className="bg-hero-dark/50 border border-hero-foreground/10 rounded-lg p-8 hover:-translate-y-1 transition duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                                <Eye className="text-accent" size={24} />
                            </div>
                            <h3 className="font-heading font-bold text-xl text-hero-foreground mb-4">
                                Nuestra Visión
                            </h3>
                            <p className="text-hero-foreground/60 text-sm leading-relaxed">
                                Ser una empresa líder en el área de mantenimiento industrial, prestar servicios de excelencia a los diversos sectores industriales de nuestro país, con equipos humanos altamente calificados y comprometidos con la calidad del servicio, con la seguridad y protección al medio ambiente.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>
        </Layout>
    );
}