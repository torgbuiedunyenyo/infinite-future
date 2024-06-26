'use client';

import { useState, useEffect } from 'react';
import HtmlDisplay from '@/components/HtmlDisplay';
import Footer from '@/components/Footer';
import Title from '@/components/Title';


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
    setCountdown(85);
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
    
    <main className='flex flex-col min-h-screen'>
      <div className="container mx-auto px-4 mt-5 flex-grow">
     <Title/>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="userInput" className="block mb-2">What do you want to hear about?</label>
          <input
            type="text"
            id="userInput"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            placeholder="Just put it here..."
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-3 py-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none"
            disabled={isLoading}
          >
            {isLoading ? 'Remembering...' : 'Tell me about the future...'}
          </button>
        </div>
      </form>
      {isLoading ? (
        <div className="mt-6 text-center">
          <p>Loading... I promise it&apos;ll be worth it: {countdown} seconds remaining</p>
        </div>
      ) : generatedHtml? (
        <div className="mt-8 ">
          <HtmlDisplay html={generatedHtml} css={generatedCss} />
        </div>
      ):null}

     
    </div>
<Footer/>
 
    </main>
  
  );
}