import "./paper.css";
import Sticker from "./sticker";

const Paper = () => {
  const container = document.createElement("div");
  container.className = "paper-container swiper";

  const wrapper = document.createElement("div");
  wrapper.className = "swiper-wrapper";

  const nextButton = document.createElement("div");
  const prevButton = document.createElement("div");

  nextButton.className = "swiper-button-next";
  prevButton.className = "swiper-button-prev";

  wrapper.append(
    Sticker(),
    Sticker(),
    Sticker(),
    Sticker(),
    Sticker(),
    Sticker(),
    Sticker()
  );

  container.append(wrapper, nextButton, prevButton);

  return container;
};

export default Paper;
