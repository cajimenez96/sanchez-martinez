import { ReactNode } from "react";

interface CustomProps {
  children: ReactNode;
  className?: string;
}

type SectionProps = CustomProps & React.HTMLAttributes<HTMLElement>

const Section = ({children, className, ...rest}: SectionProps) => {
  return (
    <section className={`my-2 md:my-10 mx-5 md:mx-20 ${className}`} {...rest}>
      {children}
    </section>
  )
}

export default Section;