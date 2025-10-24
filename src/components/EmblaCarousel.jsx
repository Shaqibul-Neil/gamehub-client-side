import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Dot button
export const DotButton = ({ onClick, selected }) => (
  <button
    className={`embla__dot ${selected ? "embla__dot--selected" : ""}`}
    onClick={onClick}
  />
);

// Custom hook for dots
export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
};

// Main Carousel
const EmblaCarousel = ({ slides = [], options = {} }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenNodes = useRef([]);
  const tweenFactor = useRef(0.52 * slides.length);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  // Detect screen size
  const handleResize = useCallback(() => {
    setIsSmallScreen(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const setTweenNodes = useCallback(() => {
    if (!emblaApi) return;
    tweenNodes.current = emblaApi
      .slideNodes()
      .map((node) => node.querySelector(".embla__slide__content"));
  }, [emblaApi]);

  const tweenScale = useCallback(() => {
    if (!emblaApi) return;

    if (isSmallScreen) {
      // sm screen e scale effect off
      tweenNodes.current.forEach((node) => {
        if (node) node.style.transform = "scale(1)";
      });
      return;
    }

    const engine = emblaApi.internalEngine();
    const progress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();

    emblaApi.scrollSnapList().forEach((snap, snapIndex) => {
      const slideIndices = engine.slideRegistry[snapIndex];
      slideIndices.forEach((slideIndex) => {
        if (!slidesInView.includes(slideIndex)) return;

        let diff = snap - progress;
        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((lp) => {
            const target = lp.target();
            if (slideIndex === lp.index && target !== 0) {
              const sign = Math.sign(target);
              diff =
                sign === -1 ? snap - (1 + progress) : snap + (1 - progress);
            }
          });
        }

        const scale = Math.max(0, 1 - Math.abs(diff * tweenFactor.current));
        const node = tweenNodes.current[slideIndex];
        if (node) node.style.transform = `scale(${scale})`;
      });
    });
  }, [emblaApi, isSmallScreen]);

  useEffect(() => {
    if (!emblaApi) return;
    setTweenNodes();
    tweenScale();

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, setTweenNodes, tweenScale]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, i) => (
            <div className="embla__slide" key={i}>
              <div className="embla__slide__content">{slide}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, i) => (
          <DotButton
            key={i}
            onClick={() => onDotButtonClick(i)}
            selected={i === selectedIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
