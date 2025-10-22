import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Images
import pubg from "../assets/pubg.jpg";
import cas from "../assets/cas.png";
import witcher from "../assets/witcher.jpg";
import cyber from "../assets/cyber.jpg";
import Container from "./Container";

const slides = [
  {
    title: "PlayerUnknown’s Battlegrounds",
    subtitle: "Survive. Fight. Conquer.",
    img: pubg,
    link: "/games",
  },
  {
    title: "Call of Duty: Warzone",
    subtitle: "Enter the battlefield of chaos.",
    img: cas,
    link: "/games",
  },
  {
    title: "Cyberpunk 2077",
    subtitle: "Wake up, Samurai. There’s a city to burn.",
    img: cyber,
    link: "/games",
  },
  {
    title: "The Witcher 3: Wild Hunt",
    subtitle: "Monster hunter for hire.",
    img: witcher,
    link: "/games",
  },
];

const HomeBanner = () => {
  const leftContentRefs = useRef([]);

  const handleSlideChange = (swiper) => {
    leftContentRefs.current.forEach((el) => {
      if (el) el.classList.remove("slide-in");
    });
    const currentEl = leftContentRefs.current[swiper.realIndex];
    if (currentEl) currentEl.classList.add("slide-in");
  };

  return (
    <section className="home-banner mx-auto h-[90vh] relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (_, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          const currentEl = leftContentRefs.current[swiper.realIndex];
          if (currentEl) currentEl.classList.add("slide-in");
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full lg:bg-cover bg-auto bg-no-repeat py-16 bg-center relative flex items-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>

              <Container>
                <div
                  ref={(el) => (leftContentRefs.current[index] = el)}
                  className="left-content relative z-10 text-white md:px-0 px-2"
                >
                  <p className="text-sm uppercase tracking-widest text-yellow-400 mb-2">
                    {slide.subtitle}
                  </p>
                  <h1 className="md:text-4xl text-3xl lg:text-6xl font-bold leading-tight mb-5 drop-shadow-lg audiowide">
                    {slide.title}
                  </h1>
                  <a
                    href={slide.link}
                    className="inline-block bg-success border-3 border-success text-black hover:bg-white lg:px-6 px-4 lg:py-3 py-2 rounded-md font-semibold transition-colors duration-300 audiowide lg:text-xl"
                  >
                    Explore Now
                  </a>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom pagination */}
      <div className="custom-pagination absolute bottom-4 justify-center flex items-center gap-1 z-20 w-full mx-auto"></div>
    </section>
  );
};

export default HomeBanner;
