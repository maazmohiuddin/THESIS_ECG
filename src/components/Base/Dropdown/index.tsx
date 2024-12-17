import React, { useState, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

type Option = {
  label: string;
  value: string;
};

type Props = {
  label?: string;
  required?: boolean;
  labelClassName?: string;
  className?: string;
  options: string[];
  selectedOption: Option | null;
  placeholder?: string;
  setSelectedOption: (option: Option) => void;
};

const Dropdown: React.FC<Props> = ({
  label,
  required,
  labelClassName,
  className,
  placeholder,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
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
      <div className="relative inline-block w-full" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={twMerge(
            "w-full text-left px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary",
            className
          )}
        >
          {selectedOption ? selectedOption.label : placeholder || "Select an option"}
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <span className="inline-block w-2.5 h-2.5 border-b-2 border-r-2 border-gray-600 rotate-45" />
          </span>
        </button>
        {isOpen && (
          <ul className="absolute w-full z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto z-1">
            {options.map((optionLabel) => {
              const option = { label: optionLabel, value: optionLabel };
              return (
                <li
                  key={option.value}
                  onClick={() => handleOptionClick(option)}
                  className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white transition duration-200 ease-in-out"
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
