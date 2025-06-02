import group from "/src/assets/group.webp";

export function IntroCard() {
  return (
    <div className="flex flex-col justify-center items-center text-center flex-shrink-0 min-w-[85%] min-h-55 py-4 customers line-clamp-4 lg:min-h-200">
      <div>
        <img
          className="w-[10rem] place-self-center"
          src={group}
          alt="Group of customers"
        />
        <h2 className="text-white mt-2">Over 10 thousand</h2>
        <span className="text-white text-center text-[0.8rem]">
          Happy Customers
        </span>
      </div>
    </div>
  );
}
