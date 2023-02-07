import React, { FC, useState } from "react";

interface Props {
  email: string;
  password: string;
  onLogin: (email: string, password: string) => void;
}

export const Login: FC<Props> = ({ email, password, onLogin }) => {
  const [inputEmail, setInputEmail] = useState(email);
  const [inputPassword, setInputPassword] = useState(password);

  const handleLogin = () => {
    onLogin(inputEmail, inputPassword);
  };

  return (
    <div>
      <input
        type="email"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <input
        type="password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
