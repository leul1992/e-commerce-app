'use client'
import React, { useState, FormEvent, ChangeEvent } from "react";
import { validPassword, validEmail, validUsername } from "../Validate/Validate";
import FormError from "../SignUpLogin/FormError";
import PasswordInput from "../SignUpLogin/PasswordInput";
import EnteringChoice from "../SignUpLogin/EnteringChoice";
import axios from "axios";

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
  });
  const [ showPassword, setShowPassword ] = useState([false, false])
  const [isLoading, setIsLoading] = useState(false);
  const [signupError, setSignupError] = useState<string | null>(null);

  const handleTogglePasswordVisibility = (index: number) => {
    const updatedPassword = [...showPassword];
    updatedPassword[index] = !updatedPassword[index];
    setShowPassword(updatedPassword);
  };
  

  const handleSignupSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    setIsLoading(true);
  
    if (!validUsername.test(formData.username)) {
      setSignupError("UserName length >5 Letter, Number, -, _");
      setTimeout(() => setSignupError(null), 3000);
      setIsLoading(false);
      return;
    } else if (!validEmail.test(formData.email)) {
        setSignupError('Invalid email address');
        setTimeout(() => setSignupError(null), 3000);
        setIsLoading(false);
        return;
    } else if (!validPassword.test(formData.password)) {
      setSignupError('Password length >6 Letter(begin UpperCase), Number, Special characters');
      setTimeout(() => setSignupError(null), 3000);
      setIsLoading(false);
      return;
    } else if (formData.password !== formData.repassword) {
      setSignupError('Passwords do not match');
      setTimeout(() => setSignupError(null), 3000);
      setIsLoading(false);
      return;
    }
  
    setSignupError(null);
  
    try {
      const response = await axios.post('/api/users/signup', formData);
  
      if (response.data.success) {
        setSignupError(null);
        setTimeout(() => setSignupError(null), 3000);
        setFormData({username: '', email: '', password: '', repassword: ''})
        setShowPassword([false, false]);
      } else {
        setSignupError(response.data.error);
        setTimeout(() => setSignupError(null), 3000);
      }
    } catch (error:any) {
      // Request failed, set error message
      setSignupError(error.message);
      setTimeout(() => setSignupError(null), 3000);
    } finally{
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
        className="flex w-full sm:w-96 gap-8 py-6 items-center flex-col border rounded-br-xl rounded-tl-xl drop-shadow-md outline outline-2 outline-backGroundGreen"
      >
        <FormError error={(signupError || error)} />
        <div className="pt-10">
          <EnteringChoice />
        </div>

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
          showPassword={showPassword[0]}
          onTogglePasswordVisibility={() => handleTogglePasswordVisibility(0)}
          label="Password"
        />

        <PasswordInput
          value={formData.repassword}
          onChange={(value: any) => setFormData({ ...formData, repassword: value })}
          showPassword={showPassword[1]}
          onTogglePasswordVisibility={() => handleTogglePasswordVisibility(1)}
          label="Re-enter Password"
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
