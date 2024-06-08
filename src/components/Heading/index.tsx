import { ReactNode } from 'react';

interface CustomProps{
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & CustomProps

const Heading = ({children, className, level = 1, ...rest}: HeadingProps ) => {

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`text-crema ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

export default Heading;
