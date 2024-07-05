import { ReactNode } from "react";
import Text from "../Text";

interface IAlert {
  visible: boolean;
  title?: string;
  message?: string;
  children?: ReactNode;
}

const Alert: React.FC<IAlert> = ({
  visible,
  title,
  message,
  children
}) => {
  return (
    <div className={`w-full bg-carmesi border-l-4 text-oscuro p-4 transition-opacity  ${visible ? 'opacity-100' : 'opacity-0'} duration-500`} role="alert">
      <Text className="font-bold">{title}</Text>
      <Text>{message}</Text>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Alert;