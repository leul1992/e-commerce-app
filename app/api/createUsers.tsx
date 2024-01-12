// Import the necessary types from 'next'
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

// Function to insert a new user
const CreateUsers = async (
  request: NextApiRequest,
  response: NextApiResponse
  ) => {
  try {
    const { username, email, password, account_status } = request.body;

    const newUser = await prisma.users.create({
      data: {
        username,
        email,
        password,
        account_status,
      },
    });

    return response.status(200).json({ message: `New user created: ${newUser.username}` });
  } catch (error) {
    console.error("Error creating user:", error);
    return response.status(500).json({ error: 'Error creating user' });
  }
};

export default CreateUsers;
