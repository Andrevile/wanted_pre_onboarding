export const initSlide = (data, slideRef, currentBanner) => {
  let totalWidth;
  let check;

  if (window.innerWidth >= 1200) {
    totalWidth = 1084 * data.length;
    check = 1084;
    slideRef.current.style.transform = `translateX(-${
      (totalWidth / data.length) * 1 - (window.innerWidth - 1060) / 2 + 50
    }px)`;
  } else {
    totalWidth = (window.innerWidth - 76) * data.length;
    check = window.innerWidth - 100;
    slideRef.current.style.transform = `translateX(-${
      (totalWidth / data.length) * currentBanner
    }px)`;
  }
  slideRef.current.style.width = totalWidth + "px";
};
