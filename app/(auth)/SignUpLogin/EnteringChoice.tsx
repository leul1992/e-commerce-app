'use client'
import React, { useState } from 'react'
import Button from './Button'

function EnteringChoice() {
    const [login, setLogin] = useState(true)
    const [signup, setSignup] = useState(false)
    const toSignUP = () => {
        setLogin(false)
        setSignup(true)
    }
    const toLogin = () => {
        setLogin(true)
        setSignup(false)
    }
  return (
    <div className="flex cursor-pointer bg-stone-100 rounded-xl w-32">
        <Button onClick={toLogin} active={login} text="Login" />
        <Button onClick={toSignUP} active={signup} text="Signup" />
    </div>
  )
}

export default EnteringChoice