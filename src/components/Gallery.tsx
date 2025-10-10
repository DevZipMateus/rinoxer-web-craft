import { useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const Gallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Lista de mídias (imagens e vídeos)
  const mediaItems = [
    { type: "image", src: "/galeria/midia_5.jpg", alt: "Produto Rinoxer 1" },
    { type: "image", src: "/galeria/midia_6.jpg", alt: "Produto Rinoxer 2" },
    { type: "image", src: "/galeria/midia_7.jpg", alt: "Produto Rinoxer 3" },
    { type: "image", src: "/galeria/midia_8.jpg", alt: "Produto Rinoxer 4" },
    { type: "video", src: '/galeria/videos/_cada_entrega_e_uma_nova_historia_contada_atraves_do_nosso_trabalho.".mp4' },
    { type: "video", src: '/galeria/videos/_compromisso_assumido_servico_entregue_seguimos_em_frente_com_profissionalismo.".mp4' },
    { type: "video", src: "/galeria/videos/_mais_que_uma_empresa_um_sonho_que_vira_realidade..mp4" },
    { type: "video", src: '/galeria/videos/_mais_um_projeto_saindo_do_papel_e_ganhando_forma. veja o resultado da finalização deste balcão refrigerado!".mp4' },
  ];

  // Configurar intervalo para imagens
  const startImageInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 3000);
  };

  // Parar intervalo
  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Monitorar mudança de slide
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      setCurrent(selectedIndex);

      const currentMedia = mediaItems[selectedIndex];
      
      if (currentMedia.type === "image") {
        startImageInterval();
      } else {
        stopInterval();
        // Reproduzir o vídeo atual
        const video = videoRefs.current[selectedIndex];
        if (video) {
          video.currentTime = 0;
          video.play();
        }
      }
    };

    api.on("select", onSelect);
    onSelect(); // Executar imediatamente

    return () => {
      api.off("select", onSelect);
      stopInterval();
    };
  }, [api]);

  // Quando um vídeo terminar, avançar para o próximo
  const handleVideoEnded = () => {
    if (api) {
      api.scrollNext();
    }
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nossa Galeria</h2>
          <p className="text-lg text-muted-foreground">Conheça nossos projetos e realizações</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {mediaItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-elegant">
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                          onEnded={handleVideoEnded}
                          controlsList="nodownload nofullscreen noremoteplayback"
                          disablePictureInPicture
                        >
                          <source src={item.src} type="video/mp4" />
                          Seu navegador não suporta vídeos.
                        </video>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {mediaItems.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
