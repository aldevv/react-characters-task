import { createContext, useContext, useState } from "react";

type User = {
  username: string;
};

export type AuthContextType = {
  user: User | undefined;
  isLoggedIn: boolean;
  setUser: (user: User) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};
export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  isLoggedIn: false,
  setUser: () => { },
  setIsLoggedIn: () => { },
});

export const useAuth = (): AuthContextType => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
