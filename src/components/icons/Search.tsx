import React from "react";

export default function Search({
  type = "white",
}: {
  type?: "white" | "black";
}) {
  const color = type === "black" ? "#19181a" : "#fffdf5";

  return (
    <svg
      className="cursor-pointer"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_101_314)">
        <path
          d="M10.286 19.7143C15.4933 19.7143 19.7146 15.493 19.7146 10.2857C19.7146 5.07849 15.4933 0.857178 10.286 0.857178C5.07873 0.857178 0.857422 5.07849 0.857422 10.2857C0.857422 15.493 5.07873 19.7143 10.286 19.7143Z"
          stroke={color}
          strokeWidth="1.71429"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.7148 23.1428L16.7148 17.1428"
          stroke={color}
          strokeWidth="1.71429"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_101_314">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
