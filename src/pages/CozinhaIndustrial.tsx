import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import cozinhaIndustrialImg from "@/assets/cozinha-industrial.jpeg";

const CozinhaIndustrial = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img 
              src={cozinhaIndustrialImg} 
              alt="Cozinha Industrial" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white mb-4 hover:text-primary transition-colors"
            >
              <ArrowLeft size={20} />
              Voltar
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Cozinha Industrial
            </h1>
            <p className="text-xl text-white mt-4">
              Equipamentos Completos em Aço Inox para sua Cozinha Profissional
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Soluções Completas para Cozinhas Industriais
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Desenvolvemos projetos completos de cozinhas industriais em aço inox, 
                atendendo restaurantes, hotéis, refeitórios, padarias e estabelecimentos 
                do setor alimentício com equipamentos de alta performance e durabilidade.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={24} />
                    Equipamentos
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li>• Mesas de Trabalho</li>
                    <li>• Pias e Cubas Industriais</li>
                    <li>• Prateleiras e Estantes</li>
                    <li>• Armários e Gabinetes</li>
                    <li>• Coifas e Exaustores</li>
                    <li>• Bancadas de Apoio</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={24} />
                    Vantagens
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li>• Projeto Sob Medida</li>
                    <li>• Material Durável e Higiênico</li>
                    <li>• Conformidade com Vigilância Sanitária</li>
                    <li>• Instalação Completa</li>
                    <li>• Manutenção Facilitada</li>
                    <li>• Garantia de Qualidade</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Solicite seu Projeto Personalizado
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nossa equipe está pronta para desenvolver a cozinha industrial 
                  ideal para o seu negócio. Solicite um orçamento sem compromisso.
                </p>
                <a 
                  href="https://wa.me/5519983134643" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default CozinhaIndustrial;
