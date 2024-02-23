'use client'
import React, { useEffect } from 'react'
import LoginForm from '../SignUpLogin/LoginForm'
import { selectUser } from '@/lib/features/user/userSlice'
import { useAppSelector } from '@/lib/hooks'
import { useRouter } from 'next/router';

// Import statements

function Login() {
  return (
    <LoginForm error={''} />
  );
}

export default Login;
