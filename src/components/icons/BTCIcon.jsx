// BTCIcon.jsx
import React from 'react';

export const BTCIcon = ({ size = 24, color = '#F7931A' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Circle background */}
    <circle cx="32" cy="32" r="32" fill={color} />
    {/* BTC symbol path */}
    <path
      fill="white"
      d="M39.43 24.68c1.17-7.85-12.05-8.99-14.4-5.98l-2.93 15.34-4.03.77-1.3 6.8 3.89-.75-2.66 13.96 6.15 1.36 2.93-15.36c1.58.31 7.1 1.36 8.33-3.4.88-3.26-1.1-5.16-3.01-6.2 2.14-.49 3.74-1.9 4.24-4.37zM33.28 33.96c-.86 4.33-6.72 2-8.76 1.46l1.58-8.3c2.1-.48 7.37-.97 6.79 4.84zm1.02-8.87c-.65 3.44-5.82 1.69-7.58 1.27l1.46-7.64c1.76-.41 6.62-1.07 6.07 6.37z"
    />
  </svg>
);

