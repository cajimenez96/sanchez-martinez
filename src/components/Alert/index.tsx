import { ReactNode } from "react";

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

  const type = {
    0: 'border-success bg-[#F1FFF0] text-success',
    1: 'border-warning bg-[#FFFAF0] text-warning',
    2: 'border-error bg-[#FFF0F0] text-error'
  }
  
  const setTypeAlert = () => {
    return type[0]
  }

  return (
    <div className={`w-full border-l-4 p-4 transition-opacity ${visible ? 'opacity-100' : 'opacity-0'} ${setTypeAlert()} duration-150`} role="alert">
      <p className="font-bold">{title}</p>
      <p>{message}</p>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Alert;