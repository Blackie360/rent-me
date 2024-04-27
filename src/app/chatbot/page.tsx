'use client';
import React, { useState } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = "AIzaSyAKdCnnVK4JuRDkiO5hcY2j9cqEBZdw2Es";

export default function GenerativeAIPage() {
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 1,
      topK: 0,
      topP: 0.95,
      maxOutputTokens: 8192,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const parts = [{ text: `input: ${inputText}` }];

    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
      safetySettings,
    });

    const response = result.response;
    setGeneratedText(response.text());
   
  }
  return (
    <div className={`min-h-screen py-6 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <h1 className="text-2xl font-bold mb-4">pata keja AI</h1>
      <label className="block mb-2">
        <input
          type="checkbox"
          className="mr-2"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        Enable Dark Mode
      </label>
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="block mb-2">
          Enter your input text:
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="mt-1 block w-full border-gray-300 bg-white rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          Generate
        </button>
      </form>
      <h2 className="text-lg font-semibold mb-2">Generated Text:</h2>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-end">
          <p className="bg-blue-500 text-white p-2 rounded-lg max-w-xs break-all">{generatedText}</p>
        </div>
        {/* Add more chat bubbles for additional messages if needed */}
      </div>
    </div>
  );
}  