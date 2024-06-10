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
  'outline': styles.outline,
  'switch': styles.switch,
  'link': styles.link
} 

type Styles = keyof typeof buttons;

const handleStyle = (type: Styles, disabled: boolean) => {
  if (disabled) return styles.disabled;

  return buttons[type]
}

const ButtonContent = ({children}: buttonComponentProps) => {
  return (
    <div className={`w-full h-10 px-4 py-1 flex justify-center items-center gap-2 font-lexend`}>
      {children}
    </div>
  )
}

const Button = ({link, href, children, handleClick, className, disabled = false, buttonStyle = 'link'}: ButtonProps) => {
  if (link) {
    return (
      <Link to={(href as never) as string} className={`w-full hover:underline className ${handleStyle(buttonStyle, disabled)} duration-200`}>
        <ButtonContent>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  return (
    <button className={`w-full rounded-xl ${className} ${handleStyle(buttonStyle, disabled)} duration-200`} onClick={handleClick}>
      <ButtonContent>
        {children}
      </ButtonContent>
    </button>
  );
}

export default Button;
