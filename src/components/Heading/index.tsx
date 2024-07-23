import { ReactNode } from 'react';

interface CustomProps{
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({children, className, level = 1}: CustomProps ) => {

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`text-crema ${className}`}>
      {children}
    </Tag>
  )
}

export default Heading;
