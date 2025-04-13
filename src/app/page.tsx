import Navigation from "@/components/Navigation";

export default function Home() {
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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] leading-tight">
              Analyze Your ECG with AI-Powered Precision
            </h1>
            <p className="text-lg text-[#666666] leading-relaxed">
              Upload your ECG image and get instant analysis with our advanced AI technology. 
              Receive detailed insights and a comprehensive heart health rating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/upload" 
                className="bg-[#FF4B4B] text-white px-8 py-4 rounded-lg hover:bg-[#FF3333] transition-colors text-center font-medium"
              >
                Get Started
              </a>
              <button className="bg-white text-[#666666] px-8 py-4 rounded-lg border border-[#E0E0E0] hover:bg-[#F5F5F5] transition-colors text-center font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Image/Illustration */}
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="aspect-w-16 aspect-h-9 bg-[#F5F5F5] rounded-xl flex items-center justify-center">
                <svg className="w-24 h-24 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#333333] text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#F5F5F5] p-6 rounded-xl">
              <div className="bg-white p-4 rounded-lg inline-block mb-4">
                <svg className="w-8 h-8 text-[#FF4B4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Instant Analysis</h3>
              <p className="text-[#666666]">Get immediate ECG analysis results with our advanced AI technology.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#F5F5F5] p-6 rounded-xl">
              <div className="bg-white p-4 rounded-lg inline-block mb-4">
                <svg className="w-8 h-8 text-[#FF4B4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">Accurate Results</h3>
              <p className="text-[#666666]">Receive precise heart health ratings and detailed insights.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#F5F5F5] p-6 rounded-xl">
              <div className="bg-white p-4 rounded-lg inline-block mb-4">
                <svg className="w-8 h-8 text-[#FF4B4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">24/7 Availability</h3>
              <p className="text-[#666666]">Access our ECG analysis service anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
