interface SwitchProps {
  selectedValue: number;
  handleClick: (value: number) => void;
}

interface ButtonProps {
  text: number;
  isSelected: boolean;
  onClick: () => void;
}

const Button = ({ text, isSelected, onClick }: ButtonProps) => {
  const widthUnSelected = "w-[25px] rounded-[4px]";
  const widthSelected = "w-[80px] rounded-md";
  const height = "h-[25px]";

  return (
    <span
      onClick={onClick}
      className={`flex ${height} items-center justify-center bg-crema border-crema hover:bg-naranja text-naranja hover:text-crema ${isSelected ? widthSelected : widthUnSelected} duration-200 z-0`}
    >
      {text}
    </span>
  );
};

const Switch = ({ selectedValue, handleClick }: SwitchProps) => {
  return (
    <label className="relative inline-flex cursor-pointer select-none items-center mb-5">
      <div className={`shadow-card flex h-[25px] w-auto items-center justify-center gap-5`}>
        {[1, 2].map((text) => (
          <Button
            key={text}
            text={text}
            isSelected={selectedValue === text}
            onClick={() => handleClick(text)}
          />
        ))}
      </div>
    </label>
  );
};

export default Switch;

