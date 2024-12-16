export default function Home() {
  return (
    <div
      className="min-h-screen flex justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/bg-homepage.png')", // Update with your image path
      }}
    >
      <div className="w-full max-w-[1200px] px-6">
        {/* Header */}
        <header className="flex mt-10 justify-between items-center px-6 py-4 bg-[rgba(20,20,20,0.71)] border border-[#454545] rounded-[20px] mx-auto">
          <div className="text-2xl font-bold">
            Cardio<span className="text-red-600">Ranker</span>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#" className="hover:underline text-white">
              Products
            </a>
            <a href="#" className="hover:underline text-white">
              Use Case
            </a>
            <a href="#" className="hover:underline text-white">
              About Us
            </a>
            <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300">
              Login
            </button>
          </nav>
        </header>

        {/* Main Section */}
        <main className="flex flex-col items-center justify-center h-screen  text-center">
        <h1
  className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b"
  style={{
    backgroundImage: "linear-gradient(to bottom, rgba(102, 102, 102, 1), rgba(255, 255, 255, 1))",
  }}
>
  Analyze Your ECG Instantly
</h1>

          <p className="text-lg md:text-xl mb-8">
            Upload your ECG image, crop it, and let our AI-powered tool analyze
            your heartbeat. Get a detailed report with a heart rating out of 10
            and take charge of your heart health today.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-300">
              Get Started
            </button>
            <button className="text-white border border-white px-6 py-3 rounded-md font-medium hover:bg-gray-700">
              Read Documentation
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
