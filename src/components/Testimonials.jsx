import star from "/src/assets/star.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { IntroCard } from "./IntroCard";
import { TestimonyCard } from "./TestimonyCard";
import { Tags } from "./Tags";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
export function Testimonials() {
  const testimonies = [
    {
      name: "Omotayo",
      message:
        "I installed the fiber optics internet in my home and I've been using it without any problem. Kudos!",
    },
    {
      name: "Eve",
      message:
        "I personally commend Skypro Internet for their good service. I've been using the Basic plan for almost a year in my home at Life Camp, Abuja without any issue.",
    },
    {
      name: "Solomon",
      message: "Very good internet i must say. 100% recommended.",
    },
    {
      name: "Tobi",
      message:
        "I installed the radio internet in my home at Brains & Hammers City, Abuja. Service is top notch and truly unlimited.",
    },
    {
      name: "Nonye",
      message: "Good internet i use in my home in Abuja. ",
    },
  ];

  const fullList = [
    { type: "intro", id: "intro" },
    ...testimonies.map((item, i) => ({
      ...item,
      type: "testimonial",
      id: `testimonial-${i}`,
    })),
  ];

  return (
    <section className="testimonials mb-3">
      <Tags
        className="mx-auto"
        icon={
          <img
            src={star}
            className="w-4 h-4 flex items-center justify-center"
            alt="star icon"
          />
        }
      >
        Testimonials
      </Tags>
      <div className="text-center section-spacing container-padding">
        <h2 className="mt-6 text-blackText text-2xl">
          Trusted by Leading Companies
        </h2>
        <p className="mt-3 text-[0.9rem] max-w-md mx-auto">
          Hear from our satisfied customers who have transformed their
          businesses with SkyPro.
        </p>
      </div>

      <div className="py-3">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          spaceBetween={25}
          slidesPerView={1.4}
          loop={true}
          centeredSlides={true}
          className="w-full"
        >
          <div className="flex">
            {fullList.map((item, index) => (
              <SwiperSlide key={item.id + index}>
                {item.type === "intro" ? (
                  <IntroCard />
                ) : (
                  <TestimonyCard data={item} />
                )}
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
}
