import facebook from '/src/assets/Facebooklogo.png';
import google from '/src/assets/googlelogo.png';
import payStack from '/src/assets/paystacklogo.png';

export function Partners() {
  return (
    <section className="py-4 mt-6 border-t-1 border-b-1 border-t-gray-border border-b-gray-border pb-7 mb-10">
      <div className="lg:max-w-[1440px] mx-auto container-padding">
        <p className="text-center text-blackText text-sm font-medium">Our Partners</p>
        <div className="flex lg:gap-20 gap-10 items-center container-padding pt-6 place-content-center ">
          <div className="lg:w-[12%] w-[23%]">
            <img src={google} alt="" />
          </div>
          <div className=" lg:w-[20%] w-[33%]">
            <img src={payStack} alt="" />
          </div>
          <div className="lg:w-[17%] w-[25%] ">
            <img src={facebook} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
