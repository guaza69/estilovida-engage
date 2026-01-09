import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail } from "lucide-react";
import characterAdvisor from "@/assets/character-advisor.jpeg";

const WHATSAPP_LINK = "https://wa.me/573001234567?text=Hola,%20me%20interesa%20agendar%20una%20asesoría%20personalizada%20para%20mi%20empresa";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-wellness-blue-light via-background to-wellness-green-light py-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:order-2"
          >
            <div className="animate-float-delayed relative">
              <img
                src={characterAdvisor}
                alt="Asesor de bienestar empresarial"
                className="h-auto max-h-[450px] w-auto drop-shadow-2xl"
              />
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -left-4 bottom-20 rounded-2xl bg-card p-4 shadow-card"
              >
                <p className="text-xs font-medium text-muted-foreground">Respuesta en</p>
                <p className="text-lg font-bold text-secondary">menos de 24h</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:order-1 lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-secondary"
            >
              ¡Comienza hoy!
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
            >
              Transforma el bienestar de tu equipo hoy
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-8 text-lg text-muted-foreground"
            >
              Agenda una asesoría personalizada sin costo y descubre cómo podemos ayudarte a crear un ambiente de trabajo más saludable, productivo y feliz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button
                variant="whatsapp"
                size="xl"
                onClick={() => window.open(WHATSAPP_LINK, "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Agenda tu Asesoría Gratis
              </Button>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+57 300 123 4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>contacto@estiloyvida.com</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
