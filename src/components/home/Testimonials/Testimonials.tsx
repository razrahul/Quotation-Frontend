import "./Testimonials.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import user1 from "../../../assets/images/user1.png";

type Testimonial = {
  id: number;
  image: string;
  message: string;
  name: string;
  designation: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: user1,
    message:
      "Creating quotations has become so easy and fast. This tool saves me time every single day.",
    name: "Rohit Sharma",
    designation: "Marketing Consultant",
  },
  {
    id: 2,
    image: user1,
    message:
      "Creating quotations has become so easy and fast. This tool saves me time every single day.",
    name: "Rohit Sharma",
    designation: "Marketing Consultant",
  },
  {
    id: 3,
    image: user1,
    message:
      "Creating quotations has become so easy and fast. This tool saves me time every single day.",
    name: "Rohit Sharma",
    designation: "Marketing Consultant",
  },
  {
    id: 4,
    image: user1,
    message:
      "Creating quotations has become so easy and fast. This tool saves me time every single day.",
    name: "Rohit Sharma",
    designation: "Marketing Consultant",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">
          Testimonials
          <span className="testimonials__underline" />
        </h2>

        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={32}
          navigation
          loop
          className="testimonials__swiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="testimonial-card">
                <img src={t.image} alt={t.name} />
                <p className="message">“{t.message}”</p>
                <h4>{t.name}</h4>
                <span>{t.designation}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
