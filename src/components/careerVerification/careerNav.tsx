import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

  function CareerNav () {
    const {token} = useAuth();
    const [nav, setNav] = useState(false);
    const [userData, setUserData] = useState<{ name: string; email: string } | null>(() => JSON.parse(localStorage.getItem("userData") || "null"));

    useEffect(() => {
      const fetchUserDetails = async () => {
        if (!token) return; 
        try {
          const response = await axios.get(
            'https://veritalent-backend.azurewebsites.net/api/user/', 
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );
          setUserData(response.data.data);
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };

      fetchUserDetails();
    }, [token]); 
    const showNav = () => {
      setNav(!nav);
    };
    
    return (
      <>
        <div className="fixed w-full z-[1000] p-[5px] py-2 bg-[#FDFBF5] shadow-md">
          <nav className="flex justify-between items-center my-[7px] mx-20 h-10 pb-13 sm:mx-5 lg:mx-20 *:capitalize">
            <div className="flex justify-between items-center w-[100%] sm:w-[100%] md:w-[100%] lg:w-[20%] sm:justify-between lg:justify-between">
              <div className="">
                <Link to="/">
                  <img
                    className="w-[60%] sm:w-[45%] md:w-[30%] lg:w-[60%]"
                    src="/src/assets/icons/logo.webp"
                    alt=""
                  />
                </Link>
              </div>
              <div className="w-0 sm:w-[70%] md:w-8 lg:w-0" onClick={showNav}>
                {!nav ? (
                  <img
                    className="cursor-pointer w-[0%] sm:w-[70%] lg:w-[0%]"
                    src="/src/assets/icons/menu.webp"
                    alt=""
                  />
                ) : (
                  <img
                    className="cursor-pointer"
                    src="/src/assets/icons/close.webp"
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="text-[16px]">
              <Link className="flex justify-end items-center" to="/user" rel="noopener noreferrer">
                <img className='w-[4.5%] mr-[30px]' src="/src/assets/icons/NOTIFICATION 1.webp" alt="" />
                <img className='w-[4.5%] mr-[10px]' src="/src/assets/icons/user2.webp" alt="" />
                {userData ? <p className='text-[15px]'>{userData.name}</p> : "Loading..."}
              </Link>
            </div>
            <div
              className={
                !nav
                  ? 'fixed left-[-100%]'
                  : 'fixed left-0 top-0 w-[40%] text-black mt-[76px] h-full bg-[#E4E4E4] shadow-md ease-in-out duration-500 sm:w-[80%] md:w-[40%] lg:hidden'
              }
            >
              <div>
              </div>
              <div className="text-[16px] ">
                  <Link className="flex justify-end items-center" to="/signinPage" rel="noopener noreferrer">
                  <img className='w-[4.5%] mr-[30px]' src="/src/assets/icons/NOTIFICATION 1.webp" alt="" />
                  <img className='w-[4.5%] mr-[10px]' src="/src/assets/icons/user2.webp" alt="" />
                  {userData ? <p className='text-[15px]'>{userData.name}</p> : "Loading..."}
                  </Link>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
  export default CareerNav;
