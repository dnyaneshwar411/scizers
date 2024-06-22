import Nav from "./nav";

const afterClasses = "relative after:content-['.'] after:text-transparent after:bg-[#17ABFF] after:absolute after:h-full after:w-10px after:left-0 after:top-0";
export default function Hero() {
  return (
    <div
      className="pad-container min-h-screen text-white pt-[50px] relative"
      style={{ backgroundImage: `url("hero.jpg")` }}
    >
    <div className="bg-[#0000007e] absolute inset-0"></div>
      <Nav />
      <div className="lg:mt-[128px] lg:flex justify-between relative z-10">
        <div className="mb-[28px] lg:mb-0">
          <h1 className="text-[36px] lg:text-[48px] max-w-[14ch] uppercase">Harbour Lights de <span className="text-[#17ABFF]">GRESOGONO</span></h1>
          <div className="font-poppins">
            <p className="text-[24px] font-semibold mt-5 max-w-[32ch]">1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City</p>
            <div className={`text-[14px] bg-[#00000042] mt-[45px] py-[11px] px-[15px] ${afterClasses}`}>
              Rental Returns of <span className="font-semibold">UPTO 11%**</span>
            </div>
            <div className={`text-[14px] bg-[#00000042] mt-[10px] py-[11px] px-[15px] ${afterClasses}`}>
              Capital Appreciation of <span className="font-semibold">UPTO 32%**</span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[350px] bg-[#5790BE1F] backdrop-blur-[50px] pt-[33px] rounded-[14px] overflow-clip">
          <div className="px-[27px]">
            <p className="text-[13px] tracking-[3px]">PRICING STARTS FROM</p>
            <h1 className="mt-[10px]">$ 425,000</h1>
            <h2 className="mt-[16px]">AED 1.3 Million</h2>
            <button className="bg-[#17ABFF] w-full text-center py-[14px] mt-[30px] rounded-[5px]">GET A PRESENTATION</button>
          </div>
          <div className="bg-[#5790BE1F] mt-[30px] px-[20px] py-[12px]">
            Get an Expert’s Presentation of Real Estate in Dubai for Life and investment
          </div>
        </div>
      </div>
    </div>
  )
};