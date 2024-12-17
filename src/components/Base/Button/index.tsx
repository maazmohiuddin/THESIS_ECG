import React from "react";
import { StaticImageData } from "next/image";
import BaseImage from "@/components/Base/BaseImage";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  onClick?: () => void;
  className?: string;
  isPrimary?: boolean;
  prefixIcon?: string | StaticImageData;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;

}

export default function Button({
  title,
  onClick,
  className,
  isPrimary,
  prefixIcon,
  disabled = false,
  type = "submit",
}: Props) {
  return (
    <button
    disabled={disabled}
      type={type}
      className={twMerge(
        "font-medium flex justify-center items-center rounded-lg h-fit text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer",
        isPrimary
          ? "text-accent bg-primary hover:bg-blue-800 border border-solid border-blue-700"
          : "text-primary bg-transparent border border-solid border-primary hover:bg-blue-100",
        className
      )}
      onClick={onClick}
    >
      {prefixIcon && (
        <BaseImage
          src={prefixIcon}
          alt="icon"
          width={20}
          height={20}
          className="mr-2"
        />
      )}
      {title}
    </button>
  );
}
