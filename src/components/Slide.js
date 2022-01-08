import React, { useEffect, useState, useRef } from "react";
import { data } from "./data/slidedata";
import styled from "styled-components";
import { translateSlide } from "../module/useeffects";
import CardInfo from "./CardInfo";
const ImgContainer = styled.div`
  padding: 0 12px;
  box-sizing: content-box;
  width: ${(props) => props.width};
  position: relative;
`;

const Img = styled.img`
  display: inline-block;
  border-radius: 4px;
  object-fit: cover;
  width: ${(props) => props.width};
  filter: brightness(${(props) => props.filter}%);
`;
const Slide = () => {
  const [bannerList, NewbannerList] = useState(data);
  const [currentBanner, postBanner] = useState(1);
  const [windowWidth, PostWidth] = useState(1060);
  const [finish, BacktoStart] = useState(true);
  const slideRef = useRef(null);
  const imgContainer = useRef(null);
  const imgWidth = useRef(null);
  const currentPosition = useRef(currentBanner);
  const globalT = useRef(null);

  async function windowResize() {
    let timer;
    let totalWidth;
    if (globalT.current) {
      await clearInterval(globalT.current);
    }

    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        const size = window.innerWidth;
        if (size >= 1200) {
          PostWidth(1060);
          totalWidth = 1084 * bannerList.length;
          slideRef.current.style.transform = `translateX(-${
            (totalWidth / bannerList.length) * currentPosition.current -
            (window.innerWidth - 1060) / 2 +
            60
          }px)`;
        } else {
          PostWidth(size);
          totalWidth = (window.innerWidth - 76) * bannerList.length;
          imgContainer.current.style.width = size - 100 + "px";
          imgWidth.current.style.width = size - 100 + "px";
          slideRef.current.style.transform = `translateX(-${
            (totalWidth / bannerList.length) * currentPosition.current
          }px)`;
        }
        slideRef.current.style.transition = "none";
      }, 200);
      let tempT;
      globalT.current = setInterval(() => {
        if (currentPosition.current === 11) {
          postBanner(currentBanner.current + 1);
          translateSlide(bannerList, slideRef, currentPosition.current + 1);
          currentPosition.current = currentPosition.current + 1;
          slideRef.current.style.transition = `all 0.5s ease`;
          tempT = setTimeout(() => {
            postBanner(1);
            translateSlide(bannerList, slideRef, 1);
            slideRef.current.style.transition = "none";
            currentPosition.current = 1;
          }, 500);
        } else {
          postBanner(currentPosition.current + 1);
          translateSlide(bannerList, slideRef, currentPosition.current + 1);
          slideRef.current.style.transition = `all 0.5s ease`;
          currentPosition.current = currentPosition.current + 1;
          //   if (currentPosition.current === 10 || currentPosition.current === 9) {
          //   postBanner(currentPosition.current);
          //   }
        }
      }, 3000);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", windowResize);
    translateSlide(bannerList, slideRef, currentBanner);

    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  useEffect(() => {
    let tempT;
    globalT.current = setInterval(() => {
      if (currentPosition.current === 11) {
        postBanner(currentPosition.current + 1);
        translateSlide(bannerList, slideRef, currentPosition.current + 1);
        slideRef.current.style.transition = `all 0.5s ease`;
        currentPosition.current = currentPosition + 1;

        tempT = setTimeout(() => {
          translateSlide(bannerList, slideRef, 1);
          currentPosition.current = 1;
          postBanner(1);
          slideRef.current.style.transition = "none";
        }, 500);
      } else {
        postBanner(currentPosition.current + 1);
        translateSlide(bannerList, slideRef, currentPosition.current + 1);
        slideRef.current.style.transition = `all 0.5s ease`;
        currentPosition.current = currentPosition.current + 1;
      }
    }, 3000);

    return () => {
      clearTimeout(globalT.current);
    };
  }, [currentBanner]);

  return (
    <div
      className="Slide-container"
      style={
        window.innerWidth >= 1200
          ? { padding: "0 50px" }
          : { padding: "0 40px" }
      }
    >
      <div
        className="Slide-list"
        ref={slideRef}
        style={{ width: 1084 * bannerList.length + "px" }}
      >
        {bannerList.map((banner, idx) => {
          return (
            <ImgContainer
              ref={imgContainer}
              key={idx}
              width={
                window.innerWidth >= 1200
                  ? "1060px"
                  : window.innerWidth - 100 + "px"
              }
            >
              <Img
                ref={imgWidth}
                src={banner.src}
                alt={banner.info_top}
                width={
                  window.innerWidth >= 1200
                    ? "1060px"
                    : window.innerWidth - 100 + "px"
                }
                filter={currentBanner !== banner.id ? "20" : "100"}
              ></Img>
              <CardInfo
                info_top={banner.info_top}
                info_bottom={banner.info_bottom}
                showing={currentBanner === banner.id ? "1" : "0"}
              ></CardInfo>
            </ImgContainer>
          );
        })}
      </div>
    </div>
  );
};

export default Slide;
