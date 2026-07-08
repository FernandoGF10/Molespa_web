import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import fondoMole from "@/assets/fondo-mole.jpeg";
import obras4 from "@/assets/obras-4.jpeg";

const CONTACT_INFO = [
    {
        icon: MapPin,
        title: "Dirección",
        lines: ["Calle San Martín 553,", "Segundo Piso", "Concepción - Chile"],
    },
    {
        icon: Phone,
        title: "Teléfono",
        lines: ["+56 9 8229 1920"],
    },
    {
        icon: Mail,
        title: "Correo Electrónico",
        lines: ["contacto@molespa.cl"],
    },
];

export default function Contact() {
    return (
        <Layout>
            {/* HEADER */}
            <section className="bg-hero py-24 text-center">
                <div className="container mx-auto px-4">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-3"
                    >
                        Hablemos
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-heading font-black text-4xl md:text-6xl text-hero-foreground"
                    >
                        Contáctanos
                    </motion.h1>
                </div>
            </section>

            {/* CONTACT CARDS */}
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {CONTACT_INFO.map((c, index) => (
                            <motion.div
                                key={c.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-8 text-center hover:border-accent/30 hover:-translate-y-1 transition duration-300"
                            >
                                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                                    <c.icon className="text-accent" size={24} />
                                </div>

                                <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                                    {c.title}
                                </h3>

                                {c.lines.map((line) => (
                                    <p key={line} className="text-muted-foreground text-sm">
                                        {line}
                                    </p>
                                ))}
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-16 relative rounded-lg overflow-hidden"
                    >
                        <motion.img
                            src={obras4}
                            alt="Trabajo industrial Mole"
                            initial={{ scale: 1.05 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-hero/85" />

                        <div className="relative z-10 p-12 text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="font-heading font-bold text-2xl text-hero-foreground mb-4"
                            >
                                ¿Tienes un proyecto en mente?
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-hero-foreground/60 mb-6 max-w-lg mx-auto"
                            >
                                No dudes en contactarnos. Nuestro equipo está listo para ayudarte
                                con soluciones industriales a la medida de tus necesidades.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <a
                                    href="tel:+56982291920"
                                    className="px-6 py-3 rounded-md bg-accent text-accent-foreground font-heading font-semibold text-sm hover:brightness-110 hover:-translate-y-0.5 transition duration-300"
                                >
                                    Llamar ahora
                                </a>

                                <a
                                    href="mailto:contacto@molespa.cl"
                                    className="px-6 py-3 rounded-md border border-hero-foreground/20 text-hero-foreground font-heading font-semibold text-sm hover:bg-hero-foreground/10 hover:-translate-y-0.5 transition duration-300"
                                >
                                    Enviar correo
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}