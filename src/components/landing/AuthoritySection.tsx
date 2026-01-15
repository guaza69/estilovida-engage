import { motion } from "framer-motion";
import { MapPin, Award, Users, Calendar } from "lucide-react";
import characterSst from "@/assets/character-sst.png";

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
    <section className="bg-gradient-to-br from-foreground via-foreground to-primary py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content - Left side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-secondary">
                Nuestra Trayectoria
              </span>
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
                Respaldo y Experiencia que Inspira Confianza
              </h2>
              <p className="max-w-xl text-lg text-primary-foreground/80">
                Inversiones Estilo y Vida Fitness SAS lleva más de una década transformando el bienestar empresarial en Colombia.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="rounded-2xl bg-primary-foreground/5 p-5 backdrop-blur-sm"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10">
                    <stat.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-3xl font-extrabold text-primary-foreground">
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

          {/* Character Image - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="animate-float relative">
              <img
                src={characterSst}
                alt="Profesional de Seguridad y Salud en el Trabajo"
                className="h-auto max-h-[480px] w-auto drop-shadow-2xl"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute -left-4 top-20 rounded-2xl bg-card p-3 shadow-card"
              >
                <p className="text-xs font-medium text-muted-foreground">Expertos en</p>
                <p className="text-sm font-bold text-primary">SST Certificados</p>
              </motion.div>
              
              {/* Second floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="absolute -right-2 bottom-28 rounded-2xl bg-secondary/90 p-3 shadow-lg"
              >
                <p className="text-xs font-medium text-secondary-foreground/80">Seguridad</p>
                <p className="text-sm font-bold text-secondary-foreground">Garantizada</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
