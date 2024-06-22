import Icon from "./Icon";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between mb-8 relative z-10">
      <Icon src="logo.svg" />
      <button className="text-[#17ABFF] text-center max-w-48 w-full py-[14px] border-2 border-[#17ABFF] rounded-[4px]">ENQUIRE NOW</button>
    </nav>
  )
};