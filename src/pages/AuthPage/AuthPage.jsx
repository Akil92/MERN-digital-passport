import { useActionData } from "react-router-dom";
import LogInForm from "../../components/LogInForm/LogInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import React, { useState } from "react";

export default function AuthPage({ setUser }) {
  const [showLogIn, setShowLogIn] = useState(true);
  return(
    <main>
      <h1>AuthPage</h1>
      {showLogIn ? <LogInForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      <h3 onClick={() => setShowLogIn(!showLogIn)}>{showLogIn ? 'SIGN UP' : 'LOG IN'}</h3>
      </main>
  )
}
