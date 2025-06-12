import group from '/src/assets/group.webp';

export function IntroCard() {
  return (
    <div className="flex flex-col justify-center items-center text-center flex-shrink-0 min-w-[85%] h-full py-4 customers line-clamp-4 lg:min-h-200">
      <div>
        <img
          className="w-[10rem] lg:w-[13rem] place-self-center"
          src={group}
          alt="Group of customers"
        />
        <h2 className="text-white mt-2">Over 1 thousand</h2>
        <span className="text-white text-center text-[0.8rem] lg:text-[1.2rem]">
          Happy Customers
        </span>
      </div>
    </div>
  );
}
