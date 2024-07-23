import { ReactNode } from "react";

interface IAlert {
  visible: boolean;
  title?: string;
  message?: string;
  children?: ReactNode;
  type: 'success' | 'warning' | 'error';
}

const Alert: React.FC<IAlert> = ({
  visible,
  title,
  message,
  children,
  type
}) => {

  const typeStyle = {
    success: 'border-success bg-[#F1FFF0] text-success',
    warning: 'border-warning bg-[#FFFAF0] text-warning',
    error: 'border-error bg-[#FFF0F0] text-error'
  }
  
  const setTypeAlert = (type: 'success' | 'warning' | 'error') => {
    return typeStyle[type];
  }

  return (
    <div className={`w-full border-l-4 p-4 transition-opacity ${visible ? 'opacity-100' : 'opacity-0'} ${setTypeAlert(type)} duration-150`} role="alert">
      <p className="font-bold">{title}</p>
      <p>{message}</p>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Alert;