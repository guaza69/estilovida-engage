import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import characterExecutive from "@/assets/character-executive.png";

const testimonials = [
  {
    quote: "Implementar los programas de Estilo y Vida transformó completamente el ambiente de nuestra oficina. El ausentismo bajó un 40% en el primer semestre.",
    author: "María Fernanda López",
    role: "Directora de Gestión Humana",
    company: "Empresa del sector financiero",
  },
  {
    quote: "Los talleres de bienestar mental han sido clave para nuestro equipo, especialmente después de la pandemia. Profesionalismo y calidez en cada sesión.",
    author: "Carlos Eduardo Martínez",
    role: "Gerente de SST",
    company: "Empresa del sector industrial",
  },
  {
    quote: "Desde las pausas activas hasta los eventos de team building, cada actividad está diseñada con cuidado. Nuestros colaboradores esperan con ansias cada sesión.",
    author: "Andrea Patricia Gómez",
    role: "Coordinadora de Bienestar",
    company: "Empresa del sector tecnológico",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Content - Left side */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="mb-4 inline-block rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
                Testimonios
              </span>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Lo que dicen nuestros clientes
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Empresas que ya transformaron su cultura organizacional con nuestros programas.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative rounded-2xl bg-card p-5 shadow-card"
                >
                  <Quote className="mb-3 h-6 w-6 text-primary/20" />
                  
                  {/* Stars */}
                  <div className="mb-3 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-wellness-orange text-wellness-orange" />
                    ))}
                  </div>

                  <p className="mb-4 text-sm text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>

                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary">{testimonial.company}</p>
                  </div>
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
            className="hidden lg:flex lg:col-span-4 justify-center"
          >
            <div className="animate-float-delayed relative">
              <img
                src={characterExecutive}
                alt="Ejecutivo mostrando resultados y estadísticas"
                className="h-auto max-h-[420px] w-auto drop-shadow-2xl"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute -left-4 bottom-24 rounded-2xl bg-card p-3 shadow-card"
              >
                <p className="text-xs font-medium text-muted-foreground">Satisfacción</p>
                <p className="text-lg font-bold text-primary">98%</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
