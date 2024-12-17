"use client";
import React, { useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import BaseImage from "@/components/Base/BaseImage";
import { twMerge } from "tailwind-merge";

interface Props {
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  className?: string;
  prefixIcon?: string | StaticImageData;
  required?: boolean;
  type?: string;
  initialValue?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  placeholder,
  labelClassName,
  className,
  prefixIcon,
  required = false,
  type = "text",
  initialValue = "",
  value = "",
  disabled = false,
  onChange,
}: Props) {
  const [inputValue, setInputValue] = useState(initialValue);

  useEffect(() => {
    setInputValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange?.(event);
  };

  return (
    <div className="relative w-full">
      {label && (
        <label
          className={twMerge(
            "block text-[1.2rem] whitespace-nowrap text-ellipsis font-medium mb-2",
            required && "after:content-['*'] after:text-red-500 after:ml-1",
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      {prefixIcon && (
        <BaseImage
          src={prefixIcon}
          alt="icon"
          width={24}
          height={24}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        />
      )}
      <input
        type={type}
        value={inputValue}
        onChange={handleChange}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        className={twMerge(
          "block w-full px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary",
          prefixIcon ? "pl-10" : "",
          className
        )}
      />
    </div>
  );
}
