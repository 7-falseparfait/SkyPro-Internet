import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components/Modal";
import { StepList } from "../components/StepList";
import { steps } from "../data/steps";
import { HeroHeading } from "../components/HeroHeading";
import { Tags } from "../components/Tags";
import star from "../assets/star.png";
import arrow from "../assets/arrow.png";
import mobileIcon from "../assets/phoneIcon.png";
import signalIcon from "../assets/signalIcon.png";
import laptopIcon from "../assets/laptopIcon.png";
import webIcon from "../assets/web.png";
import mediaIcon from "../assets/multimedia.png";
import gameIcon from "../assets/gameIcon.png";
import homeIcon from "../assets/homeIcon.png";
import contactIcon from "../assets/contactIcon.png";
import speedIcon from "../assets/speedIcon.png";
import wifiIcon from "../assets/wifiIcon.png";

export function Hero() {
  const navigate = useNavigate();
  const [showModal, setModal] = useState(false);
  const [animateIcons, setAnimateIcons] = useState(false);

  useEffect(() => {
    setAnimateIcons(true);
  }, []);

  // Reusable styles
  const baseIconClass = `w-13 absolute transition-all duration-800 ease-out hidden md:hidden lg:block`;

  return (
    <section className="py-3 text-center section-spacing container-padding lg:py-23 lg:place-self-center lg:relative max-w-[1500px] mx-auto">
      <Tags
        className="w-fit mx-auto px-2 mb-6"
        icon={
          <img
            src={star}
            className="w-4 h-4 flex items-center justify-center"
            alt="star icon"
          />
        }
      >
        Trusted By 10,000+ Customers{" "}
        <img className="w-4 h-4" src={arrow} alt="arrow-icon" />
      </Tags>

      <HeroHeading />

      <p className="font-normal mt-2 lg:py-5">
        Enjoy unlimited, high-speed wireless internet with seamless
        <span className="hidden lg:inline">
          <br />
        </span>
        coverage across Nigeria — no cables, no hassle.
      </p>

      <div className="mt-6 flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:mb-6">
        <Button className="lg:w-[17rem]" onClick={() => navigate("/pricing")}>
          Get Started
        </Button>
        <Button
          className="lg:w-[17rem]"
          onClick={() => setModal(true)}
          variant="secondary"
        >
          Learn More
        </Button>
      </div>

      {/* Animated Icons */}
      <img
        className={`
          ${baseIconClass}
          ${animateIcons ? "bottom-[180px] opacity-100" : "bottom-0 opacity-0"}
          left-[380px]
        `}
        src={mobileIcon}
        alt=""
      />
      <img
        className={`
          ${baseIconClass}
          ${animateIcons ? "bottom-[220px] opacity-100" : "bottom-0 opacity-0"}
          left-[80px]
        `}
        src={signalIcon}
        alt=""
      />
      <img
        className={`
          ${baseIconClass}
          ${animateIcons ? "bottom-[290px] opacity-100" : "bottom-0 opacity-0"}
          left-[230px]
        `}
        src={laptopIcon}
        alt=""
      />
      <img
        className={`
          ${baseIconClass}
          ${animateIcons ? "bottom-[380px] opacity-100" : "bottom-0 opacity-0"}
          left-[0px]
        `}
        src={webIcon}
        alt=""
      />
      <img
        className={`
          ${baseIconClass}
          ${animateIcons ? "bottom-[440px] opacity-100" : "bottom-0 opacity-0"}
          left-[300px]
        `}
        src={mediaIcon}
        alt=""
      />
      {/* Right */}
      <img
        className={`
          ${baseIconClass}
          ${animateIcons ? "bottom-[180px] opacity-100" : "bottom-0 opacity-0"}
          right-[400px]
        `}
        src={wifiIcon}
        alt=""
      />
      <img
        className={`
          ${baseIconClass}
          ${animateIcons ? "bottom-[220px] opacity-100" : "bottom-0 opacity-0"}
          right-[80px]
        `}
        src={contactIcon}
        alt=""
      />
      <img
        className={`
          ${baseIconClass}
          ${animateIcons ? "bottom-[290px] opacity-100" : "bottom-0 opacity-0"}
          right-[230px]
        `}
        src={gameIcon}
        alt=""
      />
      <img
        className={`
          ${baseIconClass}
          ${animateIcons ? "bottom-[380px] opacity-100" : "bottom-0 opacity-0"}
          right-[0px]
        `}
        src={homeIcon}
        alt=""
      />
      <img
        className={`
          ${baseIconClass}
          ${animateIcons ? "bottom-[440px] opacity-100" : "bottom-0 opacity-0"}
          right-[290px]
        `}
        src={speedIcon}
        alt=""
      />
      {/* Modal */}
      <Modal className="mx-0" open={showModal} onClose={() => setModal(false)}>
        <h2 className="text-xl font-black mb-4 text-left text-very-black">
          GETTING STARTED WITH SKYPRO
        </h2>
        <StepList steps={steps} />
      </Modal>
    </section>
  );
}
