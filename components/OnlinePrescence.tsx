// @ts-nocheck
'use client';
import React, { useState, useEffect } from 'react';
import { ExternalLink, MessageCircle, Github, Linkedin, Play, BookOpen } from 'lucide-react';

const AnimatedSearchBar = () => {
  const baseDomain = 'sreecharandesu.in';
  const subdomains = [
    { prefix: 'chat.', icon: MessageCircle, description: 'Chat with me' },
    { prefix: 'github.', icon: Github, description: 'Code repositories' },
    { prefix: 'linkedin.', icon: Linkedin, description: 'Professional profile' },
    { prefix: 'play.', icon: Play, description: 'Chess Profilee' },
    { prefix: 'blog.', icon: BookOpen, description: 'Blog posts' },
  ];

  const [displayedText, setDisplayedText] = useState(baseDomain);
  const [cursorPosition, setCursorPosition] = useState(baseDomain.length);
  const [showTextCursor, setShowTextCursor] = useState(false);
  const [currentSubdomainIndex, setCurrentSubdomainIndex] = useState(0);
  const [showLinkIcon, setShowLinkIcon] = useState(false);

  const animationCycle = async () => {
    const currentSubdomain = subdomains[currentSubdomainIndex];
    const subdomain = currentSubdomain.prefix;

    // Move cursor to start
    for (let pos = baseDomain.length; pos >= 0; pos--) {
      setCursorPosition(pos);
      await new Promise((resolve) => setTimeout(resolve, 40));
    }

    // Type subdomain
    for (let i = 0; i <= subdomain.length; i++) {
      setDisplayedText(subdomain.slice(0, i) + baseDomain);
      setCursorPosition(i);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    setShowLinkIcon(true);
    setShowTextCursor(false);

    // Wait and delete
    await new Promise((resolve) => setTimeout(resolve, 2500));
    for (let i = subdomain.length; i >= 0; i--) {
      setDisplayedText(subdomain.slice(0, i) + baseDomain);
      setCursorPosition(i);
      await new Promise((resolve) => setTimeout(resolve, 60));
    }
    setShowLinkIcon(false);

    // Immediately move to next subdomain
    setShowTextCursor(true);
    setCursorPosition(0);
    setCurrentSubdomainIndex((prev) => (prev + 1) % subdomains.length);
  };

  useEffect(() => {
    setShowTextCursor(true);
    animationCycle();
  }, [currentSubdomainIndex]);

  const handleLinkClick = () => {
    window.open(`https://${displayedText}`, '_blank', 'noopener,noreferrer');
  };

  const currentSubdomain = subdomains[currentSubdomainIndex];
  const IconComponent = currentSubdomain.icon;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold">sreecharandesu.in</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Click on the link icon to visit my {currentSubdomain.description.toLowerCase()}.
        </p>

        <div className="relative inline-flex items-center w-full max-w-lg mx-auto border rounded-xl p-4 font-mono">
          <div className="flex items-center space-x-2 w-full">
            <span className="text-lg mr-2">https://</span>
            <span className="text-lg md:text-xl">{displayedText.slice(0, cursorPosition)}</span>
            {showTextCursor && !showLinkIcon && (
              <span className="inline-block w-0.5 h-6 bg-black animate-pulse ml-0.5">|</span>
            )}
            <span className="text-lg md:text-xl">{displayedText.slice(cursorPosition)}</span>
            {showLinkIcon && (
              <div className="flex items-center space-x-2 ml-auto">
                <IconComponent className="w-5 h-5" />
                <button
                  onClick={handleLinkClick}
                  className="hover:bg-gray-200 p-1 rounded-md"
                  aria-label={`Visit ${displayedText}`}
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.2; }
        }
        .animate-pulse {
          animation: pulse 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedSearchBar;
