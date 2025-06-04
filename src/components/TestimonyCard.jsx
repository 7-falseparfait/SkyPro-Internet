import qoute from '/src/assets/qoute.svg';

export function TestimonyCard({ data, largeQuote = false }) {
  return (
    <div className="flex flex-col flex-shrink-0 py-4 px-4 border border-gray-300 rounded-[1rem] bg-white h-full w-full">
      <img
        className={`w-[50px] lg:w-[70px] mt-3 ${largeQuote ? 'lg:w-[130px]' : ''}`}
        src={qoute}
        alt="qoute"
      />
      <p
        className={`text-left flex-1  mt-3 text-testimonnialText text-[0.9rem] line-clamp-4 ${
          largeQuote ? '' : ''
        }`}
      >
        {data.message}
      </p>
      <p className="text-left font-semibold text-blackText text-[1rem]">{data.name}</p>
    </div>
  );
}
