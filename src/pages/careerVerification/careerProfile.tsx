import {useState, useEffect} from "react"  
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import CareerNav from "../../components/careerVerification/careerNav"
import CarreerSidebar from "../../components/careerVerification/careerSidebar"
import Wallet from "../../components/wallet/wallet";
import CvUpload from "../../components/upload documents/CvReport";
import CvPreview from "../../components/upload documents/CvPreview";
import VerificationButton from "../../components/VerificationButton";
type UserData = {
    _id: string;
    name: string;
    email: string;
    bio: string;
    gender: string;
    birthDate: string;
    phoneNumber: string;
    education: { _id: string; institution: string; course: string; graduationYear: string; highlights: string[] }[];
    experience: { _id: string; organization: string; title: string; startDate: string; description: string; organizationEmail: string; contactPerson: string; contactPersonEmail: string; }[];
};
function CareerProfile () {
    const { token } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingEx, setIsEditingEx] = useState(false);
    const [isEditingEdu, setIsEditingEdu] = useState(false);
    const [userData, setUserData] = useState<UserData | null>(null);
    const handleUploadSuccess = (data: any) => {
        setUserData((prev) => ({
          ...(prev ?? {}),
          ...data,
        }));
    };
    
    useEffect(() => {
        const fetchUserDetails = async () => {
          if (!token) return;
    
          try {
            const response = await axios.get("https://veritalent-backend.azurewebsites.net/api/user/", {
              headers: { Authorization: `Bearer ${token}` },
            });
            setUserData(response.data.data);
          } catch (error) {
            console.error("Error fetching user details:", error);
          }
        };
    
        fetchUserDetails();
      }, [token]);
    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleEditClickEx = () => {
        setIsEditingEx(true);
    };
    const handleEditClickEdu = () => {
        setIsEditingEdu(true);
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
            ...(prevUserData ?? {
                _id: "",
                name: "",
                email: "",
                bio: "",
                gender: "",
                birthDate: "",
                phoneNumber: "",
                education: [],
                experience: [],
              }),
              [name]: value,
          }));
        
    };
    const handleSave = async () => {
        if (!token) return;
        try {
            const response = await axios.patch(
                "https://veritalent-backend.azurewebsites.net/api/user/",
                userData,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setUserData(response.data.data);
            setIsEditing(false);
            alert("Profile updated successfully");
        } catch (error) {
            console.error("Error updating user:", error);
            alert("Failed to update profile");
        }
    };
    const handleDeleteUser = async () => {
        if (!token) return;
        const confirmDelete = window.confirm("Are you sure you want to delete your personal information details?");
        if (!confirmDelete) return;

        try {
            await axios.delete("https://veritalent-backend.azurewebsites.net/api/user/", {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert("Profile deleted successfully");
            setUserData(null);
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("Failed to delete profile");
        }
    };
    const handleExperienceChange = (index: number, field: string, value: string) => {
        // setUserData((prevUserData) => {
        //     if (!prevUserData) return null;
            
        //     const updatedExperience = prevUserData.experience.map((exp, i) =>
        //         i === index ? { ...exp, [field]: value } : exp
        //     );
    
        //     return { ...prevUserData, experience: updatedExperience };
        // });
        if (!userData) return;
        const updatedExperience = userData.experience.map((exp, i) =>
          i === index ? { ...exp, [field]: value } : exp
        );
        setUserData({ ...userData, experience: updatedExperience });
    };

  const handleSaveExperience = async (index: number) => {
    if (!token || !userData) return;

    const experienceId = userData.experience[index]._id;
    try {
      const response = await axios.patch(
        `https://veritalent-backend.azurewebsites.net/api/career-profile/${experienceId}`,
        userData.experience[index],
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUserData((prev) =>
        prev ? { ...prev, experience: prev.experience.map((exp, i) => (i === index ? response.data.data : exp)) } : null
      );
    const updatedUserResponse = await axios.get("https://veritalent-backend.azurewebsites.net/api/user/", {
        headers: { Authorization: `Bearer ${token}` },
    });
    setUserData(updatedUserResponse.data.data);
      setIsEditingEx(false);
      alert("Experience updated successfully");
    } catch (error) {
      console.error("Error updating experience:", error);
      alert("Failed to update experience");
    }
  };
    // const handleSaveExperience = async (index: number) => {
    //     if (!token || !userData) return;

    //     const experienceId = userData.experience[index]._id;
    //     try {
    //         const response = await axios.patch(
    //             `https://veritalent-backend.azurewebsites.net/api/career-profile/${experienceId}`,
    //             userData.experience[index],
    //             { headers: { Authorization: `Bearer ${token}` } }
    //         );
    //         setUserData((prevUserData) => {
    //             if (!prevUserData) return null;
                
    //             const updatedExperience = prevUserData.experience.map((exp, i) =>
    //                 i === index ? response.data.data : exp
    //             );
    
    //             return { ...prevUserData, experience: updatedExperience };
    //         });
    //         setIsEditingEx(false);
    //         alert("Profile updated successfully");
    //     } catch (error) {
    //         console.error("Error updating user:", error);
    //         alert("Failed to update profile");
    //     }
    // };
    // const handleDeleteExperience = async (index: number) => {
    //     if (!token || !userData?._id) return;
    //     const confirmDelete = window.confirm("Are you sure you want to delete your work experience?");
    //     if (!confirmDelete) return;
    //     const experienceId = userData.experience[index]._id;
    //     try {
    //         await axios.delete(`https://veritalent-backend.azurewebsites.net/api/career-profile/${experienceId}`, {
    //             headers: { Authorization: `Bearer ${token}` },
    //         });
    //         alert("Profile deleted successfully");
    //         setUserData((prevUserData) => {
    //             if (!prevUserData) return null;
                
    //             const updatedExperience = prevUserData.experience.filter((_, i) => i !== index);
    
    //             return { ...prevUserData, experience: updatedExperience };
    //         });
    //     } catch (error) {
    //         console.error("Error deleting user:", error);
    //         alert("Failed to delete profile");
    //     }
    // };
    const handleDeleteExperience = async (index: number) => {
        if (!token || !userData) return;
    
        const confirmDelete = window.confirm("Are you sure you want to delete your work experience?");
        if (!confirmDelete) return;
    
        const experienceId = userData.experience[index]._id;
        try {
          await axios.delete(`https://veritalent-backend.azurewebsites.net/api/career-profile/${experienceId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          alert("Experience deleted successfully");
          setUserData((prev) =>
            prev ? { ...prev, experience: prev.experience.filter((_, i) => i !== index) } : null
          );
        } catch (error) {
          console.error("Error deleting experience:", error);
          alert("Failed to delete experience");
        }
    };
    const handleHighlightChange = (eduIndex: number, highlightIndex: number, value: string) => {
        setUserData((prevUserData) => {
            if (!prevUserData) return null;
    
            const updatedEducation = prevUserData.education.map((edu, index) => {
                if (index === eduIndex) {
                    const updatedHighlights = edu.highlights.map((highlight, idx) =>
                        idx === highlightIndex ? value : highlight
                    );
                    return { ...edu, highlights: updatedHighlights };
                }
                return edu;
            });
    
            return { ...prevUserData, education: updatedEducation };
        });
    };
    const handleEducationChange = (index: number, field: string, value: string) => {
        if (!userData) return;
    
        const updatedEducation = userData.education.map((edu, i) =>
          i === index ? { ...edu, [field]: value } : edu
        );
        setUserData({ ...userData, education: updatedEducation });
    };
    const handleSaveEducation = async (index: number) => {
        if (!token || !userData) return;
    
        const educationId = userData.education[index]._id;
        try {
          const response = await axios.patch(
            `https://veritalent-backend.azurewebsites.net/api/career-profile/education/${educationId}`,
            userData.education[index],
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setUserData((prev) =>
            prev ? { ...prev, education: prev.education.map((edu, i) => (i === index ? response.data.data : edu)) } : null
          );
          setIsEditingEdu(false);
          alert("Education updated successfully");
        } catch (error) {
          console.error("Error updating education:", error);
          alert("Failed to update education");
        }
      };
    const handleDeleteEducation = async (index: number) => {
        if (!token || !userData?._id) return;
        const confirmDelete = window.confirm("Are you sure you want to delete this education entry?");
        if (!confirmDelete) return;
        const educationId = userData.education[index]._id;
        try {
            await axios.delete(
                `https://veritalent-backend.azurewebsites.net/api/career-profile/education/${educationId}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert("Education deleted successfully");
            setUserData((prevUserData) => {
                if (!prevUserData) return null;
    
                const updatedEducation = prevUserData.education.filter((_, i) => i !== index);
    
                return { ...prevUserData, education: updatedEducation };
            });
        } catch (error) {
            console.error("Error deleting education:", error);
            alert("Failed to delete education");
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
        <Wallet/>
        <CvUpload token={token} onUploadSuccess={handleUploadSuccess}/>
        <section className="relative w-full">
            <div className="absolute flex justify-between w-[80%] pl-[30px] mt-[20px] left-[18%] top-[390px]">
                <div className="flex justify-start items-center">
                    <h2 className="w-[95%]">Upload A CV With Size Not Larger Than 10mb in  PDF, WORD Or .Docs Format Or <span className="font-bold">Input Details Manually</span></h2>
                </div>
            </div>
            <div className="absolute w-[83%] mt-[20px] left-[17%] top-[460px]">
                <div className="flex bg-[#EDEDED] p-[20px] justify-between">

                </div>
            </div>
                <div className="absolute flex justify-between w-[80%] mt-[50px] pl-[30px] left-[16%] top-[480px]">
                    <div className="w-[90%]">
                        <div className="bg-[#F9EDF7] py-[20px] px-[20px] rounded-md">
                            <h2 className="text-[20px] font-bold text-[#9D3B93]">Personal Information</h2>
                            <div className="mt-[20px] flex justify-between">
                                <div className="flex gap-x-20">
                                    <h2 className="font-bold">Name:</h2>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="name"
                                            value={userData?.name || ""}
                                            onChange={handleInputChange}
                                            className="border px-2 py-1 rounded outline-none"
                                        />
                                    ) : (
                                        <h3 className="text-[#22001580]">{userData?.name || "N/A"}</h3>
                                    )}
                                </div>
                                <div className="flex justify-end items-center">
                                    <h2 className="mr-[10px]">Visibility</h2>
                                    <img className="w-[15%] cursor-pointer" src="src/assets/icons/toggle on 2.webp" alt="" />
                                </div>
                            </div>
                            <div className="mt-[5px] flex justify-between">
                                <div className="flex gap-8">
                                    <h2 className="font-bold">Email Address</h2>
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            name="email"
                                            value={userData?.email || ""}
                                            onChange={handleInputChange}
                                            className="border px-2 py-1 rounded outline-none"
                                        />
                                    ) : (
                                        <h3 className="text-[#22001580]">{userData?.email || "N/A"}</h3>
                                    )}
                                </div>
                            </div>
                            <div className="mt-[15px] flex justify-between">
                                <div className="flex gap-8">
                                    <h2 className="font-bold">Date Of Birth</h2>
                                    {isEditing ? (
                                        <input
                                            type="date"
                                            name="birthDate"
                                            value={userData?.birthDate || ""}
                                            onChange={handleInputChange}
                                            className="border px-2 py-1 rounded outline-none"
                                        />
                                    ) : (
                                        <h3 className="text-[#22001580]">{userData?.birthDate || "N/A"}</h3>
                                    )}
                                </div>
                            </div>
                            <div className="mt-[15px] flex justify-between">
                                <div className="grid grid-cols-2 gap-4">
                                    <h2 className="font-bold">Gender:</h2>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="gender"
                                            value={userData?.gender || ""}
                                            onChange={handleInputChange}
                                            className="border px-2 py-1 rounded outline-none"
                                        />
                                    ) : (
                                        <h3 className="text-[#22001580]">{userData?.gender || "N/A"}</h3>
                                    )}
                                </div>
                            </div>
                            <div className="mt-[15px] flex justify-between">
                                <div className="grid grid-cols-2 gap-x-4">
                                    <h2 className="font-bold">Phone Number:</h2>
                                    {isEditing ? (
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            value={userData?.phoneNumber || ""}
                                            onChange={handleInputChange}
                                            className="border px-2 py-1 rounded outline-none"
                                        />
                                    ) : (
                                        <h3 className="text-[#22001580]">{userData?.phoneNumber || "N/A"}</h3>
                                    )}
                                </div>
                                {isEditing && (
                                    <div className="flex justify-end mt-4">
                                        <button
                                            className="bg-[#794C9F] text-white px-[15px] py-[5px] rounded-md mb-[20px]"
                                            onClick={handleSave}
                                        >
                                            Save
                                        </button>
                                    </div>
                                )}
                            </div>
                        <div className="flex justify-end">
                            <img className="w-[3%] cursor-pointer object-contain mr-[10px]" src="/assets/icons/edit.webp"  alt="Edit" onClick={handleEditClick} />
                            <img className="w-[3%] cursor-pointer object-contain" src="/assets/icons/delete.webp"  alt="Delete" onClick={handleDeleteUser}/>
                        </div>
                    </div>
                    <div className="bg-[#F9EDF7] py-[20px] px-[20px] mt-[30px] rounded-md">
                        {userData?.education?.map((edu, index) => (
                            <div key={index} className="bg-[#F9EDF7] py-[20px] px-[20px] mt-[30px] rounded-md">
                                <h2 className="text-[20px] font-bold text-[#9D3B93]">Education</h2>
                                <div className="mt-[20px] flex justify-between">
                                    <div className="flex gap-x-6">
                                        <h2 className="font-bold">Institution's Name:</h2>
                                        {isEditingEdu ? (
                                            <input
                                                type="text"
                                                name="institution"
                                                value={edu?.institution}
                                                onChange={(e) => handleEducationChange(index, "institution", e.target.value)}
                                                className="border px-2 py-1 rounded outline-none"
                                            />
                                        ) : (
                                            <h3 className="text-[#22001580]">{edu?.institution || "N/A"}</h3>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-[5px] flex justify-between">
                                    <div className="flex gap-x-9">
                                        <h2 className="font-bold">Course Of Study</h2>
                                        {isEditingEdu ? (
                                            <input
                                                type="text"
                                                name="course"
                                                value={edu?.course}
                                                onChange={(e) => handleEducationChange(index, "course", e.target.value)}
                                                className="border px-2 py-1 rounded outline-none"
                                            />
                                        ) : (
                                            <h3 className="text-[#22001580]">{edu?.course || "N/A"}</h3>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-[15px] flex justify-between">
                                    <div className="grid grid-cols-2 gap-x-2">
                                        <h2 className="font-bold">Graduation Year</h2>
                                        {isEditingEdu ? (
                                            <input
                                                type="text"
                                                name="graduationYear"
                                                value={edu?.graduationYear}
                                                onChange={(e) => handleEducationChange(index, "graduationYear", e.target.value)}
                                                className="border px-2 py-1 rounded outline-none"
                                            />
                                        ) : (
                                            <h3 className="text-[#22001580]">{edu?.graduationYear || "N/A"}</h3>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-[15px] flex">
                                    <div className="flex gap-x-14">
                                        <h2 className="font-bold mr-[20px]">Highlights:</h2>
                                        <ul className="text-[#22001580]">
                                            {edu.highlights?.map((highlight, idx) => (
                                                <li key={idx} className="list-disc">
                                                    {isEditingEdu ? (
                                                        <input
                                                            type="text"
                                                            name={`highlight-${idx}`}
                                                            value={highlight}
                                                            onChange={(e) => handleHighlightChange(index, idx, e.target.value)}
                                                            className="border px-2 py-1 rounded outline-none"
                                                        />
                                                    ) : (
                                                        <span>{highlight}</span>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                {isEditingEdu && (
                                <div className="flex justify-end mt-4">
                                    <button
                                        className="bg-[#794C9F] text-white px-[15px] py-[5px] rounded-md mb-[20px]"
                                        onClick={() => handleSaveEducation(index)}
                                    >
                                        Save
                                    </button>
                                </div>
                            )}
                                <div className="flex justify-end">
                                    <img className="w-[3%] cursor-pointer object-contain mr-[10px]" src="/assets/icons/edit.webp" alt="Edit" onClick={handleEditClickEdu}/>
                                    <img className="w-[3%] cursor-pointer object-contain" src="/assets/icons/delete.webp" alt="delete"
                                        onClick={(e) => {
                                            e.stopPropagation(); 
                                            handleDeleteEducation(index);
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-[#F9EDF7] py-[20px] px-[20px] mt-[30px] rounded-md">
                    {userData?.experience?.map((work, index) => (
                        <div key={work._id} className="bg-[#F9EDF7] py-[20px] px-[20px] mt-[30px] rounded-md">
                            <h2 className="text-[20px] font-bold text-[#9D3B93]">Work Experience</h2>
                            <div className="mt-[20px] flex justify-between">
                                <div className="flex gap-x-2">
                                    <h2 className="font-bold">Organization Name:</h2>
                                    {isEditingEx ? (
                                    <input
                                        type="text"
                                        name="organization"
                                        value={work?.organization}
                                        onChange={(e) => handleExperienceChange(index, "organization", e.target.value)}
                                        className="border px-2 py-1 rounded outline-none"
                                    />
                                ) : (
                                    <h3 className="text-[#22001580]">{work?.organization || "N/A"}</h3>
                                )}
                                </div>
                            </div>
                            <div className="mt-[5px] flex justify-between">
                                <div className="flex gap-2">
                                    <h2 className="font-bold">Position</h2>
                                    {isEditingEx ? (
                                    <input
                                        type="text"
                                        name="title"
                                        value={work?.title}
                                        onChange={(e) => handleExperienceChange(index, "title", e.target.value)}
                                        className="border px-2 py-1 rounded outline-none"
                                    />
                                ) : (
                                    <h3 className="text-[#22001580]">{work?.title || "N/A"}</h3>
                                )}
                                </div>
                            </div>
                            <div className="mt-[15px] flex justify-between">
                                <div className="flex gap-2">
                                    <h2 className="font-bold">Duration</h2>
                                    {isEditingEx ? (
                                    <input
                                        type="date"
                                        name="startDate"
                                        value={work?.startDate}
                                        onChange={(e) => handleExperienceChange(index, "startDate", e.target.value)}
                                        className="border px-2 py-1 rounded outline-none"
                                    />
                                ) : (
                                    <h3 className="text-[#22001580]">{work?.startDate || "N/A"}</h3>
                                )}
                                </div>
                            </div>
                            <div className="mt-[15px] flex">
                                <div className="flex gap-2">
                                    <h2 className="font-bold mr-[20px]">Description:</h2>
                                    {isEditingEx ? (
                                    <input
                                        type="text"
                                        name="description"
                                        value={work?.description}
                                        onChange={(e) => handleExperienceChange(index, "description", e.target.value)}
                                        className="border px-2 py-1 rounded outline-none"
                                    />
                                ) : (
                                    <h3 className="text-[#22001580]">{work?.description || "N/A"}</h3>
                                )}
                                </div>
                            </div>
                            <div className="mt-[15px] flex">
                                <div className="flex gap-2">
                                    <h2 className="font-bold mr-[20px]">Organization Email:</h2>
                                    {isEditingEx ? (
                                    <input
                                        type="email"
                                        name="organizationEmail"
                                        value={work?.organizationEmail}
                                        onChange={(e) => handleExperienceChange(index, "organizationEmail", e.target.value)}
                                        className="border px-2 py-1 rounded outline-none"
                                    />
                                ) : (
                                    <h3 className="text-[#22001580]">{work?.organizationEmail || "N/A"}</h3>
                                )}
                                </div>
                            </div>
                            <div className="mt-[15px] flex">
                                <div className="flex gap-2">
                                    <h2 className="font-bold mr-[20px]">Contact Person:</h2>
                                    {isEditingEx ? (
                                    <input
                                        type="text"
                                        name="contactPerson"
                                        value={work?.contactPerson}
                                        onChange={(e) => handleExperienceChange(index, "contactPerson", e.target.value)}
                                        className="border px-2 py-1 rounded outline-none"
                                    />
                                ) : (
                                    <h3 className="text-[#22001580]">{work?.contactPerson || "N/A"}</h3>
                                )}
                                </div>
                            </div>
                            <div className="mt-[15px] flex">
                                <div className="flex gap-2">
                                    <h2 className="font-bold mr-[20px]">Contact Person Email:</h2>
                                    {isEditingEx ? (
                                    <input
                                        type="email"
                                        name="contactPersonEmail"
                                        value={work?.contactPersonEmail}
                                        onChange={(e) => handleExperienceChange(index, "contactPersonEmail", e.target.value)}
                                        className="border px-2 py-1 rounded outline-none"
                                    />
                                ) : (
                                    <h3 className="text-[#22001580]">{work?.contactPersonEmail || "N/A"}</h3>
                                )}
                                </div>
                            </div>
                            {isEditingEx && (
                                <div className="flex justify-end mt-4">
                                    <button
                                        className="bg-[#794C9F] text-white px-[15px] py-[5px] rounded-md mb-[20px]"
                                        onClick={() => handleSaveExperience(index)}
                                    >
                                        Save
                                    </button>
                                </div>
                            )}
                            <div className="flex justify-end">
                                <img className="w-[3%] cursor-pointer object-contain mr-[10px]" src="/assets/icons/edit.webp" alt="Edit" onClick={handleEditClickEx} />
                                <img className="w-[3%] cursor-pointer object-contain" src="/assets/icons/delete.webp" alt="delete" 
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent unintended parent clicks
                                        handleDeleteExperience(index);
                                    }}
                                
                                />
                            </div>
                        </div>
                        
                    ))}
                    </div>
                    <VerificationButton/>   
                </div>
                <CvPreview/>
            </div>
        </section>
        </>
    )
}
export default CareerProfile