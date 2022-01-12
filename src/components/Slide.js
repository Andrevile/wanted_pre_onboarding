import React, { useEffect, useState, useRef } from "react";
import { data } from "./data/slidedata";
import styled from "styled-components";
import { translateSlide } from "../module/useeffects";
import { leftSlide, rightSlide } from "../module/btnEvent";
import CardInfo from "./CardInfo";
const ImgContainer = styled.div`
  padding: 0 12px;
  box-sizing: content-box;
  width: ${(props) => props.width};
  position: relative;
  @media (max-width: 767px) {
    height: 200px;
  }
`;

const Img = styled.img`
  display: inline-block;
  border-radius: 4px;
  object-fit: cover;
  width: ${(props) => props.width};
  filter: brightness(${(props) => props.filter}%);
  @media (max-width: 767px) {
    height: 200px;
  }
`;
const Slide = () => {
  const [bannerList, NewbannerList] = useState(data);
  const [currentBanner, postBanner] = useState(2);
  const [windowWidth, PostWidth] = useState(1060);
  // const [finish, BacktoStart] = useState(true);
  const btnTimer = useRef(null);
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
            50
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
      }, 100);
      let tempT;
      globalT.current = setInterval(() => {
        if (currentPosition.current === 12) {
          postBanner(currentPosition.current + 1);
          translateSlide(bannerList, slideRef, currentPosition.current + 1);
          currentPosition.current = currentPosition.current + 1;
          slideRef.current.style.transition = `all 0.5s ease`;
          tempT = setTimeout(() => {
            postBanner(2);
            translateSlide(bannerList, slideRef, 2);
            slideRef.current.style.transition = "none";
            currentPosition.current = 2;
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
      if (currentPosition.current === 12) {
        postBanner(currentPosition.current + 1);
        translateSlide(bannerList, slideRef, currentPosition.current + 1);
        slideRef.current.style.transition = `transform 0.5s ease`;
        currentPosition.current = currentPosition + 1;

        tempT = setTimeout(() => {
          translateSlide(bannerList, slideRef, 2);
          currentPosition.current = 2;
          postBanner(2);
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
      className="Main-container"
      style={{ height: "600px", position: "relative" }}
    >
      <button
        className="gotoRight"
        onClick={() => {
          if (!btnTimer.current) {
            rightSlide(data, currentPosition, slideRef, postBanner);
            btnTimer.current = setTimeout(() => {
              btnTimer.current = null;
            }, 800);
            // btnTimer.current = null;
          }

          //   leftSlide(data, globalT, currentPosition, slideRef, postBanner);
        }}
      >
        <span className="SvgIcon_SvgIcon__root__8vwon">
          <svg
            className="SvgIcon_SvgIcon__root__svg__DKYBi"
            viewBox="0 0 18 18"
          >
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </span>
      </button>
      <button
        className="gotoLeft"
        onClick={() => {
          console.log("leftBtn");
          if (!btnTimer.current) {
            leftSlide(data, currentPosition, slideRef, postBanner);
            btnTimer.current = setTimeout(() => {
              btnTimer.current = null;
            }, 800);
          }
        }}
      >
        <span className="SvgIcon_SvgIcon__root__8vwon">
          <svg
            className="SvgIcon_SvgIcon__root__svg__DKYBi"
            viewBox="0 0 18 18"
          >
            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
          </svg>
        </span>
      </button>
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
                  showing={
                    currentBanner === banner.id ||
                    (currentBanner === 13 && banner.id === 2) ||
                    (currentBanner === 1 && banner.id === 12)
                      ? "1"
                      : "0"
                  }
                ></CardInfo>
              </ImgContainer>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slide;
