import qoute from "/src/assets/qoute.svg";

export function TestimonyCard({ data }) {
  return (
    <div className="flex flex-col flex-shrink-0 py-4 px-4 border border-gray-300 rounded-[1rem] bg-white h-full w-full">
      <img className="w-[50px]" src={qoute} alt="qoute" />
      <p className="text-left flex-1 text-testimonnialText text-[0.9rem] line-clamp-4 mt-3 ">
        {data.message}
      </p>
      <p className="text-left font-semibold text-blackText text-[1rem]">
        {data.name}
      </p>
    </div>
  );
}
