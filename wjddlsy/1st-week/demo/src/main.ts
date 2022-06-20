import "./style.css";
import "swiper/css";
import "swiper/css/navigation";
import Swiper from "swiper";
import Paper from "./components/paper";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.append(Paper());

const swiper = new Swiper(".paper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    enabled: true,
  },
  slidesPerView: "auto",
});

const nextButton: HTMLDivElement = document.querySelector(
  ".swiper-button-next"
)!;
const prevButton: HTMLDivElement = document.querySelector(
  ".swiper-button-prev"
)!;
nextButton.addEventListener("click", () => {
  swiper.slideNext();
});
prevButton.addEventListener("click", () => {
  swiper.slidePrev();
});

console.log(swiper.navigation);
swiper.navigation.init();
