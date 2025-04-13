"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
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
    const chunkSize = fileSize / 10;
    let uploaded = 0;
  
    const interval = setInterval(() => {
      uploaded += chunkSize;
      setUploadProgress(Math.min((uploaded / fileSize) * 100, 100));
      if (uploaded >= fileSize) {
        clearInterval(interval);
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#333333]">
            Cardio<span className="text-[#FF4B4B]">Ranker</span>
          </div>
          <Navigation />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#333333] mb-2">Upload ECG Image</h1>
          <p className="text-[#666666] mb-8">Select and upload your ECG image for analysis</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div className="space-y-6">
              <div className={`border-2 ${imagePreview ? "border-[#4CAF50]" : "border-[#E0E0E0]"} border-dashed rounded-xl p-8 text-center transition-colors`}>
                {imagePreview ? (
                  <div className="space-y-4">
                    <img
                      src={imagePreview}
                      alt="Selected ECG"
                      className="w-full h-48 object-contain rounded-lg"
                    />
                    <div className="text-[#666666] text-sm">
                      {selectedFile?.name} • {Math.round(selectedFile?.size! / 1024)} KB
                    </div>
                  </div>
                ) : (
                  <label
                    htmlFor="file-upload"
                    className="block cursor-pointer space-y-4"
                  >
                    <div className="bg-[#F5F5F5] p-6 rounded-lg inline-block">
                      <svg className="w-12 h-12 mx-auto text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[#333333] font-medium">Drag & drop your file here</p>
                      <p className="text-[#666666] text-sm">or click to browse</p>
                    </div>
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
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#666666]">Upload Progress</span>
                    <span className="text-[#333333] font-medium">{Math.round(uploadProgress)}%</span>
                  </div>
                  <div className="w-full bg-[#F5F5F5] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#4CAF50] h-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="flex gap-4 pt-4">
                <button
                  className={`flex-1 bg-[#FF4B4B] text-white px-6 py-3 rounded-lg hover:bg-[#FF3333] transition-colors ${
                    !selectedFile ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={!selectedFile}
                >
                  Process Image
                </button>
                <button
                  className="flex-1 bg-white text-[#666666] px-6 py-3 rounded-lg border border-[#E0E0E0] hover:bg-[#F5F5F5] transition-colors"
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
            <div className="bg-[#F5F5F5] rounded-xl p-8 flex flex-col items-center justify-center">
              <div className="bg-white p-6 rounded-full mb-6">
                <svg className="w-12 h-12 text-[#FF4B4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#333333] mb-2">Processing ECG</h2>
              <p className="text-[#666666] text-center">
                Your ECG image is being analyzed. This may take a few moments.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
