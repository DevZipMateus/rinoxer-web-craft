import { Star, ExternalLink } from "lucide-react";
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
import { Button } from "@/components/ui/button";

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
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Avaliações dos Clientes
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
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
            <CarouselContent className="-ml-2 sm:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1 sm:p-2 h-full">
                    <Card className="h-[240px] sm:h-[280px] bg-card border-border hover:shadow-elegant transition-all duration-300 flex flex-col">
                      <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                        <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-foreground mb-3 sm:mb-4 flex-1 text-xs sm:text-sm line-clamp-5 sm:line-clamp-6 font-playfair italic">
                          "{testimonial.text}"
                        </p>
                        <p className="text-primary font-semibold mt-auto font-playfair text-sm sm:text-base">
                          {testimonial.name}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 sm:-left-12" />
            <CarouselNext className="hidden sm:flex -right-4 sm:-right-12" />
          </Carousel>
          
          <div className="text-center mt-6 sm:mt-8">
            <Button
              asChild
              size="lg"
              className="font-playfair text-base sm:text-lg shadow-elegant hover:shadow-soft transition-all duration-300"
            >
              <a 
                href="https://www.google.com/search?q=rinoxer&oq=rinoxer&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyDAgCEC4YChixAxiABDIMCAMQLhgKGLEDGIAEMg8IBBAuGAoYgwEYsQMYgAQyBggFEEUYPDIGCAYQRRg9MgYIBxBFGDzSAQgyMDQ3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x94c8bbc9b734ab8f:0x1eea48fcbc2d4bb8,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mais avaliações
                <ExternalLink className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
