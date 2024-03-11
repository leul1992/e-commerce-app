import React from 'react';

interface FormErrorProps {
  error: string;
}

const FormError: React.FC<FormErrorProps> = ({ error }) => {
  return error ? <div className="fixed text-red-400">{error}</div> : null;
};

export default FormError;
