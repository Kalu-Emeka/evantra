import { useState, useEffect } from "react";
import axios from "axios";
import CvPreview from "../upload documents/CvPreview";
import { useAuth } from "../../context/AuthContext";
function CareerForm () {
    const { token } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        birthDate: "",
        gender: "",
        phoneNumber: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [userData, setUserData] = useState<{ name: string; email: string } | null>(null); 
     useEffect(() => {
        const fetchUserData = async () => {
            if (!token) {
                setError("Unauthorized. Please log in.");
                return;
            }

            try {
                const response = await axios.get("https://veritalent-backend.azurewebsites.net/api/user/", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                const fetchedData = response.data?.data;

                if (fetchedData) {
                    setFormData((prevData) => ({
                        ...prevData,
                        ...fetchedData,
                    }));
                    setUserData(fetchedData);
                }

            } catch (error) {
                console.error("Error fetching user data:", error);
                setError("Failed to load profile data. Please try again.");
            }
        };

        fetchUserData();
    }, [token]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        if (!token) {
            setError("Unauthorized. Please log in.");
            setLoading(false);
            return;
        }
        try {
                const response = await axios.patch(
                  "https://veritalent-backend.azurewebsites.net/api/user/",
                  formData,
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                      "Content-Type": "application/json",
                    },
                  }
                );
                setSuccess("Profile created successfully!");
                setUserData(response.data?.data || null);
                setFormData({
                name: "",
                email: "",
                birthDate: "",
                gender: "",
                phoneNumber: "",
              });
            } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    console.error("Full error response:", error.response);
                    setError(`Failed to submit profile: ${error.response.data.message || "Please try again."}`);
                } else {
                    console.error("Unexpected error:", error);
                    setError("An unexpected error occurred. Please try again.");
                }
            } finally {
              setLoading(false);
        }
    };

    return (
        <>
            <section className="relative w-full">
                <div className="absolute flex justify-between pl-[24px] mt-[20px] left-[16%] top-[460px]">
                    <div className="bg-[#F9EDF7] w-[90%]">
                        <div className="flex bg-[#EDEDED] pb-[10px] justify-between">
                            <h2 className="pl-[30px] pt-[10px]">Personal Information</h2>
                            <img className="w-[4%] pt-[20px] object-contain mr-[30px]" src="/src/assets/icons/Group 89.webp" alt="" />
                        </div>
                        <div className="mr-[10px]">
                            <form onSubmit={handleSubmit} className="mt-[20px] pl-[20px] pb-[50px]">
                                <div className="flex justify-between w-[95%]">
                                    <div className="flex flex-col w-[99%]">
                                        <label htmlFor="" className="mb-[10px]">Full Name</label>
                                        <input className="px-[20px] py-[7px] bg-[#794C9F] rounded-md bg-transparent border border-2 outline-[#794C9F]" type="text" name="name" value={formData.name} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="flex justify-between w-[95%] mt-[30px]">
                                    <div className="flex flex-col w-[60%]">
                                        <label htmlFor="" className="mb-[10px]">Email Address</label>
                                        <input className="px-[20px] py-[7px] bg-[#794C9F] rounded-md bg-transparent border border-2 outline-[#794C9F]" type="email" name="email" value={formData.email} onChange={handleChange} required/>
                                    </div>
                                    <div className="flex flex-col w-[60%] ml-[30px]">
                                        <label htmlFor="" className="mb-[10px]">Date Of Birth</label>
                                        <input 
                                            className="px-[20px] py-[7px] rounded-md bg-transparent border border-2 outline-[#794C9F]" 
                                            type="text" 
                                            placeholder={!formData.birthDate ? "MM/DD/YYYY" : ""} 
                                            name="birthDate" 
                                            value={formData.birthDate ? new Date(formData.birthDate).toLocaleDateString('en-US') : ""} 
                                            onChange={handleChange} 
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between w-[95%] mt-[30px]">
                                    <div className="flex flex-col w-[60%]">
                                        <label htmlFor="" className="mb-[10px]">Gender</label>
                                        <select name="gender" value={formData.gender} className="px-[20px] py-[7px] bg-[#794C9F] rounded-md bg-transparent border border-2 outline-[#794C9F]" onChange={handleChange} required>
                                            <option value="" disabled>Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-start items-center">
                                    <div className="flex mt-[40px] w-[5%]">
                                        <h2 className="font-bold">+234</h2>
                                        <img className="w-[50%] object-contain ml-[5px]" src="/src/assets/icons/DROPDOWN 1.webp" alt="" />
                                    </div>
                                    <div className="flex flex-col w-[40%] ml-[30px] mt-[30px]">
                                        <label htmlFor="" className="mb-[10px]">Mobile No</label>
                                        <input className="px-[20px] py-[7px] rounded-md bg-transparent border border-2 outline-[#794C9F]" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required  />
                                    </div>
                                </div>
                                <button
                                type="submit"
                                className="text-[#22001580] w-[90%] px-[20px] py-[5px] bg-white rounded-md border border-[#974E9F] mt-[30px]"
                                disabled={loading}
                                >
                                    {loading ? "Submitting..." : "Submit Entry for Verification"}
                                </button>
                                {error && <p className="text-red-500 mt-2">{error}</p>}
                                {success && <p className="text-green-500 mt-2">{success}</p>}
                            </form>
                        </div>
                    </div>
                   <CvPreview/>
                </div>  
            </section>
        </>
    )
}
export default CareerForm