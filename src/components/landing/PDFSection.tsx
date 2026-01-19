import { motion } from "framer-motion";
import { FileText, BookOpen, Heart, Brain, Salad, Leaf, Users, MessageCircle, Download, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/573016905221?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20programas%20de%20bienestar%20empresarial";

const catalogSections = [
  { icon: Heart, title: "ACTIVA-T", description: "Fitness y activación física", page: 1 },
  { icon: Users, title: "Bienestar Empresarial", description: "SST y team building", page: 2 },
  { icon: BookOpen, title: "Cuidado Corporal", description: "Spa y autocuidado", page: 3 },
  { icon: Brain, title: "Mente Viva", description: "Salud mental y arte terapia", page: 4 },
  { icon: Salad, title: "Nutrición Consciente", description: "Alimentación saludable", page: 5 },
  { icon: Leaf, title: "Cultura Verde", description: "Sostenibilidad empresarial", page: 6 },
];

const PDFSection = () => {
  const pdfUrl = "https://drive.google.com/file/d/1CVjuM9eVRGUKq3SxPxEl0f1NbKPofvwU/preview";
  
  return (
    <section className="bg-gradient-to-b from-background to-muted/30 py-20">
      <div className="container mx-auto px-4">
        {/* Header con portada visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-lg">
            <BookOpen className="h-10 w-10 text-primary-foreground" />
          </div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
            <FileText className="h-4 w-4" />
            Catálogo Completo 2024
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Explora Nuestros Programas de Bienestar
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Descubre todas las soluciones que tenemos para transformar el bienestar de tu equipo. 
            Navega por nuestro catálogo interactivo.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          {/* Índice lateral clickeable */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <FileText className="h-5 w-5 text-primary" />
                Índice del Catálogo
              </h3>
              <div className="space-y-2">
                {catalogSections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="group flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-all hover:bg-primary/10"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <section.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-foreground">{section.title}</p>
                      <p className="truncate text-sm text-muted-foreground">{section.description}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-6 space-y-3 border-t border-border pt-6">
                <Button 
                  asChild 
                  className="w-full gap-2 bg-primary hover:bg-primary/90"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Solicitar Cotización
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full gap-2"
                  asChild
                >
                  <a 
                    href="https://drive.google.com/file/d/1CVjuM9eVRGUKq3SxPxEl0f1NbKPofvwU/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4" />
                    Descargar PDF
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Visor del PDF */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-primary/10 to-transparent px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Catálogo Estilo y Vida</span>
                    <p className="text-sm text-muted-foreground">Bienestar Empresarial 2024</p>
                  </div>
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  PDF Interactivo
                </span>
              </div>
              <div className="aspect-[4/3]">
                <iframe 
                  src={pdfUrl}
                  className="h-full w-full" 
                  title="Catálogo de Servicios"
                  allow="autoplay"
                />
              </div>
            </div>

            {/* CTA inferior */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-6 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 text-center"
            >
              <p className="mb-3 text-lg font-medium text-foreground">
                ¿Listo para transformar el bienestar de tu empresa?
              </p>
              <p className="mb-4 text-muted-foreground">
                Contáctanos hoy y recibe una propuesta personalizada para tu organización.
              </p>
              <Button 
                asChild 
                size="lg"
                className="gap-2 bg-primary px-8 hover:bg-primary/90"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Hablar con un Asesor
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PDFSection;
