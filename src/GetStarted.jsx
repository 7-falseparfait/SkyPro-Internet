import { Button } from "./Button";

export function GetStarted() {
  return (
    <section className="get-started pb-7 section-spacing container-padding mt-10">
      <div className="text-center">
        <h3 className="mt-6 text-white text-[2rem] leading-[120%]">
          Get Started with{" "}
          <span className="font-[800] leading-snug">SkyPro</span> Today
        </h3>
        <p className="mt-3 text-getStartedText">
          Join thousands of satisfied customers across Nigeria today.
        </p>
      </div>
      <div className="place-self-center mt-6">
        {" "}
        <Button className="font-[500]" variant="subscribe">
          Subscribe Now
        </Button>
      </div>
    </section>
  );
}
