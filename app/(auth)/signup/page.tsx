'use client'
import React from 'react';
import SignupForm from '../SignUpLogin/SignupForm';
const Home: React.FC = () => {
  const handleSubmit = async (credentials: { username: string; email: string; password: string; repassword: string}) => {
    // Implement your login submission logic here
    console.log('Login submitted:', credentials);
  };

  return (
    <>
      <SignupForm
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
