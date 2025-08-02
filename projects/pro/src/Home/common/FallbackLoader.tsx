// ✅ src/Home/common/FallbackLoader.tsx — Loading Spinner / Fallback Component (JP Visual & Docs)

import React, { FC } from "react";

const FallbackLoader: FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-100 text-base-content">
      <svg
        className="h-12 w-12 animate-spin text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-label="Loading"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default FallbackLoader;