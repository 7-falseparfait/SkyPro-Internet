export function ServeCard({ title, description, className = '', img }) {
  return (
    <div className={` p-3 ${className} border-[0.5px] border-gray-200 rounded-[0.5rem] `}>
      <div className=" h-[16rem] md:h-[23rem]">
        <img className="object-cover w-full rounded-[0.3rem] h-full" src={img} alt={img} />
      </div>
      <div>
        <h2 className="mt-4 text-blackText text-2xl text-left text-[1.23rem]">{title}</h2>
        <p className="leading-[120px]">{description}</p>
      </div>
    </div>
  );
}
