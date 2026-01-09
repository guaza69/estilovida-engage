import { motion } from "framer-motion";
import { Activity, Heart, Sparkles, Brain, Apple, Leaf } from "lucide-react";

const programs = [
  {
    id: "activa-t",
    title: "ACTIVA-T",
    icon: Activity,
    color: "from-primary to-wellness-teal",
    items: ["Clases grupales", "Clubs de baile"],
  },
  {
    id: "bienestar",
    title: "BIENESTAR EMPRESARIAL",
    icon: Heart,
    color: "from-secondary to-wellness-teal",
    items: ["Happy Safe SST", "Formación empresarial", "Team building", "Eventos de experiencia"],
  },
  {
    id: "cuidado",
    title: "CUIDADO CORPORAL",
    icon: Sparkles,
    color: "from-wellness-orange to-primary",
    items: ["Spas empresariales", "Masajeadores portátiles", "Talleres de autocuidado", "Talleres de automaquillaje"],
  },
  {
    id: "mente",
    title: "MENTE VIVA",
    icon: Brain,
    color: "from-wellness-teal to-secondary",
    items: ["Bienestar mental", "Gestión de emociones", "Manos mágicas / Arte terapia", "Arte y cultura"],
  },
  {
    id: "nutricion",
    title: "NUTRICIÓN CONSCIENTE",
    icon: Apple,
    color: "from-secondary to-wellness-green",
    items: ["Asesoría nutricional", "Talleres de alimentación saludable", "Charlas de hábitos"],
  },
  {
    id: "cultura",
    title: "CULTURA VERDE",
    icon: Leaf,
    color: "from-wellness-green to-wellness-teal",
    items: ["Consciencia ambiental", "Huerta empresarial", "Reciclaje activo"],
  },
];

const ProgramsSection = () => {
  return (
    <section id="programas" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
            Nuestros Programas
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Soluciones Integrales de Bienestar
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Programas diseñados para abordar cada dimensión del bienestar de tus colaboradores, adaptables a las necesidades únicas de tu empresa.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              {/* Gradient header */}
              <div className={`mb-6 flex items-center gap-4`}>
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${program.color}`}>
                  <program.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{program.title}</h3>
              </div>

              {/* Items list */}
              <ul className="space-y-3">
                {program.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Hover effect */}
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${program.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
