import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=573016905221&text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20programas%20de%20bienestar%20empresarial";

const offers = [
  "Programas 100% personalizados a tu empresa",
  "Acompañamiento profesional continuo",
  "Adaptación a presupuesto y necesidades",
  "Cotización sin compromiso",
  "Implementación flexible y escalonada",
  "Medición de resultados e impacto",
];

const OfferSection = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 md:p-12"
          >
            {/* Background decoration */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

            <div className="relative">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white"
              >
                Oferta Irresistible
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-6 text-3xl font-bold text-white md:text-4xl"
              >
                Programas diseñados a la medida de tu empresa
              </motion.h2>

              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {offers.map((offer, index) => (
                  <motion.div
                    key={offer}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-white/90">{offer}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => window.open(WHATSAPP_LINK, "_blank")}
                  className="w-full sm:w-auto"
                >
                  <MessageCircle className="mr-1" />
                  Solicitar Cotización Personalizada
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
