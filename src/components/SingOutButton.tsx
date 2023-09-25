"use client"
//client page

import { FC, useState } from "react";
import Button from "./ui/Button";
import { signIn, signOut } from "next-auth/react";

interface SignOutButtonProps {}

const SignOutButton :FC<SignOutButtonProps> =({})=>{
    const [isLoading, setIsLoading]= useState<boolean>(false)

    const signInWithGoogle = async ()=>{
        setIsLoading(true);
        
        try{
            await signOut()
        }catch(error){
            toast({
                title:'error signing in ',
                message:'please try again later',
                type:'error'
            })
        }
    }

    return <Button onClick={signInWithGoogle} isLoading={isLoading}>
        Sign in 
    </Button>
}

export default SignOutButton
