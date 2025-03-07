"use client";

import React from "react";

export const Button = ({ children, className, appName }) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
