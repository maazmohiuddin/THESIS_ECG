"use client";

import { useState } from "react";

export default function UploadPage() {
//   const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [uploadProgress, setUploadProgress] = useState(0);
//   const [imagePreview, setImagePreview] = useState(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
      simulateUpload(file);
    }
  };
  
  const simulateUpload = (file: File) => {
    const fileSize = file.size;
    const chunkSize = fileSize / 10; // Simulating upload progress in 10 steps
    let uploaded = 0;
  
    const interval = setInterval(() => {
      uploaded += chunkSize;
      setUploadProgress(Math.min((uploaded / fileSize) * 100, 100));
      if (uploaded >= fileSize) {
        clearInterval(interval);
      }
    }, 300); // Progress updates every 300ms
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-black to-[#660000] text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-black">
        <div className="text-2xl font-bold">
          Cardio<span className="text-red-600">Ranker</span>
        </div>
        <nav className="space-x-6">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Products
          </a>
          <a href="#" className="hover:underline">
            Use Case
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300">
            Login
          </button>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex flex-wrap items-center justify-center gap-8 px-6 py-16">
        {/* Upload Section */}
        <div className="bg-black p-8 rounded-lg shadow-md flex-1 max-w-md">
          <h2 className="text-2xl font-bold mb-2">Upload Image</h2>
          <p className="text-gray-400 text-sm mb-6">
            Select ECG image you want to analyze
          </p>
          <div
            className={`border-2 ${
              imagePreview ? "border-green-600" : "border-gray-500"
            } border-dashed p-6 rounded-lg text-center`}
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Selected ECG"
                className="w-full h-40 object-contain"
              />
            ) : (
              <label
                htmlFor="file-upload"
                className="block cursor-pointer text-gray-400"
              >
                <span>Choose a file or drag & drop it here</span>
                <br />
                <small>JPEG, PNG up to 50MB</small>
              </label>
            )}
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileChange}
              accept="image/jpeg, image/png"
            />
          </div>
          {selectedFile && (
            <div className="mt-4">
              <div className="text-gray-400 mb-2 flex justify-between">
                <span>{selectedFile.name}</span>
                <span>{Math.round(selectedFile.size / 1024)} KB</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-lg overflow-hidden">
                <div
                  className="bg-red-600 h-full"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-sm mt-2">
                {uploadProgress === 100
                  ? "Upload complete!"
                  : `Uploading... ${Math.round(uploadProgress)}%`}
              </p>
            </div>
          )}
          <div className="mt-6 flex justify-between">
            <button
              className={`bg-white text-black px-6 py-2 rounded-md hover:bg-gray-300 ${
                !selectedFile ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!selectedFile}
            >
              Process
            </button>
            <button
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-800"
              onClick={() => {
                setSelectedFile(null);
                setUploadProgress(0);
                setImagePreview(null);
              }}
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Processing Section */}
        <div className="bg-black p-8 rounded-lg shadow-md flex-1 max-w-md text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-red-600 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11m-2-7l-3 9 3 9m4-9h6"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Processing...</h2>
        </div>
      </main>
    </div>
  );
}
