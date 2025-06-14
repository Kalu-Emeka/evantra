import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
function NavBar() {
  const { user, token, logout } = useAuth();
  const [nav, setNav] = useState(false);
  // const [dropdown, setDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPage = location.pathname;
  const showNav = () => {
    setNav(!nav);
  };
  // const toggleDropdown = () => {
  //   setDropdown(!dropdown);
  // };

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <>
      <div className="fixed w-full z-[1000] p-[5px] py-2 bg-white">
        <nav className="flex justify-between items-center my-[7px] mx-20 h-10 pb-13 sm:pl-[10px] sm:mx-4 md:mx-2 lg:mx-20 *:capitalize">
          <div className="flex justify-between items-center sm:w-full md:w-full lg:w-[20%]">
            <div className="flex items-center">
                <img
                  className="w-[20%] sm:w-[40%] md:w-[50%] lg:w-[50%]"
                  src="/assets/icons/Logo.webp"
                  alt=""
                />
            </div>
            <div
              className="hidden sm:flex md:flex lg:hidden sm:justify-center md:justify-center"
              onClick={showNav}
            >
              {!nav ? (
                <img
                  className="cursor-pointer sm:w-[45%] md:w-[40%]"
                  src="/assets/icons/menu.webp"
                  alt=""
                />
              ) : (
                <img
                  className="cursor-pointer sm:w-[45%] md:w-[40%]"
                  src="/assets/icons/close.webp"
                  alt=""
                />
              )}
            </div>
          </div>
          <ul className="flex justify-between items-center text-[14px] space-x-12  sm:hidden md:hidden lg:flex">
            <li className="text-center text-md">
              <Link className="hover:text-[#3E4654] pr-3" to="/organisation">
                Home
              </Link>
            </li>
            <li className="text-center text-md">
              <Link className="hover:text-[#3E4654] pr-3" to="/individual">
                About us
              </Link>
            </li>
            <li className="text-center text-md">
              <Link className="hover:text-[#3E4654] pr-3" to="/faq">
                Employers
              </Link>
            </li>
            <li className="text-center text-md">
              <Link className="hover:text-[#3E4654] pr-3" to="/about-us">
                Talents
              </Link>
            </li>
          </ul>
          <div className="text-[16px] flex sm:hidden md:hidden lg:flex">
            {user && token ? (
              <button
                onClick={handleLogout}
                className={`${
                  currentPage === '/signinPage'
                } px-[40px] py-[5px] bg-transparent text-black capitalize`}
                type="button"
              >
                log out
              </button>
            ) : (
              <Link to="/signinpage" rel="noopener noreferrer">
                <button
                  className={`${
                    currentPage === '/signinPage'
                  } px-[25px] py-[5px] text-[15px] text-[#28809A] border-[#28809A] bg-[#E2E7EA] capitalize rounded-md border mr-[10px]`}
                  type="button"
                >
                  Log in
                </button>
              </Link>
            )}

            <Link
              className={`${user && token ? 'hidden' : 'block'}`}
              to="/signuppage"
              rel="noopener noreferrer"
            >
              <button
                className={`${
                  currentPage === '/signuppage'
                } px-[25px] py-[5px] rounded-md bg-[#0D647E] text-white  text-[15px]`}
                type="button"
              >
                Sign up
              </button>
            </Link>
          </div>
          <div
            className={
              !nav
                ? 'fixed left-[-100%]'
                : 'fixed left-0 top-0 w-[40%] text-black mt-[76px] h-full bg-[#E4E4E4] shadow-md ease-in-out duration-500 sm:w-[80%] md:w-[40%] lg:hidden'
            }
          >
            <ul className="uppercase w-full p-12 space-y-6 sm:pl-[20px] md:pl-[20px] lg:pl-0 sm:pb-[20px] md:pb-[20px] lg:pb-0">
              <li className="text-md">
                <Link
                  className="hover:text-[#0C394A] pr-3"
                  to="/"
                  onClick={showNav}
                >
                  Home
                </Link>
              </li>
              <li className="text-md">
                <Link
                  className="hover:text-[#0C394A] pr-3"
                  to="/"
                  onClick={showNav}
                >
                  About us
                </Link>
              </li>
              <li className="text-md">
                <Link
                  className="hover:text-[#0C394A]  pr-3"
                  to="/"
                  onClick={showNav}
                >
                  Employers
                </Link>
              </li>
              <li className="text-md">
                <Link
                  className="hover:text-[#0C394A] pr-3"
                  to="/about-us"
                  onClick={showNav}
                >
                  Talents
                </Link>
              </li>
            </ul>
            <div className='flex'>
                <div className=''>
                  <Link
                    className="text-[17px] pl-[20px]"
                    to="/signinpage"
                    onClick={showNav}
                    rel="noopener noreferrer"
                  >
                    <button className="px-[25px] py-[5px] rounded-md bg-[#0D647E] text-white  text-[15px]" type="button">
                      LOG IN
                    </button>
                  </Link>
                </div>
                <div className="text-[16px] pl-[20px]">
                  <Link
                    to="/signuppage"
                    onClick={showNav}
                    rel="noopener noreferrer"
                  >
                    <button
                      className="px-[25px] py-[5px] rounded-md bg-[#0D647E] text-white  text-[15px]"
                      type="button"
                    >
                      Sign up
                    </button>
                  </Link>
                </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default NavBar;
