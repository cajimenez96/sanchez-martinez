// src/components/CustomSelect.tsx
import React, { useState } from 'react';
import Select, { DropdownIndicatorProps, GroupBase, components } from 'react-select';
import { BiSolidRightArrow } from 'react-icons/bi';
import { JSX } from 'react/jsx-runtime';

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

const DropdownIndicator = (props: JSX.IntrinsicAttributes & DropdownIndicatorProps<unknown, boolean, GroupBase<unknown>>) => {
  return (
    <components.DropdownIndicator {...props} className="border-none">
      <BiSolidRightArrow />
    </components.DropdownIndicator>
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
  

  const onChanges = (option?: Option) => {
    setOption(option)
    handleChange(option);
 }
  
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
        onChange={onChanges}
        isClearable
      />
      {hasError && (<p className="text-blanco">{error}</p>)}
    </div>
  );
};

export default CustomSelect;
