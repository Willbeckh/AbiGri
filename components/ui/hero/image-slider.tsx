"use client";
import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface ImageSliderProps {
  images: {
    banner_image: string;
    alt: string;
  }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const plugin = useRef(Autoplay({ delay: 6000, stopOnInteraction: true }));

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className=""
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="h-80 w-auto relative shadow">
                  <CardContent className="flex aspect-square">
                    <Image
                      src={image.banner_image}
                      alt={image.alt}
                      fill={true}
                      quality={75}
                      className="rounded-lg object-cover"
                      priority={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
