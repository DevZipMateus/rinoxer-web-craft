import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(19) 98313-4643",
      link: "https://wa.me/5519983134643"
    },
    {
      icon: Mail,
      title: "Email",
      value: "vendas@rinoxer.com.br",
      link: "mailto:vendas@rinoxer.com.br"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Rua Osmilton Teixeira, Nº 1029 A - Chácara Recreio Alvorada - Hortolândia SP - CEP: 13183-751",
      link: null
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      value: "Segunda a Quinta das 7:30 às 12:00 e das 13:30 às 17:00. Sexta das 7:30 às 12:00 e das 13:30 às 16:00",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/share/1LTk5duNM2/"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/rinoxer?utm_source=qr&igsh=MWlxM3psajRlNGx2Zg=="
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você e transformar suas ideias em realidade
          </p>
        </div>

        {/* Contact Grid */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-xl p-6 hover:shadow-soft transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Redes sociais
          </h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-primary hover:bg-primary-dark text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-elegant"
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-primary-foreground/90 mb-8">
              Solicite um orçamento sem compromisso e descubra como podemos ajudar
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/5519983134643"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-background hover:bg-secondary text-primary font-semibold rounded-lg transition-all duration-300 hover:shadow-elegant"
              >
                Falar no WhatsApp
              </a>
              <a
                href="mailto:vendas@rinoxer.com.br"
                className="w-full sm:w-auto px-8 py-4 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-2 border-primary-foreground/30 font-semibold rounded-lg transition-all duration-300"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Rinoxer</strong> - CNPJ: 35.469.064/0001-10
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
