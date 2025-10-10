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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Além de fabricar, oferecemos serviços especializados para garantir o melhor desempenho dos equipamentos
          </p>
        </div>

        {/* Services */}
        <div className="max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-8 md:p-10 hover:shadow-elegant transition-all duration-300 animate-fade-in"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Wrench className="text-primary-foreground" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="text-accent flex-shrink-0" size={20} />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-12 bg-secondary/50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Fabricação personalizada
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Todos os nossos produtos podem ser fabricados sob medida para atender às necessidades 
            específicas do seu projeto. Entre em contato e converse com nossa equipe técnica.
          </p>
          <a
            href="https://wa.me/5519983134643"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-elegant"
          >
            Fale com Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
