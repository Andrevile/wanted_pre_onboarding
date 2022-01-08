export const translateSlide = (data, slideRef, currentBanner) => {
  let totalWidth;
  let check;

  if (window.innerWidth >= 1200) {
    totalWidth = 1084 * data.length;
    check = 1084;
    slideRef.current.style.transform = `translateX(-${
      (totalWidth / data.length) * currentBanner -
      (window.innerWidth - 1060) / 2 +
      60
    }px)`;
  } else {
    totalWidth = (window.innerWidth - 76) * data.length;
    check = window.innerWidth - 100;
    slideRef.current.style.transform = `translateX(-${
      (totalWidth / data.length) * currentBanner + 2
    }px)`;
  }
  slideRef.current.style.width = totalWidth + "px";
};
