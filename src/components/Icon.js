import Image from "next/image";

export default function Icon({ height, width, src, styles = "" }) {
  return (
    <Image
      alt="this is an image"
      height={height || 100}
      width={width || 100}
      src={src}
      className={`${styles} object-cover`}
    />
  )
}