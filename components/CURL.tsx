import React, { useState, useEffect, useRef } from 'react';
import { Copy, Check, Terminal as TerminalIcon, ChevronRight } from 'lucide-react';
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
      }, 80);
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
    <div className="w-full max-w-4xl mx-auto space-y-6 px-4">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Copy this command to run in your terminal
        </h1>
        <p className="text-white/80 text-sm md:text-base">My CLI version of Portfolio</p>
      </div>

      <div
        className={`terminal-container bg-black/75 border border-white/15 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 backdrop-blur-lg font-mono ${
          isMinimized ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
        } ${isFocused ? 'ring-2 ring-white/50' : ''}`}
        role="region"
        aria-label="Terminal Interface"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-black/60 to-black/40 border-b border-white/10 backdrop-blur-md">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="header-button w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors duration-200"
              title="Minimize terminal"
              aria-label="Minimize terminal"
            />
            <button
              className="header-button w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors duration-200"
              title="Minimize"
              aria-label="Minimize window"
            />
            <button
              className="header-button w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors duration-200"
              title="Maximize"
              aria-label="Maximize window"
            />
          </div>
          <div className="flex items-center space-x-2 text-white/80 text-xs md:text-sm">
            <TerminalIcon className="w-4 h-4" aria-hidden="true" />
            <span>zsh — 80x24</span>
          </div>
          <button
            onClick={copyToClipboard}
            className="p-2 hover:bg-white/20 rounded-lg transition-all duration-300 group"
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

        <div className="bg-transparent text-white text-sm md:text-base">
          <div className="p-4 md:p-6 space-y-3">
            <div className="flex items-center group">
              <div className="flex items-center text-white/80 select-none">
                <span className="text-white">➜</span>
                <span className="ml-2 text-white">~</span>
                <ChevronRight className="w-3 h-3 ml-1 text-white/80" aria-hidden="true" />
              </div>
              <div className="ml-3 flex-1 relative">
                <span
                  className="text-white cursor-pointer hover:bg-white/10 px-1 py-0.5 rounded transition-colors duration-300"
                  //@ts-expect-error ---
                  onClick={() => inputRef.current?.focus()}
                  role="textbox"
                  aria-readonly="true"
                >
                  {displayedCommand || command}
                </span>
                <span
                  className={`ml-0.5 text-white inline-block ${
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
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
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
        @media (max-width: 640px) {
          .terminal-container {
            max-width: 100%;
            padding: 0.5rem;
          }
          .header-button {
            width: 1rem;
            height: 1rem;
          }
          h1 {
            font-size: 1.5rem;
          }
          p {
            font-size: 0.875rem;
          }
          .text-sm {
            font-size: 0.75rem;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .header-button {
            width: 0.875rem;
            height: 0.875rem;
          }
        }
        button:focus-visible,
        input:focus-visible {
          outline: 2px solid #ffffff;
          outline-offset: 2px;
        }
        .terminal-container {
          font-family: Menlo, Monaco, Consolas, monospace;
          background: rgba(0, 0, 0, 0.75);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        button:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Terminal;
