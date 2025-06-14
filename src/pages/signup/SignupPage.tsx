import { useState } from 'react';
import AuthContainer from '../../components/auth/AuthContainer';
import { authData } from '../../constants/authContent';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthOperations } from '../../API/api';

function SignupPage() {
   const { handleSignup } = useAuthOperations();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const authContent = authData.find((item) => item.type === 'signup');

  if (!authContent) {
    return <div>Content not found</div>;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email && !password && !name) {
      toast.error('Name, Email and password are required');
      setErrorMessage('Name, Email and password are required');
      return;
    }

    if (!name) {
      toast.error('Name is required');
      setErrorMessage('Name is required');
      return;
    }

    if (!email) {
      toast.error('Email is required');
      setErrorMessage('Email is required');
      return;
    }
    if (!password) {
      toast.error('Password is required');
      setErrorMessage('Password is required');
      return;
    }

    if (password.length < 8) {
      toast.error('Password must be at least 8 characters long');
      setErrorMessage('Password must be at least 8 characters long');
      return;
    }

    const result = await handleSignup(name, email, password);

    if (result.success) {
      navigate('/individual');
      toast.success('Signup successful');
    } else {
      toast.error(
        result?.error || 'An unexpected error occurred. Please try again.'
      );
      setErrorMessage(
        result?.error || 'An unexpected error occurred. Please try again.'
      );
    }
  };

  return (
    <div className="max-w-[1440px] bg-[rgba(255,255,255,1)]">
      {/* <NavBar /> */}
      <AuthContainer
        {...authContent}
        handleSubmit={handleSubmit}
        handleGoogleSignIn={() => {}} 
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        showNameField={true}
        errorMessage={errorMessage}
      />
      {/* <Footer />
      <Copyright /> */}
    </div>
  );
}

export default SignupPage;
