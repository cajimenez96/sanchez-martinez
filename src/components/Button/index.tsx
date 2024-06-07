import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from './button.module.css';

interface ButtonProps {
  link?: boolean;
  href?: string;
  children: ReactNode;
  handleClick?: () => void;
  disabled?: boolean;
  className?: string;
  buttonStyle?: Styles;
}

type buttonComponentProps = Pick<ButtonProps, "children">

const buttons = {
  'link': styles.link

} 

type Styles = keyof typeof buttons;

const handleStyle = (type: Styles, disabled: boolean) => {
  if (disabled) return styles.disabled;

  return buttons[type]
}

const ButtonContent = ({children}: buttonComponentProps) => {
  return (
    <button>
      {children}
    </button>
  )
}

const Button = ({link, href, children, handleClick, className, disabled = false, buttonStyle = 'link'}: ButtonProps) => {
  if (link) {
    return (
      <Link to={(href as never) as string} className={`w-full hover:underline ${handleStyle(buttonStyle, disabled)}`}>
        <ButtonContent>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  return (
    <button className={`w-full ${className} ${handleStyle(buttonStyle, disabled)}`} onClick={handleClick}>
      <ButtonContent>
        {children}
      </ButtonContent>
    </button>
  );
}

export default Button;
