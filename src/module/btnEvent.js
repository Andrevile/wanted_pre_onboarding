import { translateSlide } from "./useeffects";
export const leftSlide = (
  data,
  globalT,
  currentPosition,
  slideRef,
  postBanner
) => {
  globalT.current = setInterval(() => {
    let tempT;
    if (currentPosition.current === 11) {
      postBanner(currentPosition.current + 1);
      translateSlide(data, slideRef, currentPosition.current + 1);
      currentPosition.current = currentPosition.current + 1;
      slideRef.current.style.transition = `all 0.5s ease`;
      tempT = setTimeout(() => {
        postBanner(1);
        translateSlide(data, slideRef, 1);
        slideRef.current.style.transition = "none";
        currentPosition.current = 1;
      }, 500);
    } else {
      postBanner(currentPosition.current + 1);
      translateSlide(data, slideRef, currentPosition.current + 1);
      slideRef.current.style.transition = `all 0.5s ease`;
      currentPosition.current = currentPosition.current + 1;
      //   if (currentPosition.current === 10 || currentPosition.current === 9) {
      //   postBanner(currentPosition.current);
      //   }
    }
  }, 3000);
};

export const rightSlide = (
  data,
  globalT,
  currentPosition,
  slideRef,
  postBanner
) => {
  globalT.current = setInterval(() => {
    let tempT;
    if (currentPosition.current === 11) {
      postBanner(currentPosition.current + 1);
      translateSlide(data, slideRef, currentPosition.current + 1);
      currentPosition.current = currentPosition.current + 1;
      slideRef.current.style.transition = `all 0.5s ease`;
      tempT = setTimeout(() => {
        postBanner(1);
        translateSlide(data, slideRef, 1);
        slideRef.current.style.transition = "none";
        currentPosition.current = 1;
      }, 500);
    } else {
      postBanner(currentPosition.current + 1);
      translateSlide(data, slideRef, currentPosition.current + 1);
      slideRef.current.style.transition = `all 0.5s ease`;
      currentPosition.current = currentPosition.current + 1;
      //   if (currentPosition.current === 10 || currentPosition.current === 9) {
      //   postBanner(currentPosition.current);
      //   }
    }
  }, 3000);
};
