"use client";
import React, { useState } from "react";
import Heading from "../Base/Heading";
import BaseImage from "../Base/BaseImage";


interface UploadImageleftProps {
    processNext: () => void;
    cancelFn: () => void;
}

const UploadImageleft: React.FC<UploadImageleftProps> = ({ processNext, cancelFn }) => {
    const [file, setFile] = useState<File | null>(null);
    const [progress, setProgress] = useState(50);
    const [preview, setPreview] = useState<string | undefined>(undefined);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            setProgress(60);
            const imageUrl = URL.createObjectURL(uploadedFile);
            setPreview(imageUrl);
        }
    };
    const handleRemove = () => {
        setFile(null);
        setPreview(undefined);
        setProgress(0);
    };

    return (
        <div className="flex flex-col h-full">
            <div
                style={{
                    backgroundImage: `url(images/processbg.png)`,
                    objectFit: 'contain',
                }}
                className="border border-gray-50 mt-10 p-5 rounded-xl shadow-lg flex-1"
            >
                <div className="w-full border-b border-gray-300 pb-4 pl-0 pr-0">
                    <div className="flex items-center align-middle gap-2">
                        <div>
                            <BaseImage
                                src='/images/uploadicon.png'
                                height={10}
                                width={50}
                                alt="Upload Image"
                            />
                        </div>
                        <div className="space-y-0 gap-0">
                            <Heading level={5} className="whitespace-normal text-white text-lg font-medium mb-2">Upload Image</Heading>
                            <p className="text-gray-400 text-sm mb-4">Select ECG image you want analyze</p>
                        </div>
                    </div>
                </div>
                <div className="w-full border-gray-300"></div>
                {!file ? (
                    <div className="flex flex-col gap-3 justify-center items-center mt-4 border-2 border-dashed border-[#FFFFFF] rounded-lg p-10 text-center mb-5">
                        <BaseImage
                            src='/images/upload.png'
                            height={10}
                            width={50}
                            alt="Upload Image"
                        />
                        <p className="text-gray-300 text-sm mb-2">
                            Choose and file or drag & drop it here
                        </p>
                        <p className="text-gray-500 text-xs">JPEG, PNG upto 50mb</p>
                        <input
                            type="file"
                            className="hidden"
                            id="fileUpload"
                            onChange={handleFileChange}
                            accept="image/jpeg, image/png"
                        />
                        <label
                            htmlFor="fileUpload"
                            className="inline-block mt-4 px-8 py-1.5 bg-whitebutton text-black rounded-lg cursor-pointer"
                        >
                            Browse
                        </label>
                    </div>
                ) : (
                    <div className="flex justify-center mt-4 mb-4 border-2 border-dashed border-[#FFFFFF] rounded-lg p-10 ">
                        <img
                            src={preview} // Now preview is a string or undefined, no error
                            alt="Uploaded Preview"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                )}

                {file && (
                    <div className="flex items-center justify-between bg-gray-800 rounded-lg p-3 mb-4">
                        <div className="flex items-center space-x-3">
                            <svg
                                className="w-6 h-6 text-gray-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 4v16h16V4H4zm3 6h10M7 14h5m-5 4h7"
                                />
                            </svg>
                            <div>
                                <p className="text-gray-200 text-sm">{file.name}</p>
                                <p className="text-gray-400 text-xs">{progress} kb of 120 kb</p>
                            </div>
                        </div>
                        <div className="flex-1 h-1 bg-gray-700 rounded overflow-hidden mx-3">
                            <div
                                className="h-full bg-gradient-to-r from-[#F54461] to-[#830016]"
                                style={{ width: '100%' }}
                            ></div>
                        </div>
                        <button
                            onClick={handleRemove}
                            className="text-gray-400 hover:text-red-400"
                        >
                            &#x2715;
                        </button>
                    </div>
                )}

                <div className="flex justify-end space-x-2">
                    <button className="px-5 py-1 bg-whitebutton text-black rounded-md" onClick={processNext}>
                        Process
                    </button>
                    <button className="px-5 py-1 bg-gradient-red text-white rounded-md" onClick={cancelFn}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UploadImageleft;
