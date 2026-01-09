import { motion } from "framer-motion";
import { MapPin, Award, Users, Calendar } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "15+",
    label: "Años de experiencia",
  },
  {
    icon: MapPin,
    value: "3",
    label: "Ciudades en Colombia",
    detail: "Bogotá, Medellín, Bucaramanga",
  },
  {
    icon: Users,
    value: "100+",
    label: "Empresas atendidas",
  },
  {
    icon: Award,
    value: "50+",
    label: "Profesionales expertos",
  },
];

const AuthoritySection = () => {
  return (
    <section className="bg-gradient-to-br from-foreground via-foreground to-primary py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-secondary">
            Nuestra Trayectoria
          </span>
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Respaldo y Experiencia que Inspira Confianza
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Inversiones Estilo y Vida Fitness SAS lleva más de una década transformando el bienestar empresarial en Colombia.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10">
                <stat.icon className="h-8 w-8 text-secondary" />
              </div>
              <div className="mb-2 text-4xl font-extrabold text-primary-foreground">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80">{stat.label}</div>
              {stat.detail && (
                <div className="mt-1 text-sm text-secondary">{stat.detail}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
