import { Building2, TrendingUp, Award, Target } from "lucide-react";
import fachadaRinoxer from "@/assets/fachada-rinoxer.jpg";

const About = () => {
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
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagem à esquerda */}
            <div className="flex items-center justify-center">
              <img 
                src={fachadaRinoxer} 
                alt="Fachada Rinoxer" 
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
            
            {/* Texto à direita */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Iniciamos em 2015 nossas atividades atuando na época apenas como revendedores, com o propósito de crescer e expandir de forma constante. Com o passar do tempo, abrimos novos horizontes para o setor de indústria, iniciando a produção dos nossos próprios produtos — ampliando cada vez mais o nosso portfólio, trazendo melhores custos e benefícios, com qualidade aos nossos clientes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hoje, contamos com uma estrutura sólida e preparada para novos desafios. Operamos em um espaço de 500 m², com setores bem definidos — administrativo, comercial, produção e estoque — garantindo eficiência, organização e um atendimento profissional de excelência.
              </p>
            </div>
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
