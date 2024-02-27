// useUserData.ts
import { useEffect, useState } from 'react';
import axios from 'axios';

interface UserData {
  id: string;
  username: string;
  email: string;
  iat: number;
  exp: number;
}

export const useUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/getUserData',
          {
            withCredentials: true,
          }
        );
        setUserData(response.data);
      } catch (error:any) {
        console.error('Error fetching user data:', error.message);
        setError('Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { userData, loading, error };
};
