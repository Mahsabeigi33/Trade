"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import 'keen-slider/keen-slider.min.css';

const Testimonial = ({ limit }) => {
  const { t } = useTranslation('common');
  const testimonials = t('testimonials.items', { returnObjects: true });

  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  const [sliderRef, slider] = useKeenSlider({
    slides: { perView: 3, spacing: 15 },
    breakpoints: {
      '(max-width: 768px)': { slides: { perView: 1 } },
      '(min-width: 769px) and (max-width: 1024px)': { slides: { perView: 2 } },
    },
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const handlePrev = () => {
    if (slider.current) {
      slider.current.prev();
      setCurrentSlide(slider.current.track.details.rel);
    }
  };

  const handleNext = () => {
    if (slider.current) {
      slider.current.next();
      setCurrentSlide(slider.current.track.details.rel);
    }
  };

  useEffect(() => {
    if (slider.current) {
      intervalRef.current = setInterval(() => {
        slider.current.next();
      }, 6000); // Change slide every 6 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slider]);

  return (
    <section className="py-24 bg-gray-900 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-sm text-gray-500 font-medium text-center block mb-2">TESTIMONIAL</span>
          <h2 className="text-4xl text-center font-bold text-white">What our happy users say!</h2>
        </div>
        <div ref={sliderRef} className="keen-slider">
          {displayedTestimonials.map((testimonial, i) => (
            <div key={i} className="keen-slider__slide group bg-gray-200 border border-gray-300 rounded-xl p-6 transition-all duration-500 hover:border-indigo-600 hover:shadow-sm">
              <blockquote>
                <div className="flex items-center mb-7 gap-2 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 18 17"
                      fill="currentColor"
                    >
                      <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-base text-gray-600 leading-6 pb-8 group-hover:text-gray-800">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-5 border-t border-gray-200 pt-5">
                  <img
                    className="rounded-full h-10 w-10"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div>
                    <h5 className="text-gray-900 font-medium mb-1">{testimonial.name}</h5>
                    <span className="text-sm leading-4 text-gray-500">{testimonial.position}</span>
                  </div>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-700 text-3xl text-amber-400 text-bold rounded p-3 z-10"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-700 text-3xl text-amber-400 text-bold rounded p-3 z-10"
        >
          &gt;
        </button>
      </div>
      {limit && (
        <Link
          href="/testimonials"
          className="relative top-[20px] bg-blue-600 text-white border-none py-2 px-8 text-lg font-bold rounded-lg hover:bg-gray-500 hover:text-black transition-colors"
        >
          {t('button.show_more')}
        </Link>
      )}
    </section>
  );
};

export default Testimonial;
