import React, { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface ChipData {
  key: number;
  label: string;
}

interface ChipInputProps {
  options: string[];
  label?: string;
  labelClassName?: string;
  className?: string;
  required?: boolean;
}

const ChipInput = ({ options, label, labelClassName, className, required }: ChipInputProps) => {
  const [chipData, setChipData] = useState<ChipData[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleSelectChange = (value: string) => {
    const isUnique = value && !chipData.find((chip) => chip.label === value);
    if (isUnique) {
      setChipData([...chipData, { key: Date.now(), label: value }]);
      setSelectedLanguage(value);
      setIsOpen(false);
    }
  };

  const handleDelete = (chipToDelete: ChipData) => {
    setChipData(chipData.filter((chip) => chip.key !== chipToDelete.key));
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
    <>
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
      <div className={twMerge("flex items-center gap-2 flex-wrap relative", className)}>
        <div className="relative" ref={dropdownRef}>
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="block w-full p-2 pr-10 border border-gray-300 rounded-lg text-gray-700 cursor-pointer"
          >
            {selectedLanguage || "Select a language"}
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <span className="inline-block w-2.5 h-2.5 border-b-2 border-r-2 border-gray-600 rotate-45" />
            </span>
          </div>
          {isOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectChange(option)}
                  className="p-2 hover:bg-primary hover:text-white cursor-pointer transition duration-200 ease-in-out"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        <ul className="flex flex-wrap m-0 p-0 list-none">
          {chipData.map((data) => (
            <li key={data.key} className="m-1">
              <div className="flex items-center bg-gray-200 rounded-full px-2 py-1">
                <span className="text-sm">{data.label}</span>
                <button
                  type="button"
                  className="ml-2 text-secondary"
                  onClick={() => handleDelete(data)}
                >
                  &times;
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ChipInput;
