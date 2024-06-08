import { ReactNode } from "react";
import styles from "./hero.module.css";

interface HeroProps {
  children: ReactNode;
  className?: string;
}

const Hero = ({children, className}: HeroProps) => {
  return (
    <div className={`w-full min-h-[70vh] mt-10 ${className} ${styles.background}`}>
      {children}
    </div>
  )
}

export default Hero;
