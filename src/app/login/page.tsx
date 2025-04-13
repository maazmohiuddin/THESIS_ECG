"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password, rememberMe });
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

      {/* Login Form Section */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-[#333333] mb-2">Welcome Back</h1>
            <p className="text-[#666666] mb-8">Sign in to your account to continue</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#FF4B4B] focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#333333] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#FF4B4B] focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-[#FF4B4B] focus:ring-[#FF4B4B] border-[#E0E0E0] rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-[#666666]">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-[#FF4B4B] hover:text-[#FF3333]">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF4B4B] text-white px-6 py-3 rounded-lg hover:bg-[#FF3333] transition-colors font-medium"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[#666666]">
                Don't have an account?{" "}
                <a href="#" className="text-[#FF4B4B] hover:text-[#FF3333]">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 