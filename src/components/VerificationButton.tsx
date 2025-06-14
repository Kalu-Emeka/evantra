import { useState, useEffect } from "react";
import axios from "axios";
function VerificationButton () {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); 
  const [careerHighlightId, setCareerHighlightId] = useState<string | null>(null); 

  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchUserDetails = async () => {
        if (!token) return;

        try {
            const response = await axios.get("https://veritalent-backend.azurewebsites.net/api/user/", {
                headers: { Authorization: `Bearer ${token}` },
            });

            const user = response.data?.data;
            if (user?.experience && user.experience.length > 0) {
                const existingExperienceData = user.experience[0]; 
                setCareerHighlightId(existingExperienceData._id);
            } else {
                console.warn("No experience ID found in user data.");
                setCareerHighlightId(null);
            }
        } catch (error) {
            console.error("❌ Error fetching user details:", error);
        }
    };

    fetchUserDetails();
}, [token]);

  // useEffect(() => {
  //   const storedExperienceId = localStorage.getItem("careerHighlightId");
  //   console.log(storedExperienceId)
  //   if (storedExperienceId) {
  //     setCareerHighlightId(storedExperienceId);
  //   } else {
  //     console.warn("No experience ID found in localStorage.");
  //   }
  // }, []);

  const handleVerificationRequest = async () => {
  
      if (!careerHighlightId) {
        setErrorMessage("CareerHighlightId is required.");
        return;
      }
      setLoading(true);
      setSuccessMessage(null);
      setErrorMessage(null);
  
      try {
        const response = await axios.post(
          "https://veritalent-backend.azurewebsites.net/api/verification/request",
          { careerHighlightId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setSuccessMessage("Verification request submitted successfully!");
      } catch (error: any) {
        console.error("Error during verification request:", error);
  
        if (error.response?.status === 400) {
          setErrorMessage("Invalid highlight ID. Please check and try again.");
        } else if (error.response?.status === 404) {
          setErrorMessage("Highlight not found. Please ensure both exist.");
        } else if (error.response?.status === 409) {
          setErrorMessage("A verification request already exists for this highlight.");
        } else {
          setErrorMessage("An unexpected error occurred. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };  
    return (
        <>
             <div className="flex justify-end">
                <button
                onClick={handleVerificationRequest}
                disabled={loading}
                className={`${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#794C9F]"
                } my-[30px] text-white px-[25px] py-[8px] w-[30%] rounded-md`}
                >
                {loading ? "Pending..." : "Request Verification"}
                </button>
            </div>

            {/* Success or Error Messages */}
            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </>
    )
}
export default VerificationButton