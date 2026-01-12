import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Sobre */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-playfair">Rinoxer</h3>
            <p className="text-xs sm:text-sm text-primary-foreground/80">
              Especializada em equipamentos de aço inox para cozinhas industriais e área de saúde.
              Qualidade e excelência em cada projeto.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-playfair">Links Rápidos</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="#sobre" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <Link to="/cozinha-industrial" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Área Alimentação
                </Link>
              </li>
              <li>
                <Link to="/area-saude" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Área de Saúde
                </Link>
              </li>
              <li>
                <a href="#contato" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-playfair">Contato</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-primary-foreground/80">
                  Rua Raimundo Baldoino dos Santos, 36 - Jardim Flórida, Quadra H, Lote 7 - CEP: 13189-890
                </span>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+5519983134643" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  (19) 98313-4643
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:vendas@rinoxer.com.br" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  vendas@rinoxer.com.br
                </a>
              </li>
              <li className="flex items-start gap-2 justify-center sm:justify-start">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-primary-foreground/80">
                  Seg-Qui: 7:30-12:00 / 13:30-17:00<br />
                  Sex: 7:30-12:00 / 13:30-16:00
                </span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-playfair">Redes Sociais</h3>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Rinoxer. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
