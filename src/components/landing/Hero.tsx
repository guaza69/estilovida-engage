import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import characterWelcome from "@/assets/character-welcome.jpeg";

const WHATSAPP_LINK = "https://wa.me/573001234567?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20programas%20de%20bienestar%20empresarial";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-wellness-blue-light via-background to-wellness-green-light">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-wellness-teal/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 pt-24 pb-16 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 inline-block rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground"
            >
              +15 años transformando empresas
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Bienestar Integral para{" "}
              <span className="text-gradient">Empresas Extraordinarias</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground lg:mx-0 lg:text-xl"
            >
              Programas de promoción y prevención diseñados para cuidar la salud física, mental y emocional de tu equipo. 
              Porque el bienestar de tu gente es el éxito de tu empresa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button
                variant="whatsapp"
                size="lg"
                onClick={() => window.open(WHATSAPP_LINK, "_blank")}
              >
                <MessageCircle className="mr-1" />
                Solicitar Asesoría
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("programas")?.scrollIntoView({ behavior: "smooth" })}
              >
                Conocer Programas
                <ArrowRight className="ml-1" />
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-lg font-bold text-primary">15+</span>
                </div>
                Años de experiencia
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                  <span className="text-lg font-bold text-secondary">3</span>
                </div>
                Ciudades en Colombia
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-wellness-teal/10">
                  <span className="text-lg font-bold text-wellness-teal">✓</span>
                </div>
                Facturación electrónica
              </div>
            </motion.div>
          </motion.div>

          {/* Character Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="animate-float relative">
              <img
                src={characterWelcome}
                alt="Especialista en bienestar empresarial dando la bienvenida"
                className="h-auto max-h-[500px] w-auto drop-shadow-2xl lg:max-h-[600px]"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-4 top-20 rounded-2xl bg-card p-4 shadow-card"
              >
                <p className="text-xs font-medium text-muted-foreground">Expertos en</p>
                <p className="text-sm font-bold text-primary">SST & Bienestar</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Descubre más</span>
          <div className="h-10 w-6 rounded-full border-2 border-primary/30 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
