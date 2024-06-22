import Icon from "./Icon";

export default function Amenities({amenity}) {
  return (
    <div className="w-2/5 lg:w-auto bg-[#FCFCFC] text-center p-2 shadow-xl rounded-xl">
      <Icon
        src={amenity.image}
        styles="w-32 h-32 lg:w-48 lg:h-48 block mx-auto border-[10px] border-t-[#D9D9D98A] border-b-transparent rounded-[100px]"
      />
      <h3 className="text-[#00357B] w-full text-[14px] uppercase max-w-[16ch] mx-auto my-3">{amenity.title}</h3>
    </div>
  )
};