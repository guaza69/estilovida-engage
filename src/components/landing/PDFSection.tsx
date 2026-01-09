import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const PDFSection = () => {
  // Placeholder PDF URL - replace with actual PDF URL
  const pdfUrl = "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.jpg";
  
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
            <FileText className="h-4 w-4" />
            Catálogo de Servicios
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Conoce Todos Nuestros Programas
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explora nuestro catálogo completo de servicios y encuentra el programa perfecto para tu empresa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="overflow-hidden rounded-2xl bg-card shadow-card">
            <div className="flex items-center gap-3 border-b border-border bg-muted/50 px-6 py-4">
              <FileText className="h-5 w-5 text-primary" />
              <span className="font-medium text-foreground">Catálogo Estilo y Vida - Bienestar Empresarial</span>
            </div>
            <div className="aspect-[4/3] bg-muted/30 p-4">
              {/* PDF Embed placeholder - replace with actual PDF embed */}
              <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-border">
                <FileText className="mb-4 h-16 w-16 text-muted-foreground/50" />
                <p className="mb-2 text-lg font-medium text-muted-foreground">Catálogo de Servicios</p>
                <p className="text-sm text-muted-foreground/70">
                  El PDF se visualizará aquí una vez configurado
                </p>
                {/* 
                  Para embeber un PDF real, reemplaza este div con:
                  <iframe 
                    src="URL_DEL_PDF#toolbar=0" 
                    className="h-full w-full rounded-lg" 
                    title="Catálogo de Servicios"
                  />
                */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PDFSection;
