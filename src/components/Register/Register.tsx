import React, { FC, useState } from "react";

interface Props {
  name: string;
  email: string;
  password: string;
  onRegister: (name: string, email: string, password: string) => void;
}

export const Register: FC<Props> = ({ name, email, password, onRegister }) => {
  const [inputName, setInputName] = useState(name);
  const [inputEmail, setInputEmail] = useState(email);
  const [inputPassword, setInputPassword] = useState(password);

  const handleRegister = () => {
    onRegister(inputName, inputEmail, inputPassword);
  };

  return (
    <div>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};
