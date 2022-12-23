
import { Box, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {

  const slides = [
    {
      id: "1",
      image: "https://www.unicef.org/india/sites/unicef.org.india/files/styles/hero_extended/public/UN0272155.jpg?itok=twDTRX5Q"
    },
    {
      id: "2",
      image: "https://www.teachforindia.org/assets/fellowship-desktop.png"
    },
    {
      id: "3",
      image: "https://www.teachforindia.org/assets/Annual_Report_website.png"
    },
    {
      id: "4",
      image: "https://www.teachforindia.org/assets/website-carousel-alumni.png"
    },
    {
      id: "5",
      image: "https://www.teachforindia.org/assets/website-carousel-1.png"
    }
  ];

  return (
    <Carousel infiniteLoop>
      {slides.map((slide) => {
        return (
          <Box key={slide.id}>
            <Image src={slide.image} height="500px" width="200px" />
          </Box>
        );
      })}
    </Carousel>
  );
};


