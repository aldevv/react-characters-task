import { FC } from "react";
import { AuthContextType } from "./auth";

type Form = {
  username: string;
  password: string;
};

export const Login: FC<AuthContextType> = ({ setUser, setIsLoggedIn }) => {
  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // logic to check if credentials are true
    //...
    //
    setIsLoggedIn(true);
    const formData = new FormData(e.currentTarget);
    const form = Object.fromEntries(formData) as Form;

    setUser({ username: form.username });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
