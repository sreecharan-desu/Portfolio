import React, { useState, useEffect, useRef } from 'react';
import { Copy, Check, Terminal as TerminalIcon, ChevronRight } from 'lucide-react';

const Terminal = () => {
  const [copied, setCopied] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const command = "curl -sL who.sreecharandesu.in | bash";

  // Continuous typing animation every 5 seconds
  useEffect(() => {
    const typeCommand = () => {
      if (isMinimized || copied) return; // Skip if minimized or copied
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
      }, 80);
    };

    typeCommand(); // Initial run
    const loopInterval = setInterval(typeCommand, 5000); // Repeat every 5 seconds

    return () => clearInterval(loopInterval);
  }, [isMinimized, copied]);

  // Improved cursor blink effect
  useEffect(() => {
    if (isTyping) {
      setShowCursor(false); // Hide cursor during typing
    } else {
      setShowCursor(true); // Show cursor when not typing
    }
  }, [isTyping]);

  // Copy to clipboard with enhanced feedback
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        if (e.key === 'c') {
          if (
            e.target === inputRef.current ||
            (e.target as HTMLElement).closest('.terminal-container')
          ) {
            e.preventDefault();
            copyToClipboard();
          }
        }
      }

      if (e.key === 'Escape') {
        setIsMinimized(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 px-4">
      {/* Centered Heading/Tagline */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Run my command in One Click
        </h1>
        <p className="text-white text-sm md:text-base">
          Experience a seamless terminal interface of mine.
        </p>
      </div>

      {/* Main Terminal */}
      <div
        className={`terminal-container bg-black/70 border border-white/20 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 backdrop-blur-xl ${
          isMinimized ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
        }`}
        role="region"
        aria-label="Terminal Interface"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-black/50 border-b border-white/10 backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="w-3 h-3 rounded-full bg-white/80 hover:bg-white transition-colors duration-200"
              title="Minimize terminal"
              aria-label="Minimize terminal"
            />
            <button
              className="w-3 h-3 rounded-full bg-white/80 hover:bg-white transition-colors duration-200"
              title="Minimize"
              aria-label="Minimize window"
            />
            <button
              className="w-3 h-3 rounded-full bg-white/80 hover:bg-white transition-colors duration-200"
              title="Maximize"
              aria-label="Maximize window"
            />
          </div>

          <div className="flex items-center space-x-2 text-white/80 text-sm font-mono">
            <TerminalIcon className="w-4 h-4" aria-hidden="true" />
            <span>zsh</span>
            <span className="text-white/50">•</span>
            <span className="text-white/50">~</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={copyToClipboard}
              className="p-2 hover:bg-white/20 rounded-lg transition-all duration-300 group relative"
              title="Copy command (⌘C)"
              aria-label="Copy command to clipboard"
            >
              {copied ? (
                <Check className="w-4 h-4 text-white" />
              ) : (
                <Copy className="w-4 h-4 text-white/80 group-hover:text-white" />
              )}
   
            </button>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="bg-transparent text-white font-mono text-sm">
          <div className="p-6 space-y-3">
            {/* Command Input Line */}
            <div className="flex items-center group">
              <div className="flex items-center text-white/80 select-none">
                <span className="text-white">➜</span>
                <span className="ml-2 text-white">~</span>
                <ChevronRight className="w-3 h-3 ml-1 text-white/80" aria-hidden="true" />
              </div>
              <div className="ml-3 flex-1 relative">
                <span
                  className="text-white cursor-pointer hover:bg-white/10 px-1 py-0.5 rounded transition-colors duration-300"
                  onClick={() => inputRef.current?.focus()}
                  role="textbox"
                  aria-readonly="true"
                >
                  {displayedCommand || command}
                </span>
                <span
                  className={`ml-0.5 font-thin text-white inline-block ${
                    showCursor && !isTyping ? 'animate-blink' : 'opacity-0'
                  }`}
                  aria-hidden="true"
                >
                  |
                </span>
                <input
                  ref={inputRef}
                  className="absolute inset-0 opacity-0 cursor-default"
                  value={command}
                  readOnly
                  aria-label="Terminal command input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 0.6s step-end infinite;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .terminal-container {
            max-width: 100%;
          }
          h1 {
            font-size: 1.5rem;
          }
        }

        /* Accessibility focus styles */
        button:focus-visible,
        input:focus-visible {
          outline: 2px solid #ffffff;
          outline-offset: 2px;
        }

        /* Enhanced minimized state */
        .terminal-container.scale-95 {
          filter: blur(2px);
        }

        /* Glassmorphism effect */
        .terminal-container {
          background: rgba(0, 0, 0, 0.7);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Smooth hover effects */
        button:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Terminal;