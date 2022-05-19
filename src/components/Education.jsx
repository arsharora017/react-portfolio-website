import React from "react";
import "./education.css";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    eduLevel: "Bachelor of technology: Mechanical Engineering",
    institution: "Punjabi Univeristy, India",
  },
  {
    eduLevel: "Project Management Graduate Certificate",
    institution: "Algonquin College, Ottawa",
  },
  {
    eduLevel: "Energy Management Graduate Certificate",
    institution: "Algonquin College, Ottawa",
  },
];

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <Swiper
        className="container education__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ eduLevel, institution }, index) => {
          return (
            <SwiperSlide key={index} className="education">
              <h5>{eduLevel}</h5>
              <small className="education__institution">{institution}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Education;
