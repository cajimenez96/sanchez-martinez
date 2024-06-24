import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>{
  children: React.ReactNode;
  className?: string;
}

const Text = ({children, className, ...rest}: TextProps) => {
  return (
    <p className={`text-crema text-base font-normal ${className}`} {...rest}>
      {children}
    </p>
  )
};

export default Text;
