'use client';

import { useEffect, useState } from 'react';

export default function BalloonsOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const today = new Date();
    if (today.getMonth() === 6 && today.getDate() === 30) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className={`balloon balloon-${(i % 6) + 1}`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}
