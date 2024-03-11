import React from 'react';
import { GrFormView, GrFormViewHide } from 'react-icons/gr';

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  showPassword: boolean;
  onTogglePasswordVisibility: () => void;
  label: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange, showPassword, onTogglePasswordVisibility, label }) => {
  return (
    <div className="flex w-3/4 border-b bg-white border-stone-400">
      <input
        id={label}
        name={label}
        placeholder={label}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-11/12 text-sm outline-none bg-white"
      />
      <span onClick={onTogglePasswordVisibility} className="text-stone-400 cursor-pointer">
        {showPassword ? <GrFormView size={24} /> : <GrFormViewHide size={24} />}
      </span>
    </div>
  );
};

export default PasswordInput;
