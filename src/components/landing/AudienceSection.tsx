import { motion } from "framer-motion";
import { Building2, Users, ShieldCheck, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Empresas",
    description: "Organizaciones comprometidas con el bienestar de sus colaboradores",
  },
  {
    icon: Users,
    title: "Gestión Humana",
    description: "Áreas de RRHH que buscan programas innovadores y efectivos",
  },
  {
    icon: ShieldCheck,
    title: "SST",
    description: "Equipos de Seguridad y Salud en el Trabajo enfocados en prevención",
  },
  {
    icon: Briefcase,
    title: "Instituciones",
    description: "Organizaciones y equipos que valoran a su talento humano",
  },
];

const AudienceSection = () => {
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
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            ¿Para quién es este servicio?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Diseñamos soluciones de bienestar para organizaciones que entienden que su mejor inversión es su gente.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-background p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-accent">
                <audience.icon className="h-7 w-7 text-secondary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">{audience.title}</h3>
              <p className="text-muted-foreground">{audience.description}</p>
              
              {/* Hover decoration */}
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
