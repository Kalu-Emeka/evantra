import React from "react";
import axios from "axios";

interface CvUploadProps {
  token: string | null;
  onUploadSuccess: (data: any) => void;
}
const CvUpload: React.FC<CvUploadProps> = ({ token, onUploadSuccess }) =>{
    const handleUploadClick = () => {
        document.getElementById("cv-upload-input")?.click();
        };
    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || !token) return;
    
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        
        try {
        const response = await axios.post(
            "https://veritalent-backend.azurewebsites.net/api/career-profile/documents",
            formData,
            {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
            }
        );
    
        const extractedData = response.data.data;
        onUploadSuccess(extractedData);
        alert("CV processed and profile updated!");
        } catch (error) {
        console.error("Upload failed:", error);
        alert("Failed to process CV. Please try again.");
        }
    };
    return (
        <>
            <section className="relative w-full">
                <div className="absolute flex justify-between w-[60%] pl-[5px] left-[18%] top-[350px]">
                    <div className="flex justify-center items-center">
                        <h2 className="text-[20px] mr-[20px]">Upload CV</h2>
                        <input 
                            type="file" 
                            accept=".pdf,.doc,.docx" 
                            id="cv-upload-input" 
                            style={{ display: "none" }}
                            onChange={handleFileUpload}
                        />
                        <label htmlFor="cvUpload">
                            <img className="w-[23%] object-contain cursor-pointer" src="/assets/icons/attach.webp" alt="Upload"  onClick={handleUploadClick} />
                        </label>
                    </div>
                    <div className="flex justify-center items-center">
                        <h2 className="text-[20px] mr-[20px]">Preview CV-REPORT</h2>
                        <img className="w-[7%] object-contain cursor-pointer" src="/assets/icons/toggle on 2.webp" alt=""/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CvUpload