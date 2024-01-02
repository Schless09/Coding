"use client";
import * as React from "react";

const IntroClient = () => {
  const handleTextIntro = () => {
    // Logic to initiate introduction via text
    alert("Initiating introduction via text...");
  };

  const handleEmailIntro = () => {
    // Logic to initiate introduction via email
    alert("Initiating introduction via email...");
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl mb-4 font-bold text-gray-900">
        Introduction to Client
      </h1>

      <p className="mb-8 text-gray-700">
        Choose how you want to introduce a client:
      </p>

      <div className="flex justify-center space-x-4">
        <button
          onClick={handleTextIntro}
          className="bg-green-500 text-white border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-lg text-lg font-semibold transition duration-300 ease-in-out"
        >
          Intro via Text
        </button>
        <button
          onClick={handleEmailIntro}
          className="bg-gray-200 text-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded-lg text-lg font-semibold ml-4 transition duration-300 ease-in-out"
        >
          Intro via Email
        </button>
      </div>
    </div>
  );
};

export default IntroClient;
