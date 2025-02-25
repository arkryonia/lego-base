import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {FaGithub, FaGoogle} from "react-icons/fa";
import {Separator} from "@/components/ui/separator";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {signIn} from "@/auth";

const Register = () => {
    const handleSignInWithGoogle = async () => {
        'use server';
        await signIn("google")
    }
    return (
        <div className={'flex min-h-screen justify-center items-center'}>
            <Card className={'w-1/3 p-10'}>
                <CardHeader>
                    <CardTitle className={'text-center text-4xl'}>Create Account</CardTitle>
                </CardHeader>
                <CardContent className={'space-y-6'}>
                    <form action={handleSignInWithGoogle}>
                        <Button type={'submit'} className={'w-full p-7 text-xl'} variant={'outline'}> <FaGoogle/> Continue with
                            Github</Button>
                    </form>
                    <div className={'flex justify-between h-full items-center text-xl'}>
                        <div className={'w-2/6'}>
                            <Separator/>
                        </div>
                        <div className={'w-2/3 text-center'}> Or continue with email</div>
                        <div className={'w-2/6'}>
                            <Separator/>
                        </div>
                    </div>
                    <form className={'space-y-6'}>
                        <div>
                            <label htmlFor="email"></label>
                            <Input type="email" className={'p-7'} placeholder={'Email'}/>
                        </div>
                        <div>
                            <label htmlFor="password"></label>
                            <Input type="password" className={'p-7'} placeholder={'Password'}/>
                        </div>
                        <Button className={'p-7 w-full text-xl'}>Sign Up</Button>
                    </form>

                    <p className={'text-center'}>
                        Already have an account ? <Link href={'/login'} className={'text-blue-400 font-bold'}>Sign
                        In</Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default Register;