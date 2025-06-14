import {useState, useEffect} from "react"  
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
function Wallet  ( ) {
    const { token } = useAuth();
    const [userData, setUserData] = useState<{
        walletBalance: string; 
    } | null>(null);
    
    useEffect(() => {
        const fetchUserDetails = async () => {
          if (!token) return;
    
          try {
            const response = await axios.get("https://veritalent-backend.azurewebsites.net/api/user/", {
              headers: { Authorization: `Bearer ${token}` },
            });
            setUserData({ walletBalance: response.data.data.walletBalance });
          } catch (error) {
            console.error("Error fetching user details:", error);
          }
        };
    
        fetchUserDetails();
      }, [token]);
    return (
        <>  
            <section className="relative w-full">
                <div className="absolute flex justify-between w-[80%] pl-[130px] left-[10%] top-[200px]">
                    <div className="flex">
                        <div className="pl-[30px] border border-black rounded-md px-[20px] py-[10px] pb-[10px]">
                            <div className="flex justify-between items-center">
                                <h2>Wallet Balance</h2>
                                <img className="w-[12%] cursor-pointer" src="/src/assets/icons/Vector (2).webp" alt="" />
                            </div>
                            <h2 className="mt-[20px] text-[40px]"> {userData?.walletBalance ?? 0}<span className="text-[20px]">.00</span></h2>
                        </div>
                        <h2 className="bg-[#794C9F] text-[50px] pt-[30px] text-white text-center font-medium ml-[30px] rounded-lg px-[25px]">+</h2>    
                    </div>
                </div>
            </section>
        </>
    )
}
export default Wallet