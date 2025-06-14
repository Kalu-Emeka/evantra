import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Error404 from '../assets/images/undraw_page-not-found_6wni 1.webp';
import NavBar from '../components/nav/nav';

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, [navigate]);

  return (
    <>
      <NavBar />
      <div className="h-screen bg-white flex flex-col justify-center items-center">
        <h1 className="font-light text-[18px] leading-[20.7px] mt-[102px]">
          Page not found
        </h1>

        <div className="relative h-[377px] flex flex-col justify-center items-center lg:w-[884px]">
          <img className="z-30" src={Error404} alt="Page not found 404 " />
          <div className="w-full bg-[#F9EDF7] h-[220px] absolute z-10 bottom-0 left-0"></div>
        </div>
        <Link
          to="/"
          className="px-6 py-3 bg-[rgba(151,78,159,1)] text-white rounded-md mt-16 transition duration-300 ease-in-out shadow-md text-xl font-semibold"
        >
          Go Back
        </Link>
      </div>
    </>
  );
};

export default Error;
