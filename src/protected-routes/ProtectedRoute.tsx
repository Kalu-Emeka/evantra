import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { user, token } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation to check user/token
    const checkAuth = async () => {
      if (user && token) {
        setLoading(false); // Authenticated
      } else {
        setLoading(false); // Not authenticated
      }
    };

    checkAuth();
  }, [user, token]);

  if (loading) {
    return (
      <div className="h-full mt-[150px] flex flex-col items-center justify-center">
        <h1 className="text-[#2E2EA3] text-sm">Loading...</h1>
      </div>
    );
  }

  return user && token ? <Outlet /> : <Navigate to="/signinpage" />;
};

export default ProtectedRoute;
