import { motion } from "framer-motion";
import { Shield, FileCheck, Handshake, Headphones } from "lucide-react";

const guarantees = [
  {
    icon: FileCheck,
    title: "Facturación Electrónica",
    description: "Documentación legal completa para tu empresa",
  },
  {
    icon: Shield,
    title: "Cumplimiento Profesional",
    description: "Procesos claros y resultados garantizados",
  },
  {
    icon: Handshake,
    title: "Contratos Transparentes",
    description: "Sin letras pequeñas ni sorpresas",
  },
  {
    icon: Headphones,
    title: "Acompañamiento Continuo",
    description: "Soporte permanente durante toda la implementación",
  },
];

const GuaranteeSection = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Garantía de Servicio
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Trabajamos con la Seriedad que tu Empresa Merece
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <guarantee.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{guarantee.title}</h3>
              <p className="text-muted-foreground">{guarantee.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
