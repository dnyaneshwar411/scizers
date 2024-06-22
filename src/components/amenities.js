import Amenity from "@/components/amenity";
import Icon from "./Icon";
import { amenities } from "@/utils/data";

export default function Amenities() {
  return (
    <div className="pad-container mt-14">
      <Icon
        src="/icon.svg"
        styles="w-40 h-20 !object-contain block mx-auto"
      />
      <div className="text-center my-6">
        <h2 className="font-bold text-[#00357B] text-[36px] uppercase">Features & Amenities</h2>
        <p className="font-poppins mt-3">Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.</p>
      </div>
      <div className="flex justify-evenly lg:justify-between flex-wrap lg:flex-nowrap gap-4">
        {amenities.map(amenity => <Amenity key={amenity.id} amenity={amenity} />)}
      </div>
      <p className="font-poppins text-[#686868] text-[10px] text-right my-9">*T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2</p>
      <div className="text-[13px] flex justify-end gap-4">
        <button className="w-40 text-white bg-[#00357B] rounded-md py-[14px]">EXTERIORS</button>
        <button className="w-40 text-[#00357B] rounded-md py-[14px] border-2 border-[#00357B]">INTERIORS</button>
      </div>
    </div>
  )
};