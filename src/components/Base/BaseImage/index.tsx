import React from "react";
import Image, { StaticImageData } from "next/image";

interface BaseImageInterface
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string | StaticImageData;
  alt: string;
  fill?: boolean;
  placeholder?: "empty" | "blur";
  priority?: boolean;
  blurDataURL?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function BaseImage({
  src,
  alt,
  fill = false,
  placeholder = "empty",
  priority = true,
  blurDataURL = "",
  width,
  height,
  className,
  ...rest
}: BaseImageInterface) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      priority={priority}
      width={width}
      height={height}
      className={className}
      {...rest}
    />
  );
}