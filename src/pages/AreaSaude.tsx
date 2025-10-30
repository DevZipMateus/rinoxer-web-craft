import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import areaSaudeImg from "@/assets/area-saude.jpeg";
import bancadaLab from "@/assets/saude/bancada-laboratorio.jpg";
import armarioInox from "@/assets/saude/armario-inox.jpg";
import carrinhoMed from "@/assets/saude/carrinho-medicacao.jpg";
import piaCirurgica from "@/assets/saude/pia-cirurgica.jpg";
import mesaInstrumentos from "@/assets/saude/mesa-instrumentos.jpg";
import prateleiras from "@/assets/saude/prateleiras.jpg";
import lixeiraHospitalar from "@/assets/saude/lixeira-hospitalar.jpg";
import macaExame from "@/assets/saude/maca-exame.jpg";
import bandejaEsterilizacao from "@/assets/saude/bandeja-esterilizacao.jpg";
import cabeceiraLeito from "@/assets/saude/cabeceira-leito.jpg";
import balcaoFarmacia from "@/assets/saude/balcao-farmacia.jpg";
import carroUtilitario from "@/assets/saude/carro-utilitario.jpg";

const AreaSaude = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img 
              src={areaSaudeImg} 
              alt="Área da Saúde" 
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
              Área da Saúde
            </h1>
            <p className="text-xl text-white mt-4">
              Soluções em Aço Inox para Ambientes Hospitalares
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Equipamentos para Hospitais e Clínicas
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fabricamos equipamentos em aço inox de alta qualidade para ambientes hospitalares, 
                clínicas, laboratórios e consultórios, garantindo higiene, durabilidade e conformidade 
                com as normas sanitárias.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={24} />
                    Produtos Principais
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li>• Bancadas para Laboratório</li>
                    <li>• Armários e Estantes</li>
                    <li>• Carrinhos de Medicação</li>
                    <li>• Pias e Lavabos Cirúrgicos</li>
                    <li>• Mesas para Instrumentos</li>
                    <li>• Prateleiras e Suportes</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={24} />
                    Diferenciais
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li>• Aço Inox AISI 304/316</li>
                    <li>• Fácil Higienização</li>
                    <li>• Resistente a Corrosão</li>
                    <li>• Materia prima</li>
                    <li>• Projetos Personalizados</li>
                    <li>• Instalação Profissional</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Solicite um Orçamento Personalizado
                </h3>
                <p className="text-muted-foreground mb-6">
                  Entre em contato conosco para desenvolver uma solução sob medida 
                  para sua instituição de saúde.
                </p>
                <a 
                  href="https://wa.me/5519983134643" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300"
                >
                  Falar com Especialista
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Products Gallery Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Nossos Produtos para Área da Saúde
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Conheça alguns dos equipamentos em aço inox que fabricamos
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={bancadaLab} 
                    alt="Bancada para Laboratório" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-semibold text-lg p-4">Bancada para Laboratório</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={armarioInox} 
                    alt="Armário em Aço Inox" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-semibold text-lg p-4">Armário em Aço Inox</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={carrinhoMed} 
                    alt="Carrinho de Medicação" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-semibold text-lg p-4">Carrinho de Medicação</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={piaCirurgica} 
                    alt="Pia Cirúrgica" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-semibold text-lg p-4">Pia Cirúrgica</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={mesaInstrumentos} 
                    alt="Mesa para Instrumentos" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-semibold text-lg p-4">Mesa para Instrumentos</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={prateleiras} 
                    alt="Prateleiras e Estantes" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-semibold text-lg p-4">Prateleiras e Estantes</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={lixeiraHospitalar} 
                    alt="Lixeira Hospitalar" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-semibold text-lg p-4">Lixeira Hospitalar</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={macaExame} 
                    alt="Maca para Exame" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-semibold text-lg p-4">Maca para Exame</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={bandejaEsterilizacao} 
                    alt="Bandeja de Esterilização" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-semibold text-lg p-4">Bandeja de Esterilização</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={cabeceiraLeito} 
                    alt="Cabeceira de Leito" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-semibold text-lg p-4">Cabeceira de Leito</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={balcaoFarmacia} 
                    alt="Balcão para Farmácia" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-semibold text-lg p-4">Balcão para Farmácia</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={carroUtilitario} 
                    alt="Carro Utilitário" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-semibold text-lg p-4">Carro Utilitário</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default AreaSaude;
