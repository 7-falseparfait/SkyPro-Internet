export function AreaList({ areas }) {
  return (
    <section className="mx-3">
      <h4 className="text-[#090909] px-4 text-[1.26rem] border-b-[1px] rounded-tl-[0.4rem] rounded-tr-[0.4rem] border-gray-200 font-extrabold py-[0.6rem] bg-[#F7F8F9]">
        Abuja
      </h4>
      <ul>
        {areas.map((area, i) => (
          <li key={i}>
            <h5
              className={`text-[1rem] font-bold text-[#212121] py-2 px-4 bg-[#F7F8F9] ${
                i !== 0 ? 'mt-6' : ''
              }`}
              style={{
                boxShadow: '0 0.3px 0 0 #e5e7eb',
              }}
            >
              {area.area.toUpperCase()}
            </h5>
            <ul className="space-y-2">
              {area.areas.map((name, idx) => (
                <li
                  key={idx}
                  className="text-[0.98rem] text-[#121212] px-4 pt-3"
                  style={{
                    boxShadow: '0 0.3px 0 0 #e5e7eb',
                  }}
                >
                  {name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
