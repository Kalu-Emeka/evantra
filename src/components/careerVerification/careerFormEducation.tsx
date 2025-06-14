import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import CvPreview from "../upload documents/CvPreview";
function CareerFormEducation() {
    const [educationId, setEducationId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        institution: "",
        course: "",
        graduationYear: "",
        highlights: [] as string[],
    });
    const [user, setUserData] = useState<{ _id: string } | null>(null);
    const [loading, setLoading] = useState(false);
    const [existingEducation, setExistingEducation] = useState(false);
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
        const checkExistingEducation = async () => {
            if (!token || !user?._id) return;
            
            try {
                const response = await axios.get(`https://veritalent-backend.azurewebsites.net/api/user/`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const user = response.data?.data;
                if (user.education && user.education.length > 0) {
                    const existingEducationData = user.education[0]; 
            
                    setEducationId(existingEducationData._id);
                    setExistingEducation(true);
                } else {
                    setExistingEducation(false);
                    setEducationId(null);
                }
            } catch (error) {
                console.error("Error checking existing education:", error);
            }
        };
        if (user?._id) {
            checkExistingEducation();
        }
    }, [user, token]);
    const handleHighlightsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            highlights: e.target.value.split("\n"),
        }));    
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const  handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");
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
            if (educationId) {
                try {
                    const patchResponse = await axios.patch(
                        `https://veritalent-backend.azurewebsites.net/api/career-profile/education/${educationId}`,
                        { ...formData, highlights: formData.highlights.map((h) => h.trim()) },
                        { headers: { Authorization: `Bearer ${token}` } }
                    );
                    setSuccess("Education details updated successfully!");
                    setEducationId(patchResponse.data.data._id);
                } catch (patchError) {
                    console.error("PATCH failed. Trying POST instead.", patchError);
                    
                    const postResponse = await axios.post(
                        `https://veritalent-backend.azurewebsites.net/api/career-profile/education/`,
                        { ...formData, highlights: formData.highlights.map((h) => h.trim()) },
                        { headers: { Authorization: `Bearer ${token}` } }
                    );
                    setSuccess("Education details submitted successfully!");
                    setEducationId(postResponse.data.data._id);
                }
            } else {
                const postResponse = await axios.post(
                    `https://veritalent-backend.azurewebsites.net/api/career-profile/education/`,
                    { ...formData, highlights: formData.highlights.map((h) => h.trim()) },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                setSuccess("Education details submitted successfully!");
                setEducationId(postResponse.data.data._id);
            }
            setFormData({ institution: "", course: "", graduationYear: "", highlights: [] });
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                setError(err.response?.data?.message || "Something went wrong");
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative w-full">
            <div className="absolute flex bg-[#F9EDF7] justify-between pl-[2px] mt-[20px] left-[18%] top-[460px]">
                <div className="bg-[#F9EDF7] w-[80%]">
                    <div className="flex bg-[#EDEDED] pb-[10px] justify-between">
                        <h2 className="pl-[30px] pt-[10px]">Education/ Career Claim</h2>
                        <img className="w-[4%] pt-[20px] object-contain mr-[30px]" src="/src/assets/icons/Group 89.webp" alt="" />
                    </div>
                    <div className="mr-[10px] bg-white ml-[24px]">
                        <div className="flex justify-between bg-[#EDEDED] mt-[30px] mb-[20px] pl-[20px] px-[20px] py-[10px]">
                            <h2 className="font-bold">Category</h2>                                 
                            <img className="w-[3%]" src="/src/assets/icons/dropdown2 1.webp" alt="" />                            
                        </div>
                        <form onSubmit={handleSubmit} className="pt-[20px] pl-[20px] pb-[50px]">
                            <h2 className="font-bold mb-[20px]">Education</h2>

                            {/* Institution Name */}
                            <div className="flex justify-between w-[95%]">
                                <div className="flex flex-col w-[90%] mb-[20px] ">
                                    <label className="mb-[10px]">Institution’s Name</label>
                                    <input
                                        className="px-[20px] py-[7px] bg-transparent border border-2 rounded-md outline-[#794C9F]"
                                        type="text"
                                        name="institution" 
                                        value={formData.institution} 
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            {/* Course of Study */}
                            <div className="flex flex-col w-[90%] mb-[20px]">
                                <label className="mb-[10px]">Course Of Study</label>
                                <input
                                    className="px-[20px] py-[7px] bg-transparent border border-2 rounded-md outline-[#794C9F]"
                                    type="text"
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Year of Graduation */}
                            <div className="flex flex-col w-[40%] mb-[20px]">
                                <label className="mb-[10px]">Year Of Graduation</label>
                                <input
                                    className="px-[20px] py-[7px] bg-transparent border border-2 rounded-md outline-[#794C9F]"
                                    type="text"
                                    name="graduationYear"
                                    value={formData.graduationYear}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Other Details */}
                            <div className="flex flex-col w-[90%] mb-[20px]">
                                <label className="mb-[10px]">Other Details/Highlights</label>
                                    <textarea
                                        className="px-[20px] py-[7px] bg-transparent border border-2 rounded-md outline-[#794C9F] h-[100px]"
                                        name="highlights"
                                        value={formData.highlights.join("\n")} // Convert array back to text for display
                                        onChange={handleHighlightsChange}
                                        placeholder="Enter each highlight on a new line..."
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

                            {/* Success/Error Messages */}
                            {success && <p className="text-green-500 mt-2">{success}</p>}
                            {error && <p className="text-red-500 mt-2">{error}</p>}
                        </form>
                    </div>
                </div>
                <CvPreview/>
            </div>
        </section>
    );
}

export default CareerFormEducation;
