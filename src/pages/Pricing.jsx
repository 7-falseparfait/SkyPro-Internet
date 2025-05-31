import { Tags } from "/src/components/Tags";
import { PricingCard } from "/src/components/PricingCard";
import star from "/src/assets/star.png";
export function Pricing() {
  const pricingPlans = [
    {
      title: "Starter",
      speed: "You get up to 6Mbps of bandwidth.",
      price: 19500,
      features: [
        "Basic browsing",
        "Light HD video streaming",
        "Ultra-responsive.",
        "Up to 6Mbps of bandwidth.",
      ],
      description: "Perfect for keeping a small home connected.",
    },
    {
      title: "Standard",
      speed: "You get up to 10Mbps of bandwidth.",
      price: 22500,
      features: [
        "HD content on multiple devices",
        "4K content streaming",
        "Ultra-responsive",
        "Up to 10Mbps of bandwidth.",
      ],
      description: "Perfect for keeping larger families connected at once.",
      highlight: true,
    },
    {
      title: "Premium",
      speed: "You get up to 20Mbps of bandwidth.",
      price: 37500,
      features: [
        "HD & 4K streaming",
        "Downloading large files",
        "Online gaming",
        "Up to 20Mbps of bandwidth.",
      ],
      description: "Great for large households connected at once.",
    },
  ];
  return (
    <div className="section-spacing container-padding">
      <div>
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
          Pricing
        </Tags>
        <div className="text-center section-spacing container-padding">
          <h2 className="mt-6 text-blackText text-2xl">
            Trusted by Leading Companies
          </h2>
          <p className="mt-3 text-[1rem] mx-auto">
            Whether you're a small household or a large business, we have a plan
            that's right for you.
          </p>
        </div>
      </div>
      <section>
        {pricingPlans.map((plan, i) => (
          <PricingCard
            className={i === pricingPlans.length - 1 ? "mb-10" : ""}
            key={i}
            {...plan}
          />
        ))}
      </section>
    </div>
  );
}
