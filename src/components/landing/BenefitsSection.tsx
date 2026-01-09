import { motion } from "framer-motion";
import { TrendingUp, Smile, HeartHandshake, Sparkles, Users, Building } from "lucide-react";

const benefits = [
  {
    icon: Smile,
    title: "Mejor clima laboral",
    description: "Ambientes de trabajo positivos donde tu equipo quiere estar",
  },
  {
    icon: TrendingUp,
    title: "Mayor productividad",
    description: "Colaboradores motivados que dan lo mejor de sí",
  },
  {
    icon: HeartHandshake,
    title: "Reducción de ausentismo",
    description: "Menos días perdidos por estrés y enfermedades prevenibles",
  },
  {
    icon: Users,
    title: "Equipos comprometidos",
    description: "Talento que se siente valorado y permanece en tu empresa",
  },
  {
    icon: Sparkles,
    title: "Bienestar integral",
    description: "Cuidado físico, mental y emocional para cada persona",
  },
  {
    icon: Building,
    title: "Empresa inspiradora",
    description: "Marca empleadora atractiva que destaca en el mercado",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-gradient-to-br from-wellness-blue-light via-background to-wellness-green-light py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-secondary">
            Transformación Real
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Los Resultados que tu Empresa Merece
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Invertir en el bienestar de tu equipo no es un gasto, es una estrategia que genera retorno medible.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-card shadow-card">
                <benefit.icon className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
