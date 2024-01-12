import React, { useState, FormEvent, ChangeEvent } from "react";
import { validPassword, validEmail, validUsername } from "../Validate/Validate";
import FormError from "./FormError";
import PasswordInput from "./PasswordInput";
import Button from "./Button"; // Assuming you have a Button component
import EnteringChoice from "./EnteringChoice";

interface SignupProps {
  onSubmit: (formData: { username: string; email: string; password: string; repassword: string }) => Promise<void>;
  error: string;
  toLogIn: () => void;
  toSignUp: () => void;
  alreadyHaveAcc: boolean;
}

const SignupForm: React.FC<SignupProps> = ({ onSubmit, error }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repassword: '',
    showPassword: [false, false],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [signupError, setSignupError] = useState('');

  const handleTogglePasswordVisibility = (index: number) => {
    const updatedPassword = [...formData.showPassword];
    updatedPassword[index] = !updatedPassword[index];
    setFormData({ ...formData, showPassword: updatedPassword });
  };

  const handleSignupSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validUsername.test(formData.username)) {
      setSignupError('UserName length >5 Letter, Number, -, _');
      return;
    } else if (!validEmail.test(formData.email)) {
        setSignupError('Invalid email address');
        return;
    } else if (!validPassword.test(formData.password)) {
      setSignupError('Password length >6 Letter(begin UpperCase), Number, Special characters');
      return;
    } else if (formData.password !== formData.repassword) {
      setSignupError('Passwords do not match');
      return;
    }

    setSignupError('');
    setIsLoading(true);

    try {
      await onSubmit(formData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        autoComplete="off"
        onSubmit={handleSignupSubmit}
        className="flex w-full sm:w-96 gap-8 py-10 items-center flex-col border rounded-br-xl rounded-tl-xl drop-shadow-md outline outline-2 outline-backGroundGreen"
      >
        <EnteringChoice />

        <FormError error={(!signupError && error) ? error : signupError} />

        <div className="w-3/4">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            autoComplete="off"
            onChange={handleChange}
            className="w-full text-sm outline-none bg-white border-b border-b-stone-400"
          />
          </div>
          <div className="w-3/4">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            onChange={handleChange}
            className="w-full text-sm outline-none bg-white border-b border-b-stone-400"
          />
        </div>

        <PasswordInput
          value={formData.password}
          onChange={(value) => setFormData({ ...formData, password: value })}
          showPassword={formData.showPassword[0]}
          onTogglePasswordVisibility={() => handleTogglePasswordVisibility(0)}
        />

        <PasswordInput
          value={formData.repassword}
          onChange={(value) => setFormData({ ...formData, repassword: value })}
          showPassword={formData.showPassword[1]}
          onTogglePasswordVisibility={() => handleTogglePasswordVisibility(1)}
        />

        {isLoading ? (
          <div className="text-center">
            Loading... {/* You can replace this with your loading icon or component */}
          </div>
        ) : (
          <input
            type="submit"
            value="SignUp"
            className="bg-backGroundGreen ml-12 text-white px-1 cursor-pointer hover:opacity-80 self-start rounded-lg"
          />
        )}
      </form>
    </div>
  );
};

export default SignupForm;
