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
        <p className="text-gray-400 text-sm md:text-base">
          Experience a seamless terminal interface to copy commands effortlessly.
        </p>
      </div>

      {/* Main Terminal */}
<div
  className={`terminal-container bg-black border border-gray-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 ${
    isMinimized ? 'scale-90 opacity-80' : 'scale-100 opacity-100'
  }`}
  role="region"
  aria-label="Terminal Interface"
>
  {/* Terminal Header */}
  <div className="flex items-center justify-between px-5 py-4 bg-gray-900 border-b border-gray-800">
    <div className="flex items-center space-x-3">
      <button
        onClick={() => setIsMinimized(!isMinimized)}
        className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors duration-200"
        title="Minimize terminal"
        aria-label="Minimize terminal"
      />
      <button
        className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors duration-200"
        title="Minimize"
        aria-label="Minimize window"
      />
      <button
        className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors duration-200"
        title="Maximize"
        aria-label="Maximize window"
      />
    </div>

    <div className="flex items-center space-x-2 text-gray-400 text-sm font-mono">
      <TerminalIcon className="w-4 h-4" aria-hidden="true" />
      <span>zsh</span>
      <span className="text-gray-600">•</span>
      <span className="text-gray-500">~</span>
    </div>

    <div className="flex items-center space-x-2">
      <button
        onClick={copyToClipboard}
        className="p-2 hover:bg-gray-800 rounded-lg transition-all duration-200 group relative"
        title="Copy command (⌘C)"
        aria-label="Copy command to clipboard"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-gray-400 group-hover:text-white" />
        )}
        {copied && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md">
            Copied!
          </div>
        )}
      </button>
    </div>
  </div>

  {/* Terminal Content */}
  <div className="bg-black text-white font-mono text-sm">
    <div className="p-6 space-y-3">
      {/* Command Input Line */}
      <div className="flex items-center group">
        <div className="flex items-center text-gray-400 select-none">
          <span className="text-green-400">➜</span>
          <span className="ml-2 text-blue-400">~</span>
          <ChevronRight className="w-3 h-3 ml-1" aria-hidden="true" />
        </div>
        <div className="ml-3 flex-1 relative">
          <span
            className="text-white cursor-pointer hover:bg-gray-900 px-1 py-0.5 rounded transition-colors duration-200"
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
          outline: 2px solid #60a5fa;
          outline-offset: 2px;
        }

        /* Enhanced minimized state */
        .terminal-container.scale-90 {
          filter: blur(1px);
        }
      `}</style>
    </div>
  );
};

export default Terminal;