'use client'
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import FormError from '../SignUpLogin/FormError';
import PasswordInput from '../SignUpLogin/PasswordInput';;
import EnteringChoice from '../SignUpLogin/EnteringChoice';
import axios from 'axios';
import { login } from '@/lib/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { useRouter } from 'next/navigation';
import { selectUser } from '@/lib/features/user/userSlice';

interface LoginFormProps {
  error: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const dispatch = useAppDispatch();


  const userState = useAppSelector(selectUser);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };


  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/users/login', {
        username,
        password,
      });

      if (response.data.success) {
        // Login successful, handle user data
        dispatch(login());
        console.log(response)

        router.push('/')
      } else {
        // Login failed, set error message
        setLoginError(response.data.error || 'Login failed');
        setTimeout(() => setLoginError(null), 3000);
      }
    } catch (error: any) {
      // Request failed, set error message
      setLoginError(error.message);
      setTimeout(() => setLoginError(null), 3000);
    }

    setLoading(false);
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleLoginSubmit}
        className="flex w-full sm:w-96 gap-8 py-6 items-center flex-col border rounded-br-xl rounded-tl-xl drop-shadow-md outline outline-2 outline-backGroundGreen"
      >
        <FormError error={(loginError || error)} />
        <div className='pt-10'>
          <EnteringChoice />
        </div>

        <div className='w-3/4'>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            className="w-full text-sm outline-none bg-white border-b border-b-stone-400"
          />
        </div>

        <PasswordInput
          value={password}
          onChange={(value: React.SetStateAction<string>) => setPassword(value)}
          showPassword={showPassword}
          onTogglePasswordVisibility={handleTogglePasswordVisibility}
          label="Password"
        />

        <div className='self-start ml-10'>
          {loading ? (
            <div className="bg-backGroundGreen flex justify-center h-6 items-center w-16 text-white px-2 rounded-xl">
              <span className="loading loading-spinner loading-sm"></span>
            </div>
          ) : (
            <input
              type="submit"
              value={'LogIn'}
              disabled={loading}
              className="bg-backGroundGreen w-16 text-white h-6 rounded-xl cursor-pointer hover:opacity-80"
            />
          )}
        </div>

      </form>

    </div>
  );
};

export default LoginForm;
