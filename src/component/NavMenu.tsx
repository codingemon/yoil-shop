import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./NavMenu.css";

function NavMenu() {
  // swiper를 보여줘야 하는지에 대한 state 설정
  const [shouldShowSwiper, setShouldShowSwiper] = useState(true);
  const swiperContainerRef = useRef<HTMLDivElement>(null);
  // 스크롤 위치를 저장하는 Ref 설정
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // 현재 스크롤 위치 저장
      const currentScrollY = window.scrollY;
      // 이전 스크롤 위치와 현재 위치의 차이 계산
      const delta = currentScrollY - lastScrollY.current;
      // 이전 스크롤 위치 업데이트
      lastScrollY.current = currentScrollY;

      // 스크롤을 내린 경우 Swiper 숨김
      // 작동 이상무
      if (delta > 0 && shouldShowSwiper) {
        setShouldShowSwiper(false);
        // 스크롤을 올린 경우 Swiper 보여줌
        // 올릴때 말고 멈췄을 때 보여주는건 ?..
      } else if (delta < 0 && !shouldShowSwiper) {
        setShouldShowSwiper(true);
      }
    };
    // 스크롤 이벤트 등록
    window.addEventListener("scroll", handleScroll);
    // useEffect cleanup 함수에서 이벤트 해제
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldShowSwiper]);

  const swiperClasses = ["swiper-container"];
  if (!shouldShowSwiper) {
    swiperClasses.push("swiper-hide");
  }

  return (
    <div className={swiperClasses.join(" ")} ref={swiperContainerRef}>
      <Swiper
        spaceBetween={0}
        slidesPerView={5.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Link
            className="header-nav-item"
            style={{ textDecoration: "none" }}
            to="/Home"
          >
            All
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            className="header-nav-item"
            style={{ textDecoration: "none" }}
            to="/Chei"
          >
            채이
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            className="header-nav-item"
            style={{ textDecoration: "none" }}
            to="/JJuNi"
          >
            쭈니
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            className="header-nav-item"
            style={{ textDecoration: "none" }}
            to="/Jenny"
          >
            Jenny
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            className="header-nav-item2"
            style={{ textDecoration: "none" }}
            to="/Ro"
          >
            로블린
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            className="header-nav-item3"
            style={{ textDecoration: "none" }}
            to="/Gu"
          >
            구윤블리
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default NavMenu;
