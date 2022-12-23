
import { Box, Center, Image } from "@chakra-ui/react";
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
    <Box background="#28292D">
      <Carousel infiniteLoop>
        {slides.map((slide) => {
          return (
            <Box key={slide.id}>
              <Image src={slide.image} height="500px" width="200px" />
            </Box>
          );
        })}
      </Carousel>
      <Box p={10} background="#CDE6F2">
        <Center fontSize={"30"}>Our Mission</Center>
        <Center>We believe leadership for education is the solution. We are building a movement of leaders who will eliminate educational inequity in our society.</Center>
      </Box>
      <Box p={10} background="#48828A">
        <Center fontSize={"30"}>Solve The Education Crisis</Center>
        <Center>It is an opportunity for societies brightest and most promising youth, from the world's best universities and workplaces, to serve as full-time teachers to youth from low-income communities in under-resourced schools. Through teaching and working with key education stakeholders, our Fellows are exposed to the grassroots realities of the education system and cultivate the knowledge, skills, and mindsets needed to attain positions of leadership in and beyond education, working collectively to build a vibrant movement for educational equity across India.
        </Center>
      </Box>
    </Box>
  );
};


