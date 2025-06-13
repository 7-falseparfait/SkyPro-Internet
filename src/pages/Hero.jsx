import { useState } from 'react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../components/Modal';
import { StepList } from '../components/StepList';
import { steps } from '../data/steps';
import { HeroHeading } from '../components/HeroHeading';
import heroBg from '../assets/hero-img.webp';
import modalImg from '/src/assets/InnerBG.webp';

export function Hero() {
  const navigate = useNavigate();
  const [showModal, setModal] = useState(false);

  return (
    <section
      className="py-18 text-center lg:py-43 lg:place-self-center lg:relative w-full bg-cover"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: '55% 80%',
        backgroundSize: window.innerWidth < 700 ? '240%' : '100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="lg:max-w-[1440px] lg:mx-auto relative container-padding">
        <HeroHeading />
        <p className="font-bold leading-[150%] mt-4 lg:py-5 text-white lg:text-left ">
          Enjoy unlimited, high-speed wireless internet with seamless
          <br className="hidden lg:inline" />
          coverage across Nigeria — No hassle.
        </p>
        <div className="mt-12 flex flex-col items-center gap-5 lg:flex-row lg:mb-6">
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
        <Modal className="mx-0" open={showModal} img={modalImg} onClose={() => setModal(false)}>
          <h2 className="text-xl font-black mb-4 text-left text-very-black">
            GETTING STARTED WITH SKYPRO
          </h2>
          <StepList steps={steps} />
        </Modal>
      </div>
    </section>
  );
}
