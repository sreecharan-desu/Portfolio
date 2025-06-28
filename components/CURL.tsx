import React, { useState, useEffect, useRef } from 'react';
import { Copy, Check, ChevronRight } from 'lucide-react';
import { command } from '@/lib/socials';

const Terminal = () => {
  const [copied, setCopied] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  // Typing animation
  useEffect(() => {
    const typeCommand = () => {
      if (isMinimized || copied) return;
      setIsTyping(true);
      setDisplayedCommand('');
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < command.length) {
          setDisplayedCommand(command.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 100);
    };

    typeCommand();
    const loopInterval = setInterval(typeCommand, 5000);
    return () => clearInterval(loopInterval);
  }, [isMinimized, copied]);

  // Cursor blink effect
  useEffect(() => {
    setShowCursor(!isTyping);
  }, [isTyping]);

  // Copy to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      if (navigator.vibrate) navigator.vibrate(50);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'c') {
        if (e.target === inputRef.current || e.target.closest('.terminal-container')) {
          e.preventDefault();
          copyToClipboard();
        }
      }
      if (e.key === 'Escape') setIsMinimized(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-black flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 lg:min-h-screen">
      <div className="w-full max-w-none sm:max-w-3xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
        {/* Header Section */}
        <div className="text-center px-2 sm:px-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 md:mb-4 leading-tight">
            $ who.sreecharandesu.in
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Simulate my dev environment inside your terminal
          </p>
        </div>

        {/* Terminal Window */}
        <div
          className={`terminal-container bg-black/75 border border-white/15 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 backdrop-blur-lg font-mono ${
            isMinimized ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
          } ${isFocused ? 'ring-2 ring-white/50' : ''}`}
          role="region"
          aria-label="Terminal Interface"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-black/60 to-black/40 border-b border-white/10 backdrop-blur-md">
            {/* Traffic Light Buttons */}
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-red-500/80 hover:bg-red-500 transition-all duration-200 hover:scale-110"
                title="Minimize terminal"
                aria-label="Minimize terminal"
              />
              <button
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-all duration-200 hover:scale-110"
                title="Minimize"
                aria-label="Minimize window"
              />
              <button
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-green-500/80 hover:bg-green-500 transition-all duration-200 hover:scale-110"
                title="Maximize"
                aria-label="Maximize window"
              />
            </div>

            {/* Terminal Title */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 text-white/80 text-xs sm:text-sm md:text-base">
              <span className="font-mono">⬢</span>
              <span className="hidden sm:inline">zsh</span>
              <span className="hidden md:inline">— 80x24</span>
            </div>

            {/* Copy Button */}
            <button
              onClick={copyToClipboard}
              className="p-1.5 sm:p-2 md:p-2.5 hover:bg-white/20 rounded-md md:rounded-lg transition-all duration-300 group"
              title="Copy command (⌘C)"
              aria-label="Copy command to clipboard"
            >
              {copied ? (
                <Check className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
              ) : (
                <Copy className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white/80 group-hover:text-white" />
              )}
            </button>
          </div>

          {/* Terminal Content */}
          <div className="bg-transparent text-white">
            <div className="p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="flex items-start group">
                {/* Prompt */}
                <div className="flex items-center text-white/80 select-none flex-shrink-0 pt-1">
                  <span className="text-white text-sm sm:text-base md:text-lg">~</span>
                  <ChevronRight
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1 sm:ml-2 text-white/80"
                    aria-hidden="true"
                  />
                </div>

                {/* Command Input Area */}
                <div className="ml-2 sm:ml-3 md:ml-4 flex-1 relative min-h-[1.5em]">
                  <div className="flex items-start">
                    <span
                      className="text-white font-mono cursor-pointer hover:bg-white/10 px-1 py-0.5 rounded transition-colors duration-300 text-xs sm:text-sm md:text-base lg:text-lg break-all leading-relaxed"
                      //@ts-expect-error --- IGNORE ---
                      onClick={() => inputRef.current?.focus()}
                      role="textbox"
                      aria-readonly="true"
                    >
                      {displayedCommand || command}
                    </span>

                    {/* Cursor */}
                    <span
                      className={`ml-0.5 text-white inline-block text-xs sm:text-sm md:text-base lg:text-lg ${
                        showCursor && !isTyping ? 'animate-pulse' : 'opacity-0'
                      }`}
                      aria-hidden="true"
                      style={{
                        animation: showCursor && !isTyping ? 'blink 1s step-end infinite' : 'none',
                      }}
                    ></span>
                  </div>

                  {/* Hidden Input */}
                  <input
                    ref={inputRef}
                    className="absolute inset-0 opacity-0 cursor-default w-full h-full"
                    value={command}
                    readOnly
                    aria-label="Terminal command input"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                </div>
              </div>

              {/* Help Text */}
              <div className="mt-3 sm:mt-4 md:mt-6 text-white/50 text-xs sm:text-sm md:text-base">
                <span className="sm:hidden">Tap to copy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Instructions */}
        <div className="text-center px-2 sm:px-4">
          <p className="text-white/40 text-xs sm:text-sm font-light tracking-wide max-w-lg mx-auto leading-relaxed">
            <span className="block sm:inline">Click anywhere in the terminal to focus</span>
            <span className="hidden sm:inline mx-2">•</span>
            <span className="block sm:inline mt-1 sm:mt-0">Use Cmd/Ctrl+C to copy</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .terminal-container {
          font-family:
            'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
          background: rgba(0, 0, 0, 0.75);
          box-shadow:
            0 10px 25px -5px rgba(0, 0, 0, 0.3),
            0 20px 40px -15px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        /* Mobile optimizations - Nearly full width */
        @media (max-width: 640px) {
          .terminal-container {
            border-radius: 0.75rem;
            margin: 0;
            width: 100%;
          }
        }

        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          .terminal-container {
            border-radius: 1rem;
          }
        }

        /* Desktop optimizations */
        @media (min-width: 1025px) {
          .terminal-container {
            border-radius: 1.5rem;
          }
        }

        /* Focus and interaction states */
        button:focus-visible,
        input:focus-visible {
          outline: 2px solid rgba(255, 255, 255, 0.8);
          outline-offset: 2px;
        }

        button:hover {
          transform: scale(1.05);
        }

        button:active {
          transform: scale(0.98);
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .terminal-container {
            border-color: rgba(255, 255, 255, 0.5);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .terminal-container,
          button {
            transition: none;
          }

          @keyframes blink {
            0%,
            100% {
              opacity: 1;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default Terminal;
