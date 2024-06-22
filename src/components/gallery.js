import { galleryImages } from "@/utils/data"
import Icon from "./Icon"

export default function Gallery() {
  return (
    <div className="pad-container grid grid-cols-4 gap-2 lg:gap-4 mt-8 mb-20">
      {galleryImages.map(image => <Icon
        key={image.id}
        styles={`${image.id === 1 && "col-span-4"} max-h-96 w-full aspect-video rounded-md`}
        height={720}
        width={720}
        src={image.location}
      />)}
    </div>
  )
};