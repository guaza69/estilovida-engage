import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Frown, Users, Clock } from "lucide-react";

const problems = [
  { icon: AlertTriangle, text: "Estrés laboral creciente" },
  { icon: Frown, text: "Desmotivación del equipo" },
  { icon: TrendingDown, text: "Bajo clima organizacional" },
  { icon: Clock, text: "Alto ausentismo laboral" },
  { icon: Users, text: "Sin programas estructurados" },
];

const ProblemSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground to-primary py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-wellness-teal blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-destructive/20 px-4 py-2 text-sm font-medium text-destructive-foreground">
            El desafío actual
          </span>
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            ¿Tu empresa enfrenta estos retos?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Muchas organizaciones luchan con problemas que afectan directamente su productividad y retención de talento.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.text}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex items-center gap-3 rounded-full bg-primary-foreground/10 px-5 py-3 backdrop-blur-sm"
            >
              <problem.icon className="h-5 w-5 text-wellness-orange" />
              <span className="font-medium text-primary-foreground">{problem.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xl font-medium text-secondary">
            Tenemos la solución que tu empresa necesita ↓
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
