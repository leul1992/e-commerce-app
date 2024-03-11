// useUserData.ts
import { useEffect, useState } from 'react';
import axios from 'axios';

interface UserData {
  data: any;
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
        setLoading(true);
        const response = await axios.get('api/users/loggeduser');
        setUserData(response.data.data);
      } catch (error:any) {
        setLoading(true);
        console.error('Error fetching user data:', error.message);
        setError('Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setUserData]);

  return { userData, loading, error };
};
