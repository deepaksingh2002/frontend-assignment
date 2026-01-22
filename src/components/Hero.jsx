import React from 'react'
import heroImg from '../assets/hero-muit-noida.webp';
const Hero = () => {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center max-w-[800px] px-4">
        <h1 className="text-[60px] font-semibold max-[850px]:text-[40px] max-[650px]:text-[30px] max-[650px]:max-w-[400px] mx-auto">
          We Ensure better education for a better world
        </h1>

        <p className="max-w-[700px] mx-auto mt-2 mb-5 leading-relaxed max-[650px]:text-[14px] max-[650px]:mt-4 max-[650px]:mb-7">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>

       <button
            onClick={() =>
                window.open(
                'https://muitnoida.edu.in/about-the-university',
                '_blank'
                )
            }
            className="group mx-auto flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 "
            >
            Explore more
            <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
                />
            </svg>
        </button>

      </div>
    </div>
  )
}

export default Hero
