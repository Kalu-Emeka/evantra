import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import CareerNav from "../../components/careerVerification/careerNav"
import CarreerSidebar from "../../components/careerVerification/careerSidebar"
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
function CareerSettings () {
    const { token, logout } = useAuth(); // Extract token from AuthContext
    const [userData, setUserData] = useState<{ name: string; email: string } | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
      const fetchUserDetails = async () => {
        if (!token) return;
  
        try {
          const response = await axios.get("https://veritalent-backend.azurewebsites.net/api/user/", {
            headers: { Authorization: `Bearer ${token}` },
          });
          const user = response.data.data; // Extract user details correctly
          setUserData(user);
          localStorage.setItem("userData", JSON.stringify(user));
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };
  
      fetchUserDetails();
    }, [token]);
    const handleSignOut = () => {
        logout(); // Clears user data and token from local storage
        navigate("/"); // Redirect to homepage
    };
    const handleDeleteAccount = async () => {
        if (!token) return;
    
        const confirmDelete = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
        if (!confirmDelete) return;
    
        try {
          await axios.delete("https://veritalent-backend.azurewebsites.net/api/user/", {
            headers: { Authorization: `Bearer ${token}` },
          });
          logout(); // Clear user session after account deletion
          navigate("/"); // Redirect to homepage
        } catch (error) {
          console.error("Error deleting account:", error);
        }
      };
    return (
        <>
            <CareerNav/>
            <CarreerSidebar/>
            <section>
            <div className="flex w-[83%] absolute left-[17%] pl-[20px] pt-[90px] pb-[20px] bg-[#F9EDF7]">
                <div className="flex justify-start items-center pl-[20px]">
                    <img className="w-[7%] mr-[20px]" src="/src/assets/icons/advert.webp" alt="" />
                    <h2>Appear as credible as you should. Get a verified  CV-Report today</h2>
                </div>
                <button className="bg-[#794C9F] text-white px-[20px] py-[3px] w-[25%] rounded-md">Activate Career Report</button>
            </div>
        </section>
        <div className="relative w-full">
            <img className="absolute left-[85%] ml-[10px] top-[130px] w-[5%] object-contain" src="/src/assets/icons/Group 97.webp" alt="" />
        </div>
        <section className="relative w-full">
            <div className="flex absolute left-[20%] ml-[10px] top-[200px]">
                <img className="w-[12%] object-contain" src="/assets/icons/Ellipse 13.webp" alt="" srcSet="" />
                <div className="ml-[20px] mt-[5px]">
                {userData ? (
                    <>
                        <h2>{userData.name}</h2>
                        <p className="text-[#22001580]">{userData.email}</p>
                    </>
                    ) : (
                    <h2>Loading user data...</h2>
                )}
                </div>
            </div>
            <div className="absolute w-[70%] left-[21%] ml-[10px] top-[300px]">
                <h2 className="font-bold">Language</h2>
                <hr className="w-[70%] mt-[10px]"/>
                <div className="mt-[10px] pl-[120px]">
                    <h2>English</h2>
                    <p className="text-[#22001580]">change language</p>
                </div>
                <h2 className="font-bold">Theme</h2>
                <hr className="w-[70%] mt-[10px]"/>
                <div className="mt-[10px] pl-[120px] flex">
                    <h2>Light Mode</h2>
                    <img className="w-[3%] ml-[10px] cursor-pointer" src="/assets/icons/toggle on 4.webp" alt="" />
                </div>
                <div className="mt-[10px] pl-[120px] flex">
                    <h2>Dark Mode</h2>
                    <img className="w-[3%] ml-[10px] cursor-pointer" src="src/assets/icons/toggle on 2.webp" alt="" />
                </div>
                <h2 className="font-bold">Account</h2>
                <hr className="w-[70%] mt-[10px]"/>
                <div className="mt-[10px] pl-[120px]">
                    <li className="list-none mb-[5px]">
                    <button onClick={handleSignOut} className="hover:text-[#794C9F] hover:font-bold">
                        Sign Out
                    </button>
                    </li>
                    <li className="list-none mb-[5px]">
                        <Link className="hover:text-[#794C9F] hover:font-bold" to="/">Sign Up As An Organization</Link>
                    </li>
                    <li className="list-none mb-[5px]">
                        <button onClick={handleDeleteAccount} className="text-red-600 hover:text-red-800 hover:font-bold">
                            Delete Account
                        </button>
                    </li>
                </div>
            </div>
        </section>
        </>
    )
}
export default CareerSettings