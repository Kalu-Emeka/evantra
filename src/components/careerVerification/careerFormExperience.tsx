import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import CvPreview from "../upload documents/CvPreview";
function CareerFormExperience () {
    const [careerHighlightId, setCareerHighlightId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        organization: "",
        title: "",
        startDate: "",
        description: "",
        organizationEmail: "",
        contactPerson: "",
        contactPersonEmail: "",
    });
    const [user, setUserData] = useState<{ _id: string } | null>(null);
    const [existingExperience, setExistingExperience] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const token = localStorage.getItem("token");
    useEffect(() => {
        const fetchUserDetails = async () => {
          if (!token) return;
    
          try {
            const response = await axios.get("https://veritalent-backend.azurewebsites.net/api/user/", {
              headers: { Authorization: `Bearer ${token}` },
            });
            const user = response.data?.data;
            if (user && user._id) {
                setUserData({ _id: user._id });
            } else {
                console.error("User data structure is incorrect:", user);
            }

          } catch (error) {
            console.error("Error fetching user details:", error);
          }
        };
    
        fetchUserDetails();
      }, [token]);
      useEffect(() => { 
        const checkExistingExperience = async () => {
            if (!token || !user?._id) return;
    
            // const storedExperienceId = localStorage.getItem("careerHighlightId");
    
            // if (storedExperienceId) {
            //     setCareerHighlightId(storedExperienceId);
            //     setExistingExperience(true);
            //     return;
            // }
    
            // setExistingExperience(false);
            // setCareerHighlightId(null);
            try {
                const response = await axios.get("https://veritalent-backend.azurewebsites.net/api/user/", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                const user = response.data?.data;
                if (user && user._id) {
                    setUserData({ _id: user._id });
                    if (user.experience && user.experience.length > 0) {
                        const existingExperienceData = user.experience[0];
                        setCareerHighlightId(existingExperienceData._id);
                        setExistingExperience(true);
                    } else {
                        setExistingExperience(false);
                        setCareerHighlightId(null);
                    }
                } else {
                    console.error("User data structure is incorrect:", user);
                }
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
    
            if (user?._id) {
                checkExistingExperience();
            }
        };
       }, [user, token]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const  handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");
        console.log("📌 Experience ID Before PATCH:", careerHighlightId);

        if (!token) {
            setError("Unauthorized. Please log in.");
            setLoading(false);
            return;
        }
        if (!user || !user._id) {
            setError("User data not loaded. Please try again.");
            setLoading(false);
            return;
        }
        
        try {
            // if (!careerHighlightId) {
            //     const checkResponse = await axios.get(
            //         `https://veritalent-backend.azurewebsites.net/api/career-profile`,
            //         { headers: { Authorization: `Bearer ${token}` } }
            //     );
    
            //     if (checkResponse.data?.data.length > 0) {
            //         const existingExperience = checkResponse.data.data[0];
            //         setCareerHighlightId(existingExperience._id);
            //         localStorage.setItem("careerHighlightId", existingExperience._id);
            //         console.log("Found existing experience, switching to PATCH...");
            //     } else {
            //         console.log("No existing experience found, proceeding with POST...");
            //     }
            // }

            if (careerHighlightId) {
                const patchResponse = await axios.patch(
                    `https://veritalent-backend.azurewebsites.net/api/career-profile/${careerHighlightId}`,
                    formData,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                setSuccess("Experience details updated successfully!");
            } else {
                const postResponse = await axios.post(
                    `https://veritalent-backend.azurewebsites.net/api/career-profile`,
                    formData,
                    { headers: { Authorization: `Bearer ${token}`} }
                );
                setSuccess("Experience details submitted successfully!");
                setCareerHighlightId(postResponse.data.data._id);
            }
            setFormData({ organization: "", title: "", startDate: "", description: "" ,  organizationEmail: "", contactPerson: "", contactPersonEmail: "",});
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                console.error("Error Details:", err.response?.data);
                setError(err.response?.data?.message || "Something went wrong");
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="relative w-full">
            <div className="absolute flex bg-[#F9EDF7] justify-between pl-[2px] mt-[20px] left-[18%] top-[460px]">
                <div className="bg-[#F9EDF7] w-[80%]">
                    <div className="flex bg-[#EDEDED] pb-[10px] justify-between">
                        <h2 className="pl-[30px] pt-[10px]">Experience</h2>
                        <img className="w-[4%] pt-[20px] object-contain mr-[30px]" src="/src/assets/icons/Group 89.webp" alt="" />
                    </div>
                    <div className="mr-[10px] bg-white ml-[24px]">
                        <div className="flex justify-between bg-[#EDEDED] mt-[30px] mb-[20px] pl-[20px] px-[20px] py-[10px]">
                            <h2 className="font-bold">Category</h2>                                 
                            <img className="w-[3%]" src="/src/assets/icons/dropdown2 1.webp" alt="" />                            
                        </div>
                        <form onSubmit={handleSubmit}  className="pt-[20px] pl-[20px] pb-[50px]">
                            <h2 className="font-bold mb-[20px]">Experience</h2>

                            {/* Institution Name */}
                                <div className="flex flex-col w-[90%] mb-[20px] ">
                                    <label className="mb-[10px]">Organisation Name</label>
                                    <input
                                        className="px-[20px] py-[7px] bg-transparent border border-2 rounded-md outline-[#794C9F]"
                                        type="text"
                                        name="organization" 
                                        value={formData.organization} 
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            {/* Course of Study */}
                            <div className="flex flex-col w-[90%] mb-[20px]">
                                <label className="mb-[10px]">Postion held</label>
                                <input
                                    className="px-[20px] py-[7px] bg-transparent border border-2 rounded-md outline-[#794C9F]"
                                    type="text"
                                    name="title" 
                                    value={formData.title} 
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Year of Graduation */}
                            <div className="flex flex-col w-[40%] mb-[20px]">
                                <label className="mb-[10px]">Acheivements</label>
                                <input
                                    className="px-[20px] py-[7px] bg-transparent border border-2 rounded-md outline-[#794C9F]"
                                    type="text"
                                    name="description" 
                                    value={formData.description} 
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Other Details */}
                            <div className="flex flex-col w-[90%] mb-[20px]">
                                <label className="mb-[10px]">Start Date</label>
                                <input
                                    className="px-[20px] py-[7px] bg-transparent border border-2 rounded-md outline-[#794C9F]"
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate} 
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-[90%] mb-[20px]">
                                <label className="mb-[10px]">Organisation Email</label>
                                <input
                                    className="px-[20px] py-[7px] bg-transparent border border-2 rounded-md outline-[#794C9F]"
                                    type="email"
                                    name="organizationEmail"
                                    value={formData.organizationEmail} 
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-[90%] mb-[20px]">
                                <label className="mb-[10px]">Contact Person</label>
                                <input
                                    className="px-[20px] py-[7px] bg-transparent border border-2 rounded-md outline-[#794C9F]"
                                    type="text"
                                    name="contactPerson"
                                    value={formData.contactPerson} 
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-[90%] mb-[20px]">
                                <label className="mb-[10px]">Contact Person Email</label>
                                <input
                                    className="px-[20px] py-[7px] bg-transparent border border-2 rounded-md outline-[#794C9F]"
                                    type="email"
                                    name="contactPersonEmail"
                                    value={formData.contactPersonEmail} 
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="text-[#22001580] w-[90%] px-[20px] py-[5px] bg-white rounded-md border border-[#974E9F] mt-[30px]"
                            >
                                {loading ? "Submitting..." : "Submit Entry for Verification"}
                            </button>
                       
                            {success && <p className="text-green-500 mt-2">{success}</p>}
                            {error && <p className="text-red-500 mt-2">{error}</p>}
                        </form>
                    </div>
                </div>
                <CvPreview/>
            </div>
            </section>
        </>
    )
}
export default CareerFormExperience