import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: Phone,
    title: "Telefone",
    value: "(19) 98313-4643",
    link: "https://wa.me/5519983134643"
  }, {
    icon: Mail,
    title: "Email",
    value: "vendas@rinoxer.com.br",
    link: "mailto:vendas@rinoxer.com.br"
  }, {
    icon: MapPin,
    title: "Endereço",
    value: "Rua Raimundo Baldoino dos Santos, 36 - Jardim Flórida, Quadra H, Lote 7 - CEP: 13189-890",
    link: null
  }, {
    icon: Clock,
    title: "Horário de funcionamento",
    value: "Segunda a Quinta das 7:30 às 12:00 e das 13:30 às 17:00. Sexta das 7:30 às 12:00 e das 13:30 às 16:00",
    link: null
  }];
  const socialLinks = [{
    icon: Facebook,
    name: "Facebook",
    url: "https://www.facebook.com/share/1LTk5duNM2/"
  }, {
    icon: Instagram,
    name: "Instagram",
    url: "https://www.instagram.com/rinoxer?utm_source=qr&igsh=MWlxM3psajRlNGx2Zg=="
  }];
  return <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Entre em contato
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Estamos prontos para atender você e transformar suas ideias em realidade
          </p>
        </div>

        {/* Contact Grid */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {contactInfo.map((info, index) => <div key={index} className="bg-background border border-border rounded-xl p-4 sm:p-6 hover:shadow-soft transition-all duration-300 animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="text-primary" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">
                      {info.title}
                    </h3>
                    {info.link ? <a href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-300 break-words">
                        {info.value}
                      </a> : <p className="text-sm sm:text-base text-muted-foreground break-words">
                        {info.value}
                      </p>}
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Google Maps */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
          <div className="rounded-xl overflow-hidden border border-border shadow-soft">
            <iframe
              src="https://maps.google.com/maps?q=-22.8354151,-47.2194773&z=16&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Rinoxer"
              className="w-full h-[300px] sm:h-[400px]"
            />
          </div>
        </div>

        {/* Social Media */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-foreground mb-6 sm:mb-8">
            Redes sociais
          </h3>
          <div className="flex justify-center gap-3 sm:gap-4">
            {socialLinks.map((social, index) => <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary hover:bg-primary-dark text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-elegant" aria-label={social.name}>
                <social.icon size={20} />
              </a>)}
          </div>
        </div>

        {/* CTA Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-primary rounded-2xl p-6 sm:p-8 md:p-12 text-center animate-fade-in">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground mb-3 sm:mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-sm sm:text-base text-primary-foreground/90 mb-6 sm:mb-8">
              Solicite um orçamento sem compromisso e descubra como podemos ajudar
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a href="https://wa.me/5519983134643" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-background hover:bg-secondary text-primary font-semibold rounded-lg transition-all duration-300 hover:shadow-elegant text-sm sm:text-base">
                Falar no WhatsApp
              </a>
              <a href="mailto:vendas@rinoxer.com.br" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-2 border-primary-foreground/30 font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base">
                Enviar Email
              </a>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="max-w-3xl mx-auto mt-8 sm:mt-12 text-center">
          
        </div>
      </div>
    </section>;
};
export default Contact;