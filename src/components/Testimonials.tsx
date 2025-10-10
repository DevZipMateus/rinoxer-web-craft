import { Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!api) return;

    // Iniciar auto-play
    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api]);
  const testimonials = [
    {
      name: "Jefferson Vinicius Silva Lopes",
      text: "Profissionais de respeito ! Ótimo produto.",
      rating: 5,
    },
    {
      name: "Eliezer Andrade",
      text: "Atendimento Top.......qualidade no serviço ........recomendo",
      rating: 5,
    },
    {
      name: "Juliana Souza",
      text: "O atendimento, orçamento e produção das peças foram excelentes! Todas as dúvidas sanadas, me ajudaram com o projeto e me entregaram a mobília prontíssima dentro do prazo. Sem falar no acabamento e qualidade! Super indico a Rinoxer!",
      rating: 5,
    },
    {
      name: "JACKE SHOES",
      text: "Super indico, empresa seria, compromisso na entrega, qualidade excelente. Valeu RINOXER",
      rating: 5,
    },
    {
      name: "Estefano Garcia",
      text: "Excelente atendimento, atende ao prazo estipulado.",
      rating: 5,
    },
    {
      name: "Juliana Antunes",
      text: "Trabalho impecável 🥰 amei muito bem feita. Super indico",
      rating: 5,
    },
    {
      name: "Botica da Pedra hortolândia",
      text: "Ótimos profissionais, recomendo!!",
      rating: 5,
    },
    {
      name: "Sandro Gonçalves De Lima",
      text: "Foi ótimo o atendimento e pia muito boa",
      rating: 5,
    },
    {
      name: "Marcel Pleul",
      text: "Super recomendo, material muito bem feito e acabado.",
      rating: 5,
    },
    {
      name: "Bruna Loraine",
      text: "As mesas ficaram ótimas, atendimento excelente!",
      rating: 5,
    },
    {
      name: "Wellington Vertuli",
      text: "Produtos são executados com qualidade obedecendo os prazos, alem de conseguirem excelentes preços.",
      rating: 5,
    },
    {
      name: "Anderson Castro",
      text: "Fui super bem atendido pela Juliana, pia e mesa de qualidade e foi entregue antes do prazo.",
      rating: 5,
    },
    {
      name: "Luciana Rocha",
      text: "Ótimo atendimento e peças de Excelente qualidade. Fiz minha compra e já estou anciosa para os novos pedidos.",
      rating: 5,
    },
    {
      name: "Maximize Movie",
      text: "Atendimento nota dez, sanaram todas as minhas dúvidas, os pedidos foram realizados em curtíssimo prazo, os produtos são de ótima qualidade, a instalação é limpa e organizada, por ter sido dentro de uma padaria, isso foi de grande valia. Volto a fazer negócios em breve.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Avaliações dos Clientes
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o que nossos clientes dizem sobre nós
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <Card className="h-[280px] bg-card border-border hover:shadow-elegant transition-all duration-300 flex flex-col">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-foreground mb-4 flex-1 text-sm line-clamp-6">
                          "{testimonial.text}"
                        </p>
                        <p className="text-primary font-semibold mt-auto">
                          {testimonial.name}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
