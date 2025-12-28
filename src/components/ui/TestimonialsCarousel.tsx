'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Quote, Star, MapPin } from 'lucide-react';
import type { Testimonial } from '@/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="pb-14"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-neutral-100 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <Quote className="w-10 h-10 text-accent-500 opacity-50" />
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent-500 text-accent-500"
                  />
                ))}
              </div>
            </div>

            <p className="text-neutral-700 mb-6 flex-grow leading-relaxed">
              &ldquo;{testimonial.text}&rdquo;
            </p>

            <div className="border-t border-neutral-100 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="font-heading font-bold text-primary-800">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <MapPin className="w-3 h-3" />
                    <span>{testimonial.location}</span>
                    <span>•</span>
                    <span className="text-accent-600">
                      {testimonial.caseType}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

