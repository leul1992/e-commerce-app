// UsersPage.tsx
'use client'
import prisma from "@/lib/prisma";


const UsersPage = async() => {

  const users = await prisma.users.findMany();

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <div key={user.user_id}>
            <li>UserName: {user.username}</li>
            <li>Account Status: {user.account_status}</li>
            <li>Email: {user.email}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
