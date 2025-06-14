import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export function useAuthOperations() {
  const auth = useAuth();

  const handleLogin = async (email: string, password: string) => {
    try {
      if (!email || !password) {
        return { success: false, error: 'Please provide both email and password.' };
      }

      const response = await axios.post(
        'https://veritalent-backend.azurewebsites.net/api/auth/login',
        { email, password },
        { withCredentials: true } 
       ); 
      const { data: token, message } = response.data; 
      
      if (token) {
        const payload = JSON.parse(atob(token.split('.')[1])); 
        localStorage.setItem("userId", payload.id); 
        localStorage.setItem("token", token); 
        auth.login({
          id: payload.id,
          name: payload.name,
          email: payload.email,
          role: payload.role,
        }, token);
        
        return { 
          success: true, 
          message: message || 'Login successful',
          user: payload 
        };
      } else {
        return { success: false, error: 'Login response does not contain a valid token' };
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        
        return { 
          success: false, 
          error: err.response?.data?.message || 'Login failed. Please check your credentials.'
        };
      } else {
        
        return { success: false, error: 'An unexpected error occurred during login.' };
      }
    }
  };

  const handleSignup = async (name: string, email: string, password: string) => {
    try {
      const response = await axios.post(`https://veritalent-backend.azurewebsites.net/api/auth/register`, { name, email, password },  { withCredentials: true } );
     
      const token = response.data?.Objectdata || response.data?.data?.token;
      const message = response.data?.message;
  
      if (typeof token === 'string' && token.includes('.')) {
        const payload = JSON.parse(atob(token.split('.')[1])); 
  
        auth.login({
          id: payload.id,
          name: payload.name,
          email: payload.email,
          role: payload.role,
        }, token);
        
        return { 
          success: true, 
          message: message || 'Signup successful',
          user: payload
        };
      } else {
        return { success: false, error: 'Signup response does not contain a valid token' };
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
      
        return {
          success: false,
          error: err.response?.data?.message || 'Signup failed'
        };
      } else {;
        return { success: false, error: 'An unexpected error occurred during signup.' };
      }
    }
  };
  
  return { handleLogin, handleSignup };
}
