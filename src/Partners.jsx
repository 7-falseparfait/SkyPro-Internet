import facebook from "/src/assets/Facebooklogo.png";
import google from "/src/assets/googlelogo.png";
import payStack from "/src/assets/paystacklogo.png";

export function Partners() {
  return (
    <section className="py-4 mt-6 border-t-1 border-b-1 border-t-gray-border border-b-gray-border pb-7 mb-10">
      <p className="text-center text-blackText text-sm font-medium">
        Our Partners
      </p>
      <div className="flex justify-between items-center container-padding pt-6 ">
        <div className="w-[20%]">
          <img src={google} alt="" />
        </div>
        <div className="w-[33%]">
          <img src={payStack} alt="" />
        </div>
        <div className="w-[33%]">
          <img src={facebook} alt="" />
        </div>
      </div>
    </section>
  );
}
