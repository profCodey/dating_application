import { ImageSlider } from "./ImageSlider"
import car1 from "./imgs/car-1.jpeg"
import car2 from "./imgs/car-2.jpeg"
import car3 from "./imgs/car-3.jpeg"
import car4 from "./imgs/car-4.jpeg"
import car5 from "./imgs/car-5.jpeg"
import car6 from "./imgs/car-6.jpeg";
// import car6 from "./imgs/car-6.jpeg"

const IMAGES = [
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car4, alt: "Car Four" },
  { url: car5, alt: "Car Five" },
    { url: car6, alt: "Car Six" },
]

// const IMAGES = [
//   { url: "/images/netflirtBanner1.jpeg", alt: "Car One" },
//   { url: "/images/netflirtBanner2.jpeg", alt: "Car Two" },
//   { url: "/images/netflirtBanner3.jpeg", alt: "Car Three" },
//   { url: "/images/netflirtBanner4.jpeg", alt: "Car Four" },
//   { url: "/images/netflirtBanner5.jpeg", alt: "Car Five" },
// ];

export default function Slider() {
  return (
    <div
      style={{
        maxWidth: "100vw",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
    </div>
  )
}
