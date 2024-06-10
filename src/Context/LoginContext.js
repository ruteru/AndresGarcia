import React, { useState, useContext } from 'react';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import { FaLinkedinIn } from "react-icons/fa";

const LoginContext = React.createContext();

export const useLoginContext = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const { linkedInLogin } = useLinkedIn({
    clientId: '77b4gg3ynd5y8r',
    redirectUri: `${window.location.origin}/linkedin`, 
    onSuccess: (code) => {
      console.log(code);
      setLoggedIn(true);
    },
    onError: (error) => {
      console.log(error);
      setLoggedIn(false);
    },
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    linkedInLogin();
  };

  return (
    <LoginContext.Provider value={{ loggedIn, login }}>
      {children}
    </LoginContext.Provider>
  );
};

export function LinkedInPage() {
  const { login } = useLoginContext();

  return (

    <button onClick={login}>
        <FaLinkedinIn/> Login with LinkedIn
    </button>
  );
}
