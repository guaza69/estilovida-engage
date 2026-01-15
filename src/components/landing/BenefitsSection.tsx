import { motion } from "framer-motion";
import { TrendingUp, Smile, HeartHandshake, Sparkles, Users, Building } from "lucide-react";
import characterFitness from "@/assets/character-fitness.png";

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
    <section className="bg-gradient-to-br from-wellness-blue-light via-background to-wellness-green-light py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Character Image - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="animate-float relative">
              <img
                src={characterFitness}
                alt="Instructora de bienestar aprobando los resultados"
                className="h-auto max-h-[450px] w-auto drop-shadow-2xl"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute -right-2 top-16 rounded-2xl bg-card p-3 shadow-card"
              >
                <p className="text-xs font-medium text-muted-foreground">Resultados</p>
                <p className="text-sm font-bold text-secondary">Comprobados ✓</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Right side */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-secondary">
                Transformación Real
              </span>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Los Resultados que tu Empresa Merece
              </h2>
              <p className="max-w-xl text-lg text-muted-foreground">
                Invertir en el bienestar de tu equipo no es un gasto, es una estrategia que genera retorno medible.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-card shadow-card">
                    <benefit.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
