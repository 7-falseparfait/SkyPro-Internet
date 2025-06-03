import star from '/src/assets/star.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IntroCard } from './IntroCard';
import { TestimonyCard } from './TestimonyCard';
import { Tags } from './Tags';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
export function Testimonials() {
  const testimonies = [
    {
      name: 'Omotayo',
      message:
        "I installed the fiber optics internet in my home and I've been using it without any problem. Kudos!",
    },
    {
      name: 'Eve',
      message:
        "I personally commend Skypro Internet for their good service. I've been using the Basic plan for almost a year in my home at Life Camp, Abuja without any issue.",
    },
    {
      name: 'Solomon',
      message: 'Very good internet i must say. 100% recommended.',
    },
    {
      name: 'Tobi',
      message:
        'I installed the radio internet in my home at Brains & Hammers City, Abuja. Service is top notch and truly unlimited.',
    },
    {
      name: 'Nonye',
      message: 'Good internet i use in my home in Abuja. ',
    },
  ];

  const fullList = [
    { type: 'intro', id: 'intro' },
    ...testimonies.map((item, i) => ({
      ...item,
      type: 'testimonial',
      id: `testimonial-${i}`,
    })),
  ];

  return (
    <div>
      <section className="mb-3 lg:max-w-[1440px] lg:mx-auto lg:px-10">
        <Tags
          className="mx-auto"
          icon={
            <img src={star} className="w-4 h-4 flex items-center justify-center" alt="star icon" />
          }
        >
          Testimonials
        </Tags>
        <div className="text-center section-spacing">
          <h2 className="mt-6 text-blackText text-2xl">Trusted by Leading Companies</h2>
          <p className="mt-3 mx-auto text-center">
            Hear from our satisfied customers who have transformed their businesses with SkyPro.
          </p>
        </div>

        <div className="py-3 lg:hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            spaceBetween={25}
            slidesPerView={1.4}
            loop={true}
            centeredSlides={true}
            className="w-full h-[14rem]"
          >
            {fullList.map((item, index) => (
              <SwiperSlide key={item.id + index} className="h-full flex items-stretch">
                {item.type === 'intro' ? <IntroCard /> : <TestimonyCard data={item} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden lg:grid grid-cols-3 grid-rows-3 gap-6 pb-65">
          <div className="row-span-3">
            <IntroCard />
          </div>
          <div className="row-start-1 col-start-2">
            <TestimonyCard data={fullList[1]} />
          </div>
          <div className="row-start-2 col-start-2">
            <TestimonyCard data={fullList[2]} />
          </div>
          <div className="row-start-3 col-start-2">
            <TestimonyCard data={fullList[3]} />
          </div>
          <div className="row-span-3 col-start-3 flex flex-col h-full">
            <div className="flex-1 flex">
              <TestimonyCard data={fullList[4]} />
            </div>
            <div className="flex-1 flex mt-6">
              <TestimonyCard data={fullList[5]} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
