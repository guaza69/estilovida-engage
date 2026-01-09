import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

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
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
            Testimonios
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Empresas que ya transformaron su cultura organizacional con nuestros programas.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative rounded-2xl bg-card p-6 shadow-card"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/20" />
              
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-wellness-orange text-wellness-orange" />
                ))}
              </div>

              <p className="mb-6 text-muted-foreground italic">"{testimonial.quote}"</p>

              <div>
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-primary">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
