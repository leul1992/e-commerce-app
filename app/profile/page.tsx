'use client'
import React from 'react';
import Loading from '../loading';
import { useUserData } from './getUserData';

function ProfileDetail() {
    const {userData, loading, error} = useUserData();

    return (
        <div>
            {userData ? (
                <div>
                    <h1>UserName: {userData?.username}</h1>
                    <p>Email: {userData?.email}</p>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
}

export default ProfileDetail;
