import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import CareerNav from "../../components/careerVerification/careerNav";
import CarreerSidebar from "../../components/careerVerification/careerSidebar";
import { useAuth } from "../../context/AuthContext";
interface Credential {
    id: number;
    title: string;
    image?: string;
    date: string;
}

function CredentialRepository() {
    const { token} = useAuth(); 
    const [credentials, setCredentials] = useState<Credential[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!token) {
            setError("No authentication token found. Please log in.");
            setLoading(false);
            return;
        }

        const fetchCredentials = async () => {
            setLoading(true);
            try {
                const response = await axios.get<Credential[]>(
                    "https://veritalent-backend.azurewebsites.net/api/career-profile",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                setCredentials(response.data);
            } catch (err) {
                const error = err as AxiosError;
                console.error("Error fetching credentials:", error);

                if (error.response) {
                    setError(
                        error.response.data
                            ? JSON.stringify(error.response.data)
                            : `Error ${error.response.status}: ${error.response.statusText}`
                    );
                } else if (error.request) {
                    setError("No response from the server. Please check your connection.");
                } else {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchCredentials();
    }, [token]); 

    return (
        <>
            <CareerNav />
            <CarreerSidebar />
            <section className="relative">
                <div className="absolute w-[83%] left-[17%] pl-[20px] pt-[90px] pb-[20px] bg-[#F9EDF7]">
                    <div className="realtive pl-[20px] w-full">
                        <input
                            className="p-[12px] outline-none rounded-xl w-[60%]"
                            type="text"
                            placeholder="Search Repository"
                        />
                    </div>
                </div>
            </section>

            {error && <p className="text-red-500">{error}</p>}

            <section className="relative w-full">
                <div className="absolute left-[19%] top-[250px] w-[75%]">
                    <h2 className="mb-[5px]">Recent Credentials</h2>
                    <hr className="w-[97%]" />
                </div>
                <div className="absolute left-[19%] top-[300px] grid grid-cols-3 gap-2">
                    {loading ? (
                        <p>Loading credentials...</p>
                    ) : credentials.length > 0 ? (
                        credentials.map((credential) => (
                            <div key={credential.id}>
                                <img
                                    className="w-[70%]"
                                    src={credential.image || "/assets/icons/Rectangle 89.webp"}
                                    alt={credential.title}
                                />
                                <div className="border py-[10px] pl-[10px] bg-[#FCFCFC] w-[70%]">
                                    <h2>{credential.title}</h2>
                                    <p className="text-[15px] mt-[5px] text-[#22001580]">
                                        {new Date(credential.date).toDateString()}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No credentials found.</p>
                    )}
                </div>
            </section>
        </>
    );
}

export default CredentialRepository;
