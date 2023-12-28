import React, { useState, ChangeEvent, FormEvent } from 'react';
import Button from './Button';
import FormError from './FormError';
import PasswordInput from './PasswordInput';

interface LoginFormProps {
  onSubmit: (credentials: { username: string; password: string }) => Promise<void>;
  error: string;
  alreadyHaveAcc: boolean;
  toSignUp: () => void;
  toLogIn: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, error, alreadyHaveAcc, toSignUp, toLogIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    let newLoginError = '';

    // Validation logic...

    setLoginError(newLoginError);

    if (!newLoginError) {
      try {
        await onSubmit({ username, password });
      } catch (error) {
        setLoginError('Login failed');
      }
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center px-10 sm:px-0 items-center h-screen">
      <form
        onSubmit={handleLoginSubmit}
        className="flex w-full sm:w-96 gap-8 py-10 items-center flex-col border rounded-br-xl rounded-tl-xl drop-shadow-md outline outline-2 outline-backGroundGreen"
      >
        <div className="flex cursor-pointer bg-stone-100 rounded-xl w-32">
          <Button onClick={toLogIn} active={alreadyHaveAcc} text="Login" />
          <Button onClick={toSignUp} active={!alreadyHaveAcc} text="Signup" />
        </div>

        <FormError error={error || loginError} />

        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleChange}
          className="w-3/4 text-sm outline-none bg-white border-b border-b-stone-400"
        />

        <PasswordInput
          value={password}
          onChange={(value) => setPassword(value)}
          showPassword={showPassword}
          onTogglePasswordVisibility={handleTogglePasswordVisibility}
        />

        <input
          type="submit"
          value={loading ? 'Loading...' : 'LogIn'}
          disabled={loading}
          className="bg-backGroundGreen self-start ml-12 text-white px-2 rounded-xl cursor-pointer hover:opacity-80"
        />
      </form>

      {loading && <div>Loading...</div>}
    </div>
  );
};

export default LoginForm;
