import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface UserData {
  name: string;
  email: string;
  role: string;
  id: {
    name: string;
    email: string;
    role: string;
    bio: string;
    profilePicture: string;
    subscriptionStatus: string;
    walletBalance: number;
    createdAt: string;
    updatedAt: string;
  };
}

interface AuthContextType {
  user: UserData | null;
  token: string | null;
  login: (userData: UserData, token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (userData: UserData, token: string) => {
    setUser(userData);
    setToken(token);
    sessionStorage.setItem('user', JSON.stringify(userData));
    sessionStorage.setItem('token', token);
  };

 
  const logout = () => {
    setUser(null);
    setToken(null);
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  };

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    const storedToken = sessionStorage.getItem('token');

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};