import { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../components/Modal';
import { StepList } from '../components/StepList';
import { steps } from '../data/steps';
import { HeroHeading } from '../components/HeroHeading';
import { Tags } from '../components/Tags';
import star from '../assets/star.png';
import arrow from '../assets/arrow.png';
import mobileIcon from '../assets/phoneIcon.png';
import signalIcon from '../assets/signalIcon.png';
import laptopIcon from '../assets/laptopIcon.png';
import webIcon from '../assets/web.png';
import mediaIcon from '../assets/multimedia.png';
import gameIcon from '../assets/gameIcon.png';
import homeIcon from '../assets/homeIcon.png';
import contactIcon from '../assets/contactIcon.png';
import speedIcon from '../assets/speedIcon.png';
import wifiIcon from '../assets/wifiIcon.png';
import heroBg from '../assets/hero-img.webp';

// ...existing imports...
export function Hero() {
  const navigate = useNavigate();
  const [showModal, setModal] = useState(false);
  const [animateIcons, setAnimateIcons] = useState(false);

  useEffect(() => {
    setAnimateIcons(true);
  }, []);

  const baseIconClass = `lg:w-11 xl:w-13 absolute transition-all duration-800 ease-out hidden lg:block`;

  return (
    <section
      className="py-18 text-center lg:py-18 lg:place-self-center lg:relative w-full bg-cover"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: '55% 80%',
        backgroundSize: window.innerWidth < 700 ? '240%' : '100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="lg:max-w-[1440px] lg:mx-auto relative container-padding">
        <Tags
          className="w-fit mx-auto px-2 mb-6 hidden lg:flex"
          icon={
            <img src={star} className="w-4 h-4 flex items-center justify-center" alt="star icon" />
          }
        >
          Trusted By 10,000+ Customers <img className="w-4 h-4" src={arrow} alt="arrow-icon" />
        </Tags>
        <HeroHeading />
        <p className="font-bold leading-[150%] mt-4 lg:py-5 text-white ">
          Enjoy unlimited, high-speed wireless internet with seamless coverage across Nigeria — no
          cables, no hassle.
        </p>
        <div className="mt-12 flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:mb-6">
          <Button
            className="lg:w-[17rem] bg-white font-[700] text-[1rem]"
            onClick={() => navigate('/pricing')}
          >
            Get Started
          </Button>
          <Button
            className="lg:w-[17rem] font-[700] text-[1rem]"
            onClick={() => setModal(true)}
            variant="secondary"
          >
            Learn More
          </Button>
        </div>
        {/* Left side icons */}
        <img
          className={`
    ${baseIconClass}
    ${animateIcons ? 'bottom-[30%] opacity-100' : 'bottom-0 opacity-0'}
    lg:left-[20%] xl:left-[25%] 
  `}
          src={mobileIcon}
          alt=""
        />
        <img
          className={`
    ${baseIconClass}
    ${animateIcons ? 'bottom-[34%] opacity-100' : 'bottom-0 opacity-0'}
    left-[8%] xl:left-[10%]
  `}
          src={signalIcon}
          alt=""
        />
        <img
          className={`
    ${baseIconClass}
    ${animateIcons ? 'bottom-[54%] opacity-100' : 'bottom-0 opacity-0'}
    left-[13%] xl:left-[18%]
  `}
          src={laptopIcon}
          alt=""
        />
        <img
          className={`
    ${baseIconClass}
    ${animateIcons ? 'bottom-[64%] opacity-100' : 'bottom-0 opacity-0'}
    lg:left-[5%] xl:left-[8%]
  `}
          src={webIcon}
          alt=""
        />
        <img
          className={`
    ${baseIconClass}
    ${animateIcons ? 'bottom-[85%] opacity-100' : 'bottom-0 opacity-0'}
    left-[14%] xl:left-[19%]
  `}
          src={mediaIcon}
          alt=""
        />

        {/* Right side icons */}
        <img
          className={`
    ${baseIconClass}
    ${animateIcons ? 'bottom-[30%] opacity-100' : 'bottom-0 opacity-0'}
    lg:right-[24%] xl:right-[25%]
  `}
          src={wifiIcon}
          alt=""
        />
        <img
          className={`
    ${baseIconClass}
    ${animateIcons ? 'bottom-[34%] opacity-100' : 'bottom-0 opacity-0'}
    right-[6%] xl:right-[10%]
  `}
          src={contactIcon}
          alt=""
        />
        <img
          className={`
    ${baseIconClass}
    ${animateIcons ? 'bottom-[54%] opacity-100' : 'bottom-0 opacity-0'}
    right-[12%] xl:right-[18%]
  `}
          src={gameIcon}
          alt=""
        />
        <img
          className={`
    ${baseIconClass}
    ${animateIcons ? 'bottom-[64%] opacity-100' : 'bottom-0 opacity-0'}
    lg:right-[3%] xl:right-[8%]
  `}
          src={homeIcon}
          alt=""
        />
        <img
          className={`
    ${baseIconClass}
    ${animateIcons ? 'bottom-[85%] opacity-100' : 'bottom-0 opacity-0'}
    right-[14%] xl:right-[19%]
  `}
          src={speedIcon}
          alt=""
        />
        <Modal className="mx-0" open={showModal} onClose={() => setModal(false)}>
          <h2 className="text-xl font-black mb-4 text-left text-very-black">
            GETTING STARTED WITH SKYPRO
          </h2>
          <StepList steps={steps} />
        </Modal>
      </div>
    </section>
  );
}
