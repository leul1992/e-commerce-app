import React from 'react';

interface ButtonProps {
  onClick: () => void;
  active: boolean;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, active, text }) => {
  return (
    <span
      onClick={onClick}
      className={`${active ? 'bg-backGroundGreen text-white' : 'text-black'} flex rounded-xl justify-center w-1/2`}
    >
      {text}
    </span>
  );
};

export default Button;
