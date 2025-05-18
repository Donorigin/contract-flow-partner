
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type AuthGuardProps = {
  children: React.ReactNode;
};

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user');
    
    if (token && user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    
    setIsLoading(false);
  }, []);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-muvad-blue"></div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Render protected content if authenticated
  return <>{children}</>;
};

export default AuthGuard;
