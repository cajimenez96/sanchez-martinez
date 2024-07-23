import React, { useState } from 'react';
import Select from 'react-select';
import { BiSolidRightArrow } from 'react-icons/bi';

interface Option {
  value: string;
  label: string;
  id: number;
}

interface CustomSelectProps {
  label?: string;
  options: Option[];
  placeholder: string;
  name?: string;
  value?: number | null;
  handleChange: (e: Option | undefined) => void;
  hasError?: boolean;
  error?: string;
}

const DropdownIndicator = () => {
  return (
    <div className="me-2 border-none">
      <BiSolidRightArrow className="text-oscuro"/>
    </div>
  );
};


const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  options,
  placeholder,
  name,
  value,
  error,
  hasError = false,
  handleChange,
}) => {
  
  const newValue = options.find(option => option.id === value);

  const [option, setOption] = useState<Option | undefined>(newValue)
  
  return (
    <div className="mb-4">
      <label className="text-base text-crema">{label}</label>
      <Select
        options={options}
        placeholder={placeholder}
        name={name}
        defaultValue={option}
        components={{ DropdownIndicator }}
        className="text-oscuro"
        classNames={{
          indicatorSeparator: () => 'hidden',
        }}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: 'var(--color-oscuro)',
            borderRadius: 12,
            color: 'var(--color-oscuro)'
          }),
        }}
        onChange={() => {
          setOption(option)
          handleChange(option);
       }}
      />
      {hasError && (<p className="text-blanco">{error}</p>)}
    </div>
  );
};

export default CustomSelect;
