// .ladle/components.tsx
import React from "react";
import type { GlobalProvider } from "@ladle/react";
import "../src/index.css";

export const Provider: GlobalProvider = ({ children }) => {
  return <div className="min-h-screen bg-background p-8">{children}</div>;
};
