'use client'
import React, { useEffect } from 'react'
import LoginForm from '../SignUpLogin/LoginForm'
import { useAppSelector } from '@/lib/hooks'
import { useRouter } from 'next/router';

// Import statements

function Login() {
  return (
    <LoginForm error={''} />
  );
}

export default Login;
