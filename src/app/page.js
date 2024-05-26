'use client';

import { useState, useEffect } from 'react';
import HtmlDisplay from '@/components/HtmlDisplay';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [generatedHtml, setGeneratedHtml] = useState('');
  const [generatedCss, setGeneratedCss] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    let timer;
    if (isLoading && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isLoading, countdown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCountdown(75);
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userInput }),
    });
    const data = await response.json();
    setGeneratedHtml(data.html);
    setGeneratedCss(data.css);
    setIsLoading(false);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-coral-100 via-pink-200 to-green-100 flex items-center justify-center ${inter.className}`}>
      <div className="container mx-auto px-4 py-8 bg-white bg-opacity-50 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-coral-800">Infinite Future</h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-6">
            <label htmlFor="userInput" className="block mb-2 text-xl font-semibold text-coral-700">What do you want to hear about?</label>
            <input
              type="text"
              id="userInput"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full px-4 py-3 text-xl border-2 border-coral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-600"
              placeholder="Ask about the future..."
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-4 text-2xl font-bold bg-gradient-to-r from-coral-400 to-pink-400 text-white rounded-md shadow-md hover:from-coral-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-coral-600"
              disabled={isLoading}
            >
              {isLoading ? 'Remembering...' : 'Tell me about the future...'}
            </button>
          </div>
        </form>
        {isLoading ? (
          <div className="mt-8 text-center text-2xl font-semibold text-coral-700">
            <p>Loading... I promise it&apos;ll be worth it: {countdown} seconds remaining</p>
          </div>
        ) : (
          <div className="mt-12 overflow-auto max-h-screen">
            <HtmlDisplay html={generatedHtml} css={generatedCss} />
          </div>
        )}
      </div>
    </div>
  );
}