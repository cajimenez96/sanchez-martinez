import React from 'react';

interface ButtonProps extends HTMLButtonElement {
  link: boolean;
  styleButton: 'primary' | 'secondary' | 'link';
  href?: string;
}

const Button = ({link, styleButton, href, ...rest}: ButtonProps) => {
  return (
    <div>
      {link }
    </div>
  )
}

export default Button;
