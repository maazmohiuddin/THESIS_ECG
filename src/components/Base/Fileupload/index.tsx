import * as React from "react";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface FileUploaderProps {
  handleFile: (file: File | File[] | null | undefined) => void;
  multiple?: boolean;
  accept?: string;
  label?: string;
  labelClassName?: string;
  className?: string;
  required?: boolean;
}

export default function FileUploader({
  handleFile,
  multiple = false,
  accept = "",
  label,
  labelClassName,
  required = false,
}: FileUploaderProps) {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [fileNames, setFileNames] = useState<string[]>([]);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setFileNames(fileArray.map((file) => file.name));
      handleFile(multiple ? fileArray : fileArray[0]);
    }
  };

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
      <div className="flex items-center border border-solid border-gray-300 rounded-lg px-1 py-1">
        <input
          type="text"
          value={fileNames.join(", ")}
          readOnly
          className="flex-grow bg-transparent outline-none"
          placeholder="No file selected"
        />
        <button
          onClick={handleClick}
          className="font-medium flex justify-center items-center rounded-lg text-xs md:text-base px-5 py-1 text-accent bg-primary hover:bg-blue-800 border border-solid border-blue-700 ml-2"
        >
          Upload File
        </button>
      </div>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
        multiple={multiple}
        accept={accept}
      />
    </>
  );
}
