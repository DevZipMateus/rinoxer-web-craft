import { Package, Refrigerator, Utensils, Wrench, ShoppingCart, Layers } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      icon: Utensils,
      title: "Coifas",
      description: "Sistemas de exaustão profissionais para cozinhas industriais"
    },
    {
      icon: Refrigerator,
      title: "Refrigeração",
      description: "Balcões refrigerados, geladeiras e freezers industriais"
    },
    {
      icon: Package,
      title: "Pias e Bancadas",
      description: "Pias, bancadas e tanques em aço inox de alta qualidade"
    },
    {
      icon: Layers,
      title: "Organização",
      description: "Prateleiras, estantes e sistemas de armazenamento"
    },
    {
      icon: ShoppingCart,
      title: "Carrinhos",
      description: "Carrinhos de transporte e movimentação para diversas aplicações"
    },
    {
      icon: Wrench,
      title: "Acessórios",
      description: "Corrimãos, revestimentos e acabamentos personalizados"
    }
  ];

  const sectors = [
    {
      title: "Setor alimentício",
      items: ["Cozinhas industriais", "Açougues", "Mercados", "Restaurantes", "Padarias"]
    },
    {
      title: "Setor da saúde",
      items: ["Clínicas", "Hospitais", "Laboratórios", "Consultórios", "Centros médicos"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Produtos
          </h2>
          <p className="text-lg text-muted-foreground">
            Equipamentos em aço inox de alta qualidade para diversas aplicações industriais
          </p>
        </div>

        {/* Products Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((product, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-xl p-6 hover:shadow-elegant hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mb-4 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <product.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Setores atendidos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-xl p-8 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-2xl font-bold text-primary mb-6">
                  {sector.title}
                </h4>
                <ul className="space-y-3">
                  {sector.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-16 text-center bg-gradient-primary rounded-2xl p-8 md:p-12 animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Precisa de um produto personalizado?
          </h3>
          <p className="text-primary-foreground/90 mb-8">
            Desenvolvemos soluções sob medida para atender às necessidades específicas do seu negócio
          </p>
          <a
            href="https://wa.me/5519983134643"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-background hover:bg-secondary text-primary font-semibold rounded-lg transition-all duration-300 hover:shadow-elegant"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
