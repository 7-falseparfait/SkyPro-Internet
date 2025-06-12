import { Tags } from './Tags';
import star from '../assets/star.png';
import homeImg from '../assets/homes.webp';
import bussinessImg from '../assets/business.webp';
import { ServeCard } from './ServeCard';
const solutions = [
  {
    title: 'For Homes',
    description:
      'Experience ultra-fast, reliable internet for streaming, gaming, online learning, and connecting with loved ones. Keep every device in your home connected seamlessly with SkyPro Internet.',
    img: homeImg,
  },
  {
    title: 'For Businesses',
    description:
      'Empower your operations with dedicated business internet solutions designed for productivity, collaboration, and growth. From startups to enterprises, SkyPro Internet keeps your business online.',
    img: bussinessImg,
  },
];
export function Serve() {
  return (
    <section className="py-4 mt-10">
      <div className="lg:max-w-[1440px] mx-auto container-padding">
        <Tags
          className="mx-auto"
          icon={
            <img src={star} className="w-4 h-4 flex items-center justify-center" alt="star icon" />
          }
        >
          {' '}
          Who we serve
        </Tags>
        <div className="text-center section-spacing">
          <h2 className="mt-6 text-blackText text-2xl">
            Tailored Internet Solutions for Every User
          </h2>
          <p className="mt-3 mx-auto text-center">
            Whether for work, learning, entertainment, or staying in touch, SkyPro Internet provides
            the seamless internet experience you need, wherever you are.
          </p>
        </div>
        <div className="flex flex-col gap-7 lg:flex lg:flex-row lg:justify-between">
          {solutions.map((solution, i) => (
            <ServeCard key={i} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
