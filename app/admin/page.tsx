import React from 'react';
import {SignOut} from "../components/SignOut";
import UserAvatar from "../components/UserAvatar";
import {auth} from "@/auth";

const Admin = async () => {
    const session = await auth()
    if (!session) return <div>Not authenticated</div>

    return (
        <div className={'flex flex-col min-h-screen justify-center items-center gap-6'}>
            <h2 className={'text-3xl'}>Welcome to Admin Session</h2>
            <UserAvatar/>
            <SignOut/>
        </div>
    );
};

export default Admin;