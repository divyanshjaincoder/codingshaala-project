import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Sample data for testing
export const sampleUsers = [
  {
    id: 'user-1',
    email: 'student1@example.com',
    password: 'password123',
    name: 'Alex Kumar',
    phone: 9630709988,
    status: "new",
    testStatus: 'not_taken', // 'not_taken', 'completed', 'in_progress'
    testScore: null,
    testResult: null, // 'passed', 'failed', null
    paymentStatus: 'pending', // 'pending', 'completed'
    internshipDetails: {
      startDate: '2024-01-15',
      duration: '6 months',
      classesCompleted: 0,
      totalClasses: 48,
      projectSubmitted: false
    }
  },
  {
    id: 'user-2',
    email: 'student2@example.com',
    password: 'password123',
    status: "new",
    phone: 9630709918,

    name: 'Priya Sharma',
    testStatus: 'completed',
    testScore: 85,
    testResult: 'passed',
    paymentStatus: 'completed',
    internshipDetails: {
      startDate: '2024-01-15',
      duration: '6 months',
      classesCompleted: 12,
      totalClasses: 48,
      projectSubmitted: false
    }
  },
  {
    id: 'user-3',
    phone: 9630709980,
    email: 'student3@example.com',
    password: 'password123',
    status: "new",
    name: 'Rahul Patel',
    testStatus: 'completed',
    testScore: 45,
    testResult: 'failed',
    paymentStatus: 'pending',
    internshipDetails: {
      startDate: null,
      duration: '6 months',
      classesCompleted: 0,
      totalClasses: 48,
      projectSubmitted: false
    }
  }
];

export interface User {
  id: string;
  email: string;
  name: string;
  testStatus: 'not_taken' | 'completed' | 'in_progress';
  testScore: number | null;
  testResult: 'passed' | 'failed' | null;
  paymentStatus: 'pending' | 'completed';
  internshipDetails: {
    startDate: string | null;
    duration: string;
    classesCompleted: number;
    totalClasses: number;
    projectSubmitted: boolean;
  };
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('codingshaala_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    const foundUser = sampleUsers.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      const userForState = userWithoutPassword as User;
      
      setUser(userForState);
      setIsAuthenticated(true);
      localStorage.setItem('codingshaala_user', JSON.stringify(userForState));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('codingshaala_user');
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('codingshaala_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      updateUser,
      isAuthenticated
    }}>
      {children}
    </AuthContext.Provider>
  );
};