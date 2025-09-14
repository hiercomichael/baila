"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Event = {
  id: string;
  name: { text: string };
  url: string;
  logo?: { url: string };
};

export default function Carousel({ events }: { events: Event[] }) {
  return (
    <Swiper spaceBetween={20} slidesPerView={3}>
      {events.map((event) => (
        <SwiperSlide key={event.id}>
          <a href={event.url} target="_blank">
            <div className="card">
              {event.logo?.url && (
                <img src={event.logo.url} alt={event.name.text} />
              )}
              <div className="card-title">{event.name.text}</div>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}