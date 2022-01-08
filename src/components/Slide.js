import React, { useEffect, useState, useRef } from "react";
import { data } from "./data/slidedata";
import styled from "styled-components";
import { initSlide } from "../module/useeffects";
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
`;
const Slide = () => {
  const [bannerList, NewbannerList] = useState(data);
  const [currentBanner, postBanner] = useState(1);
  const [windowWidth, PostWidth] = useState(1060);
  const slideRef = useRef(null);
  const imgContainer = useRef(null);
  const imgWidth = useRef(null);
  //   const current = useRef(currentBanner);

  function windowResize() {
    let timer;
    let totalWidth;
    console.log(currentBanner);
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        const size = window.innerWidth;
        if (size >= 1200) {
          PostWidth(1060);
          totalWidth = 1084 * bannerList.length;
          slideRef.current.style.transform = `translateX(-${
            totalWidth / bannerList.length - (window.innerWidth - 1060) / 2 + 50
          }px)`;
        } else {
          PostWidth(size);
          totalWidth = (window.innerWidth - 76) * bannerList.length;
          imgContainer.current.style.width = size - 100 + "px";
          imgWidth.current.style.width = size - 100 + "px";
          slideRef.current.style.transform = `translateX(-${
            (totalWidth / bannerList.length) * currentBanner
          }px)`;
        }
      }, 200);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", windowResize);
    initSlide(bannerList, slideRef, currentBanner);

    return () => {
      console.log("이벤트 제거");
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  return (
    <div
      className="Slide-container"
      style={
        windowWidth >= 1200 ? { padding: "0 50px" } : { padding: "0 40px" }
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
              ></Img>
            </ImgContainer>
          );
        })}
      </div>
    </div>
  );
};

export default Slide;
