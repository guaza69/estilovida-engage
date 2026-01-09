import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary-foreground">
              Estilo y Vida
            </h3>
            <p className="mb-4 text-sm text-primary-foreground/70">
              Inversiones Estilo y Vida Fitness SAS
            </p>
            <p className="text-sm text-primary-foreground/70">
              Más de 15 años transformando el bienestar empresarial en Colombia.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-bold text-primary-foreground">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+57 300 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 text-secondary" />
                <span>contacto@estiloyvida.com</span>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="mb-4 font-bold text-primary-foreground">Presencia</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Bogotá, Colombia</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Medellín, Colombia</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Bucaramanga, Colombia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="flex items-center justify-center gap-1 text-sm text-primary-foreground/50">
            Hecho con <Heart className="h-4 w-4 fill-destructive text-destructive" /> para empresas que cuidan a su gente
          </p>
          <p className="mt-2 text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Estilo y Vida. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
