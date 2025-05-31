import { Button } from "./Button";
import blueCheckDefault from "/src/assets/default-check.png";
import check from "/src/assets/white-check.png";

export function PricingCard({
  title,
  price,
  features,
  description,
  className = "",
  highlight = false,
  speed,
}) {
  // Choose icon based on highlight
  const checkIcon = highlight ? check : blueCheckDefault;

  return (
    <div
      className={` ${
        highlight ? "bg-primary text-white" : "bg-tagBg"
      }  px-10 mt-10 py-9 rounded-3xl ${className}`}
    >
      <h2
        className={`${highlight ? "text-white" : "text-blackText"} custom-h2`}
      >
        {title}
      </h2>
      <p className="text-[1.1rem] mt-3 text-center">{speed}</p>
      <div className="py-6">
        {/* `${highlight ? "text-white" : "text-blackText"} custom-h2`} */}
        <h1
          className={`${highlight ? "text-white" : "text-primary"} custom-h1`}
        >
          ₦{price.toLocaleString()}
        </h1>
        <p className="text-[1rem] text-center font-campton">/month</p>
      </div>
      <ul className="flex-1 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <img className="w-[1.4rem] mr-1.5" src={checkIcon} alt="" />{" "}
            {feature}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[1.1rem]">{description}</p>
      <div className="place-self-center w-full mb-2">
        <Button
          variant={highlight ? "subscribe" : "primary"}
          className="mt-7 border-1 border-primary w-full rounded-[110px]"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
}
