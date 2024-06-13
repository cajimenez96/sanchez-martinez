import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const Text = ({children, className}: TextProps) => {
  return (
    <p className={`text-crema text-base font-normal ${className}`}>
      {children}
    </p>
  )
};

export default Text;
