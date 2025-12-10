import { Wrench, CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Instalação de coifas e acessórios",
      description: "Equipe especializada em instalação completa de sistemas de exaustão e ventilação",
      features: [
        "Instalação profissional",
        "Ajustes e regulagens",
        "Testes de funcionamento",
        "Garantia de qualidade"
      ]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Serviços
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Além de fabricar, oferecemos serviços especializados para garantir o melhor desempenho dos equipamentos
          </p>
        </div>

        {/* Services */}
        <div className="max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 sm:p-8 md:p-10 hover:shadow-elegant transition-all duration-300 animate-fade-in"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Wrench className="text-primary-foreground" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 sm:gap-3">
                        <CheckCircle2 className="text-accent flex-shrink-0" size={18} />
                        <span className="text-sm sm:text-base text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-8 sm:mt-12 bg-secondary/50 rounded-xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
            Fabricação personalizada
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
            Todos os nossos produtos podem ser fabricados sob medida para atender às necessidades 
            específicas do seu projeto. Entre em contato e converse com nossa equipe técnica.
          </p>
          <a
            href="https://wa.me/5519983134643"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-elegant text-sm sm:text-base"
          >
            Fale com Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
