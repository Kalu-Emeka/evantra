import React from 'react';
import {  Link, useLocation } from 'react-router-dom';
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { div } from 'framer-motion/client';

interface AuthContainerProps {
  title: string;
  subtitle: string;
  alternateText: string;
  alternateLinkText: string;
  buttons: { label: string; icon: string }[];
  form: {
    inputLabel: string;
    inputLabelPass?: string; // Optional
    inputPlaceholder: string;
    buttonLabel: string;
    passwordLabel: string;
    passwordPlaceholder: string;
  };
  image: { src: string; alt: string };
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleGoogleSignIn: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  password: string;
  email: string;
  errorMessage: string;
  showNameField?: boolean;
}

const AuthContainer: React.FC<AuthContainerProps> = ({
  title,
  subtitle,
  alternateText,
  alternateLinkText,
  buttons,
  form,
  image,
  handleGoogleSignIn,
  handleSubmit,
  setName,
  setPassword,
  setEmail,
  name,
  password,
  errorMessage,
  email,
  showNameField = false,
}) => {
  const location = useLocation();
  const isSignInPage = location.pathname === '/signinpage';
  const isSignUpPage = location.pathname === '/signuppage';
  const [isSignUpPages, setIsSignUpPage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const handleToggle = () => {
    setIsSignUpPage((prevState) => !prevState);
  };
  return (
    <main className="">
      <div className={`${isSignUpPage ? "flex justify-between flex-col lg:flex-row items-start" : "flex justify-between flex-col lg:flex-row-reverse items-start"}`}>
        <div className={`flex flex-col justify-center sm:hidden lg:flex ${isSignUpPage ? "signup-background" : "signin-background"}`}>
          <div className=''>
            <img className={`${isSignUpPage ? "w-[1.5%] absolute top-[10px] left-[1%]" : "w-[1.5%] absolute top-[10px] left-[97%]"}`} src="/assets/icons/Image.webp" alt="" />
          </div>
          <div className='flex justify-center items-center flex-col'>
            <h2 className='text-white text-[30px] font-bold'> {isSignUpPage ? "Welcome Back!" : "New Here?"}</h2>
            <p className='text-white text-[13px] w-[40%] text-center'>{isSignUpPage ? "To keep connected with us please log in with your personal info" : "Sign up and discover a great amount of new opportunities!"}</p>
            <button onClick={handleToggle} className='bg-white text-[13px] mt-[20px] px-[30px] py-[7px] rounded-[50px] w-[20%] text-black'><Link to={`${isSignInPage && "/signuppage" || isSignUpPage && "/signinpage"}`}><span>{alternateLinkText}</span></Link></button>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center h-[100vh] w-[50%] sm:w-full lg:w-[50%]'>
          <div>
            <img className={`${isSignUpPage ? "w-[10%] ml-[20px] mt-[10px] absolute top-[10px] left-[88%] sm:left-[30%] lg:left-[1%] sm:w-[30%] lg:w-[10%]" : "w-[10%] ml-[20px] mt-[10px] absolute top-[10px] left-[1%] sm:left-[30%] lg:left-[1%] sm:w-[30%] lg:w-[10%]"}`} src="/assets/icons/Logo.webp" alt="" />
          </div>
          <div className='flex justify-center items-center w-full flex-col'>
            <h2 className={`${isSignUpPage ? "text-[#0D647E] font-bold text-[30px] mb-[10px] sm:text-[#0D647E] lg:text-[#0D647E]" : "text-[#202121] font-bold text-[30px] mb-[10px] sm:text-[#0D647E] lg:text-[#0D647E]"}`}>{isSignUpPage ? "Create Account" : "Login to Your Account"}</h2>
            <div className='flex justify-center'>
              <img className='w-[7%] mr-[10px] cursor-pointer' src="/assets/icons/app-fb-auth → Link.webp" alt="" />
              <img className='w-[7%] mr-[10px] cursor-pointer' src="/assets/icons/app-g-auth → Link.webp" alt="" onClick={() => {handleGoogleSignIn}} />
              <img className='w-[7%] cursor-pointer' src="/assets/icons/app-ln-auth → Link.webp" alt="" />
            </div>
          </div>
          <div className='flex justify-center items-center mt-[15px] w-[50%]'>
            <hr className='h-[1.5px] bg-[#E1EAE7] w-[80%] mr-[10px]' />
            <p className='text-[14px] font-medium'>OR</p>
            <hr className='h-[1.5px] bg-[#E1EAE7] w-[80%] ml-[10px]'/>
          </div>
          <p className='text-[#555A59] text-[14px] tracking-[1px]'>{isSignUpPage ? "Use your email for registration" : "Login using social network"}</p>
          <form className="w-full mt-[40px] flex justify-center items-center flex-col" onSubmit={handleSubmit}>
               <div className="mb-[10px] w-[60%] sm:w-[90%] lg:w-[60%]">
                 {isSignUpPage ? (
                      <div
                          onClick={() => document.getElementById('username')?.focus()}
                        className="bg-[#EEF5F3] mb-[10px] rounded-md"
                        >
                          <input
                            type="text"
                            id="username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                              className="bg-[#EEF5F3] outline-none px-[20px] py-[9px] rounded-md text-[14px]"
                              required
                              placeholder='Name'
                            />
                    </div>
                  ) : (
                    <div></div>
                  )}
                 <div
                  onClick={() => document.getElementById('email')?.focus()}
                  className="bg-[#EEF5F3] rounded-md"
                >
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#EEF5F3] outline-none px-[20px] py-[9px] rounded-md text-[14px]"
                    placeholder='Email'
                  />
                </div>
              </div>
              <div className={`${isSignUpPage ? "mb-[10px] w-[60%] sm:w-[90%] lg:w-[60%]" : "bg-[#EEF5F3] mb-[10px] w-[60%] rounded-md sm:w-[90%] lg:w-[60%]"}`}>
                <div
                  onClick={() => document.getElementById('password')?.focus()}
                  className="relative"
                >
                  {isSignUpPage ? (
                    <div className='flex flex-col gap-2'>
                        <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[#EEF5F3] outline-none px-[20px] py-[9px] rounded-md text-[14px]"
                        placeholder='Password'
                      />
                      <input
                        type={confirmPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[#EEF5F3] outline-none px-[20px] py-[9px] rounded-md text-[14px]"
                        placeholder='Confirm Password'
                      />
                       <button
                      type="button"
                      onClick={() => setConfirmPassword(!confirmPassword)}
                      className="absolute right-6 top-20 text-gray-500 sm:top-[60px] md:top-[60px] lg:top-[60px]"
                      >
                          {confirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  ) : (
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[#EEF5F3] outline-none px-[20px] py-[9px] rounded-md text-[14px]"
                        placeholder='Password'
                      />
                  )}
                  
                  <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-6 top-10 text-gray-500 sm:top-[10px] md:top-[10px] lg:top-3"
                      >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                  {/* <div
                    className={`absolute z-[2] top-2 left-5 font-neuzeit font-light text-[18px] text-[rgba(0,0,0,0.5)] leading-[20.7px] transition-all duration-200 ${password ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                  >
                    {form.passwordPlaceholder}
                  </div> */}
                </div>
              </div>
              <button className="text-[13px] bg-[#0D647E] text-white px-[30px] py-[8px] w-[20%] rounded-[50px] sm:w-[30%] lg:w-[20%]">
              {form.buttonLabel}
            </button>
            {errorMessage && (
              <div className="text-red-500 text-left mt-4 text-[13px]">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
        {/* <div className="mb-20 lg:mb-0 lg:w-[40%] xl:w-[483px] lg:sticky xl:left-[85px] lg:top-[150px]">
          <img src={image.src} className="w-full" alt={image.alt} />
        </div> */}
        {/* <img src={image.src} className="w-[55%]" alt={image.alt} />
        <div className="ml-auto flex flex-col justify-center items-center bg-white shadow-custom w-full lg:w-[55%]  xl:w-[635px] pb-8 pt-[41px] px-3 lg:px-[36px] rounded-lg">
          <div className="flex w-full flex-col md:flex-row md:justify-between items-center">
            <div className="text-center lg:w-[450px] xl:w-[307px] lg:text-left">
              <h1 className="text-[rgba(4,15,32,1)] lg:pr-40 text-center md:text-left font-neuzeit text-[28.1px] font-light leading-[32.31px]">
                {title}
              </h1>
              <p className="pt-3 lg:pr-24 xl:pr-0 text-[rgba(34,0,21,0.5)] font-neuzeit font-light text-[18px] text-center md:text-left leading-[20.7px]">
                {subtitle}
              </p>
            </div> */}
            {/* <p className="text-[#070005] xl:w-[280px] font-neuzeit text-[18px] font-light leading-[20.7px]">
              <span>{alternateText}</span>{' '}
              <Link to={`${isSignInPage && "/signuppage" || isSignUpPage && "/signinpage"}`}><span className="text-[#C8A6CF]">{alternateLinkText}</span></Link>
            </p> */}
          {/* </div> */}
          {/* <div className="mt-[37px] w-full">
            {buttons.map((button, index) => (
              <button
                onClick={handleGoogleSignIn}
                key={index}
                className={`flex justify-center items-center w-full h-[53.96px] bg-white rounded-[5.64px] border border-[#F2EAF4] text-black gap-4 sm:gap-[23.04px] ${index === 0 ? 'mb-[23.04px]' : ''}`}
              >
                <span className="font-neuzeit text-base text-[rgba(0,0,0,0.5)] md:text-[28.1px] font-light leading-[32.31px]">
                  {button.label}
                </span>
                <img
                  className="w-[40px] h-[40px]"
                  src={button.icon}
                  alt={`${button.label} icon`}
                />
              </button> */}
          {/* ))} */}
          {/* // </div>
          // <div className="w-full flex items-center gap-6 mt-[40.04px]">
          //   <div className="w-1/2 h-[1px] bg-[rgba(34,0,21,0.5)]"></div>
          //   <span className="text-[rgba(0,0,0,0.5)] font-neuzeit text-[18px] leading-[25px]">
          //     Or
          //   </span>
          //   <div className="w-1/2 h-[1px] bg-[rgba(34,0,21,0.5)]"></div>
          // </div>
          // <form className="w-full mt-[40px]" onSubmit={handleSubmit}>
          //   <div className="w-full">
          //     {showNameField && ( */}
          {/* //       <div className="mb-[20px]">
          //         <p className="text-[rgba(0,27,54,1)] font-neuzeit font-light text-[12.69px] pb-2 leading-[14.59px]">
          //           Input Name
          //         </p>
          //         <div */}
          {/* //           onClick={() => document.getElementById('username')?.focus()}
          //           className="relative pl-4 h-[53.96px] rounded-[5.64px] border border-[#F2EAF4] flex items-center justify-center"
          //         >
          //           <input
          //             type="text"
          //             id="username"
          //             value={name}
          //             onChange={(e) => setName(e.target.value)}
          //             className="bg-white outline-none border-none h-full w-full"
          //             required
          //           />
          //           <div
          //             className={`absolute top-2 left-5 font-neuzeit font-light text-[18px] text-[rgba(0,0,0,0.5)] leading-[20.7px] transition-all duration-200 ${name ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          //           >
          //             Enter your full name
          //           </div>
          //         </div>
          //       </div>
              // )}
              // <div className="mb-[20px]">
              //   <p className="text-[#001B36] font-neuzeit text-[12px] pb-2 leading-[14px]">
              //     {form.inputLabel}
              //   </p>
              //   <div
              //     onClick={() => document.getElementById('email')?.focus()}
              //     className="relative z-30 pl-4 h-[53.96px] rounded-[5.64px] border border-[#F2EAF4] flex items-center justify-center"
              //   >
              //     <input
              //       type="email"
              //       id="email"
              //       value={email}
              //       onChange={(e) => setEmail(e.target.value)}
              //       className="bg-white outline-none w-full p-3 rounded-lg border-none"
              //     />
              //     <div
              //       className={`absolute z-[2] top-2 left-5 font-neuzeit font-light text-[18px] text-[rgba(0,0,0,0.5)] leading-[20.7px] transition-all duration-200 ${email ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              //     >
              //       {form.inputPlaceholder}
              //     </div>
              //   </div>
              // </div>
              // <div className="mb-[20px]">
              //   <p className="text-[#001B36] font-neuzeit text-[12px] pb-2 leading-[14px]">
              //     Input password
              //   </p>
              //   <div
              //     onClick={() => document.getElementById('password')?.focus()}
              //     className="relative pl-4 h-[53.96px] rounded-[5.64px] border border-[#F2EAF4] flex items-center justify-center"
              //   >
              //     <input
              //       type="password"
              //       id="password"
              //       value={password}
              //       onChange={(e) => setPassword(e.target.value)}
              //       className="bg-white outline-none w-full p-3 rounded-lg border-none"
              //     />
              //     <div
              //       className={`absolute z-[2] top-2 left-5 font-neuzeit font-light text-[18px] text-[rgba(0,0,0,0.5)] leading-[20.7px] transition-all duration-200 ${password ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              //     >
              //       {form.passwordPlaceholder}
              //     </div>
              //   </div>
              // </div> */}
              {/* {errorMessage && (
                <div className="text-red-500 text-left mt-4">
                  {errorMessage}
                </div>
              )}
            </div>
            <div className={`${!isSignInPage ? 'hidden' : 'block'} mt-[20px]`}>
              <a href="">Forgot Password?</a>
            </div>
            <button className="bg-custom-gradient text-white h-[36px] px-12 md:px-24 mt-[33px] md:mb-[50px] rounded-md md:rounded-xl font-light text-[16px] leading-[20.7px] sm:text-[18px]">
              {form.buttonLabel}
            </button>
          </form>
        </div> */}
      </div>
    </main>
  );
};

export default AuthContainer;
