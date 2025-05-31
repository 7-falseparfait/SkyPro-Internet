import { useState } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components/Modal";

export function Hero() {
  const steps = [
    {
      id: 1,
      title: "Get Set Up with Our Hardware",
      description:
        "We’ll install our state-of-the-art internet device in your home or office — no extra hassle. Just schedule a time that works for you.",
    },
    {
      id: 2,
      title: "Choose a Plan That Fits You",
      description:
        "After installation, pick from a range of affordable monthly plans designed for your browsing, streaming, or business needs.",
    },
    {
      id: 3,
      title: "Enjoy Fast & Reliable Internet",
      description:
        "Once you’re connected, surf, stream, and work with confidence. Our coverage spans across Abuja and surrounding areas.",
    },
  ];
  const navigate = useNavigate();
  const [showModal, setModal] = useState(false);

  return (
    <section className=" py-3 text-center section-spacing container-padding">
      <h1 className="uppercase leading-snug text-center mt-2 text-blackText">
        <span className="whitespace-nowrap">
          <span className="text-primary">Fast</span>&nbsp;and&nbsp;
          <span className="text-primary">Reliable</span>
        </span>
        <br />
        Internet Service
        <br />
        Provider
      </h1>

      <p className="font-normal mt-2 text">
        Enjoy unlimited, high-speed wireless internet with seamless coverage
        across Nigeria — no cables, no hassle.
      </p>
      <div className="mt-6 flex flex-col gap-5">
        <Button onClick={() => navigate("/pricing")}>Get Started</Button>
        <Button onClick={() => setModal(true)} variant="secondary">
          Learn More
        </Button>
      </div>
      <Modal className="mx-0" open={showModal} onClose={() => setModal(false)}>
        <h2 className="text-xl font-bold mb-4 text-left">
          GETTING STARTED WITH SKYPRO
        </h2>
        <ol className="space-y-4 text-left">
          {steps.map((step) => (
            <li key={step.id}>
              <div className="font-bold">{step.title}</div>
              <div className="text-sm">{step.description}</div>
            </li>
          ))}
        </ol>
      </Modal>
    </section>
  );
}
