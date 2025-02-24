import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";

function Home() {
    return (
        <div className={'flex min-h-screen items-center justify-center'}>
            <Link href={'/register'}>Create Account</Link>
        </div>
    );
}

export default Home;