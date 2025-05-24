// XDCIcon.jsx
import React from 'react';

export const XDCIcon = ({ size = 24, color = '#0092CE' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Circle background */}
    <circle cx="32" cy="32" r="32" fill={color} />
    {/* Stylized "X" letter */}
    <path
      d="M20 18L44 46M20 46L44 18"
      stroke="white"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
