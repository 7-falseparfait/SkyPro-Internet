import { Button } from "./Button";

export function GetStarted() {
  return (
    <div className="lg:max-w-[1440px] mx-auto lg:relative">
      <section className="get-started pb-7 section-spacing container-padding mt-10 lg:py-15 lg:w-[90%] mx-auto lg:rounded-3xl lg:absolute lg:bottom-[-200px] lg:left-1/2 lg:translate-x-[-50%]">
        <div className="text-center">
          <h3 className="mt-6 text-white text-[2rem] leading-[120%]">
            Get Started with
            <br className="hidden lg:block" />
            <span className="font-[800] leading-snug"> SkyPro</span> Today
          </h3>

          <p className="mt-3 text-getStartedText">
            Join thousands of satisfied customers across Nigeria today.
          </p>
        </div>
        <div className="grid place-items-center mt-6">
          {" "}
          <Button className="font-[500]" variant="subscribe">
            Subscribe Now
          </Button>
        </div>
      </section>
    </div>
  );
}
