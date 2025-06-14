import { useState } from 'react';
import AuthContainer from '../../components/auth/AuthContainer';
// import Copyright from '../../components/copyright/copyright';
// import Footer from '../../components/footer/footer';
// import NavBar from '../../components/nav/nav';
import { getAuthContent } from '../../utils/getAuthContent';
import { useNavigate } from 'react-router-dom';
import { useAuthOperations } from '../../API/api';
import { toast } from 'react-toastify';

function SigninPage() {
  const API_URL = import.meta.env.VITE_BASE_URL;
  const { handleLogin } = useAuthOperations();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const authContent = getAuthContent('signin');

  if (!authContent) {
    return <div>Content not found</div>;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await handleLogin(email, password); 
    if (result.success) {
      navigate('/individual');
    } else {
      toast.error(result.error || 'Login failed');
      setErrorMessage(result.error || 'An unexpected error occurred.'); 
    }
  };

  const handleGoogleSignIn = () => {
    window.location.href = `${API_URL}/auth/google`;
  };

  return (
    <div className="max-w-[1440px] bg-white">
      {/* <NavBar /> */}
      <AuthContainer
        {...authContent}
        handleSubmit={handleSubmit}
        handleGoogleSignIn={handleGoogleSignIn}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        showNameField={false}
        errorMessage={errorMessage}
         />
      {/* <Footer />
      <Copyright /> */}
    </div>
  );
}

export default SigninPage;