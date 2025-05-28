import { Button } from "./Button";

export function Hero() {
  return (
    <section className=" py-3 text-center section-spacing container-padding">
      <h1 className="uppercase leading-snug text-center mt-2">
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
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More </Button>
      </div>
    </section>
  );
}
