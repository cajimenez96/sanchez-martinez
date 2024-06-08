import { ReactNode } from "react";

interface CustomProps {
  children: ReactNode;
  className?: string;
}

type SectionProps = CustomProps & React.HTMLAttributes<HTMLElement>

const Section = ({children, className, ...rest}: SectionProps) => {
  return (
    <section className={`my-10 px-20 ${className}`} {...rest}>
      {children}
    </section>
  )
}

export default Section;