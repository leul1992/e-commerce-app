'use client'
import React from 'react';
import LoginForm from '../components/SignUpLogin/LoginForm';

const Home: React.FC = () => {
  const handleSubmit = async (credentials: { username: string; password: string }) => {
    // Implement your login submission logic here
    console.log('Login submitted:', credentials);
  };

  return (
    <>
      <LoginForm
        onSubmit={handleSubmit}
        error="Error message goes here" // Replace with actual error state
        alreadyHaveAcc={true} // Replace with actual state
        toSignUp={() => console.log('Navigate to SignUp')} // Replace with actual navigation logic
        toLogIn={() => console.log('Navigate to LogIn')} // Replace with actual navigation logic
      />
    </>
  );
};

export default Home;
