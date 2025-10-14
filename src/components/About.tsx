import { Building2, TrendingUp, Award, Target } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2015",
      title: "De um sonho à realização",
      description: "Iniciamos com revendas, impulsionados por um sonho e o desejo genuíno de fazer a diferença, mergulhando no universo do empreendedorismo."
    },
    {
      year: "Início",
      title: "Da garagem para o mundo",
      description: "Começamos a produzir nossos próprios produtos, artesanalmente, com cuidado em cada detalhe. Uma garagem simples, mas cheia de significado."
    },
    {
      year: "Evolução",
      title: "Crescimento passo a passo",
      description: "Primeiro salão comercial de 4x4 metros com uma única porta. Depois, um espaço maior com duas portas e mezanino, permitindo organizar melhor os setores."
    },
    {
      year: "Hoje",
      title: "Estrutura para novos voos",
      description: "Operamos em 500m² com setores bem definidos: administrativo, comercial, produção e estoque. Eficiência e atendimento profissional."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Entregar equipamentos que resistem ao tempo e elevam o padrão de quem os utiliza."
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Compromisso com excelência em cada detalhe dos nossos produtos."
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      description: "Expansão sólida com projetos bem pensados e metas claras."
    },
    {
      icon: Building2,
      title: "Infraestrutura",
      description: "500m² de estrutura moderna para atender com eficiência."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header with Video */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto à esquerda */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Nossa jornada
              </h2>
              <p className="text-lg text-muted-foreground">
                Uma história de resiliência, evolução e comprometimento com a qualidade
              </p>
            </div>
            
            {/* Vídeo à direita */}
            <div className="flex items-center justify-center">
              <video 
                className="w-full h-auto rounded-lg shadow-elegant" 
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/galeria/video/hero.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-soft transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.year}</div>
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Nossos valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-elegant hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <blockquote className="text-xl md:text-2xl font-semibold text-primary italic">
            "Cada espaço foi um capítulo. Cada mudança, uma conquista."
          </blockquote>
          <p className="mt-6 text-muted-foreground">
            Nossa história é feita de resiliência, evolução e comprometimento com a qualidade. 
            Crescemos com responsabilidade, sempre guiados pelo respeito aos nossos clientes, 
            colaboradores e parceiros.
          </p>
          <p className="mt-4 text-lg font-semibold text-foreground">
            E sabemos: essa jornada está só começando.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
