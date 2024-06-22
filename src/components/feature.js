import Icon from "./Icon";

export default function Feature({feature}) {
 return (
    <div className={`${feature.id === 1 || feature.id === 4 ? "hidden lg:block" : ""} lg:w-auto text-[#00357B] text-center`}>
      <Icon
        src={feature.image}
        styles="h-12 w-12 block mx-auto mb-4"
      />
      <span className="text-[12px] lg:text-[16px] font-poppins">{feature.title}</span>
      <h3 className="font-bold text-[24px] lg:text-[30px] mt-2">{feature.feature}</h3>
    </div>
  )
}