export const translateSlide = (data, slideRef, currentBanner) => {
  let totalWidth;

  if (window.innerWidth >= 1200) {
    totalWidth = 1084 * data.length;
    slideRef.current.style.transform = `translateX(-${
      (totalWidth / data.length) * currentBanner -
      (window.innerWidth - 1060) / 2 +
      50
    }px)`;
  } else {
    totalWidth = (window.innerWidth - 76) * data.length;
    slideRef.current.style.transform = `translateX(-${
      (totalWidth / data.length) * currentBanner + 2
    }px)`;
  }
  slideRef.current.style.width = totalWidth + "px";
};
