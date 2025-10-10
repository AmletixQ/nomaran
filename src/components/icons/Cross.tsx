import React from "react";

export default function Cross({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 5L5 19M5.00001 5L19 19"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
