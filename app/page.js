'use client'
import React from 'react';
import Script from 'next/script';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is a basic Next.js home page.</p>
      <script src="https://app.lemonsqueezy.com/js/lemon.js" defer></script>
      <button onClick={() => LemonSqueezy.Url.Open('https://affiliate-ally.lemonsqueezy.com/buy/6b47a990-e9f8-44f7-84aa-98743136cb66')}>
        Open Checkout
      </button>
    
    </div>
  );
};

export default Home;