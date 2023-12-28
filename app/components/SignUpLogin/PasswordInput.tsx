import React from 'react';
import { GrFormView, GrFormViewHide } from 'react-icons/gr';

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  showPassword: boolean;
  onTogglePasswordVisibility: () => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange, showPassword, onTogglePasswordVisibility }) => {
  return (
    <div className="flex w-3/4 border-b border-stone-400">
      <input
        id="password"
        name="password"
        placeholder="Password"
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-11/12 text-sm outline-none"
      />
      <span onClick={onTogglePasswordVisibility} className="text-stone-400 cursor-pointer">
        {showPassword ? <GrFormView size={24} /> : <GrFormViewHide size={24} />}
      </span>
    </div>
  );
};

export default PasswordInput;