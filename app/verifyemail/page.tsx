// Import necessary modules and components
'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../loading";

// VerifyEmailPage component
export default function VerifyEmailPage() {
  const router = useRouter();

  // State variables
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to verify user email
  const verifyUserEmail = async () => {
    try {
      await axios.post('/api/auth/verifyEmail', { token });
      setVerified(true);
    } catch (error: any) {
      setError(error.response?.data?.message || 'An error occurred during email verification.');
    } finally {
      setLoading(false);
    }
  };

  // Extract token from the URL query parameter
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const urlToken = urlSearchParams.get('token');
    setToken(urlToken || "");
  }, []);

  // Perform email verification on initial render
  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  // Route to '/' after 2 seconds of successful verification
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (verified) {
      timeoutId = setTimeout(() => {
        router.push('/');
      }, 2000);
    }

    return () => clearTimeout(timeoutId); // Cleanup on component unmount

  }, [verified, router]);

  // Render UI based on loading, verified, and error states
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {loading && <Loading />} {/* Display loading spinner while verifying */}
      {!loading && verified && <p>Email verified successfully! Redirecting...</p>} {/* Display success message */}
      {!loading && error && <p>Error: {error}</p>} {/* Display error message */}
    </div>
  );
}
