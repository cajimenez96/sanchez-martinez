import { ReactNode } from "react";
import styles from "./container.module.css";

interface containerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({children, className}: containerProps) => {
  return (
    <div className={`w-full mt-10 ${className} ${styles.background}`}>
      {children}
    </div>
  )
}

export default Container;
