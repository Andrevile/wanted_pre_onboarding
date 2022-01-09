import { translateSlide } from "./useeffects";
export const rightSlide = (
  data,

  currentPosition,
  slideRef,
  postBanner
) => {
  if (currentPosition.current === 12) {
    postBanner(currentPosition.current + 1);
    translateSlide(data, slideRef, currentPosition.current + 1);
    currentPosition.current = currentPosition.current + 1;
    slideRef.current.style.transition = `all 0.5s ease`;
    setTimeout(() => {
      postBanner(2);
      translateSlide(data, slideRef, 2);
      slideRef.current.style.transition = "none";
      currentPosition.current = 2;
    }, 500);
  } else {
    postBanner(currentPosition.current + 1);
    translateSlide(data, slideRef, currentPosition.current + 1);
    slideRef.current.style.transition = `all 0.5s ease`;
    currentPosition.current = currentPosition.current + 1;
  }
};

export const leftSlide = (
  data,

  currentPosition,
  slideRef,
  postBanner
) => {
  if (currentPosition.current === 2) {
    console.log(currentPosition.current);
    postBanner(currentPosition.current - 1);
    translateSlide(data, slideRef, currentPosition.current - 1);
    currentPosition.current = currentPosition.current - 1;
    slideRef.current.style.transition = `all 0.5s ease`;
    setTimeout(() => {
      postBanner(12);
      translateSlide(data, slideRef, 12);
      slideRef.current.style.transition = "none";
      currentPosition.current = 12;
    }, 500);
  } else {
    postBanner(currentPosition.current - 1);
    translateSlide(data, slideRef, currentPosition.current - 1);
    slideRef.current.style.transition = `all 0.5s ease`;
    currentPosition.current = currentPosition.current - 1;
  }
};
