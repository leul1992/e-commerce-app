'use client'
import React, { useState, FormEvent, ChangeEvent } from "react";
import { validPassword, validEmail, validUsername } from "../Validate/Validate";
import FormError from "../SignUpLogin/FormError";
import PasswordInput from "../SignUpLogin/PasswordInput";
import EnteringChoice from "../SignUpLogin/EnteringChoice";

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
  
    setIsLoading(true);
  
    if (!validUsername.test(formData.username)) {
      setSignupError('UserName length >5 Letter, Number, -, _');
      setIsLoading(false);
      return;
    } else if (!validEmail.test(formData.email)) {
        setSignupError('Invalid email address');
        setIsLoading(false);
        return;
    } else if (!validPassword.test(formData.password)) {
      setSignupError('Password length >6 Letter(begin UpperCase), Number, Special characters');
      setIsLoading(false);
      return;
    } else if (formData.password !== formData.repassword) {
      setSignupError('Passwords do not match');
      setIsLoading(false);
      return;
    }
  
    setSignupError('');
  
    try {
      const response = await fetch('http://localhost:4000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok && data.success) {
        // Signup successful, handle user data
        console.log(data.user);
      } else {
        // Signup failed, set error message
        setSignupError(data.error || 'Signup failed');
      }
    } catch (error:any) {
      // Request failed, set error message
      setSignupError(error.message);
    }
  
    setIsLoading(false);
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
          onChange={(value: any) => setFormData({ ...formData, password: value })}
          showPassword={formData.showPassword[0]}
          onTogglePasswordVisibility={() => handleTogglePasswordVisibility(0)}
        />

        <PasswordInput
          value={formData.repassword}
          onChange={(value: any) => setFormData({ ...formData, repassword: value })}
          showPassword={formData.showPassword[1]}
          onTogglePasswordVisibility={() => handleTogglePasswordVisibility(1)}
        />

        <div className="self-start ml-10">
          {isLoading ? (
            <div className="bg-backGroundGreen flex justify-center h-6 items-center w-16 text-white px-2 rounded-xl">
              <span className="loading loading-spinner loading-sm"></span>
            </div>
          ) : (
            <input
              type="submit"
              value={"SignUp"}
              disabled={isLoading}
              className="bg-backGroundGreen w-16 text-white h-6 rounded-xl cursor-pointer hover:opacity-80"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
