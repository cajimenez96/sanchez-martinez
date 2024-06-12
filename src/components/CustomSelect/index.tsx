// src/components/CustomSelect.tsx
import React from 'react';
import Select, { components } from 'react-select';
import { BiSolidRightArrow } from 'react-icons/bi';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label: string;
  options: Option[];
  placeholder: string;
  name?: string;
  onChange: (selectedOption: Option | null) => void;
}

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props} className="border-none">
      <BiSolidRightArrow />
    </components.DropdownIndicator>
  );
};


const CustomSelect: React.FC<CustomSelectProps> = ({ label, options, placeholder, name, onChange }) => {
  return (
    <div className="mb-4">
      <label className="text-base text-crema">{label}</label>
      <Select
        options={options}
        placeholder={placeholder}
        name={name}
        components={{ DropdownIndicator }}
        className="text-oscuro"
        onChange={onChange}
        isClearable
      />
    </div>
  );
};

export default CustomSelect;
