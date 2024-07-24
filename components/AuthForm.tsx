'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { BookTextIcon, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions'

const formSchema = z.object({
    email: z.string().email(),
  })

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);
    
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: ""
        },
      })
     
      // 2. Define a submit handler.
      const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true)

        try {
            if(type === 'sign-up') {
                const newUser = await signUp(data);
                setUser(newUser);
            }
            if(type === 'sign-in') {
                const response = await signIn({
                    email: data.email,
                    password: data.password
                })

                if(response) router.push('/')
            }
        } catch (error) {
            let errorMessage = 'An error occurred. Please try again.';

            if (error instanceof Error) {
                // Customize error messages based on the error message
                if (error.message.includes('Invalid email or password')) {
                    errorMessage = 'The email or password is incorrect.';
                } else {
                    errorMessage = error.message || 'An unexpected error occurred.';
                }
            } else if (typeof error === 'object' && error !== null && 'response' in error) {
                // Check if `error` has a `response` object
                const err = error as { response: { status: number; data: any } };
                const { status, data } = err.response;
        
                // Customize error messages based on the response status and data
                if (status === 400) {
                    if (data.message === 'Invalid email or password') {
                        errorMessage = 'The email or password is incorrect.';
                    } else {
                        errorMessage = data.message || 'Invalid input data.';
                    }
                } else if (status === 401) {
                    errorMessage = 'You are not authorized to perform this action.';
                } else {
                    errorMessage = 'An unexpected error occurred. Please try again later.';
                }
            }
            
            console.log(errorMessage); // Log the error message for debugging
            alert(errorMessage); // Display the error message to the user

        } finally { 
            setIsLoading(false);
        }
      }
  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
            <Link href='/' 
                className='flex mb-10 cursor-pointer item-center gap-1'>
                    <Image 
                        src="/icons/F2F_logo.svg"
                        width={34}
                        height={34}
                        alt="Fund2Farm logo"
                        className="w-[250px]"
                    />
            </Link>

            <div className='flex flex-col gap-1 md:gap-3'>
                <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                    {user
                        ? 'Get Started'
                        : type === 'sign-in'
                            ? 'Sign In'
                            : 'Sign Up'    
                    }
                    <p className='text-16 font-normal text-gray-600'>
                        {user
                            ? ''
                            : 'Please enter your details'
                        }
                        
                    </p>
                </h1>
            </div>
        </header>
        {user ? (
            <div className='flex flex-col gap-4'>
                <Link href={'/sign-in'} className='flex flex-col gap-4'>
                    <Button className='form-btn'>
                        Sign In
                    </Button>
                </Link>
            </div>
        ): (
            <>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {type === 'sign-up' && (
                            <>
                                <div className='flex gap-4'>
                                    <CustomInput 
                                    control={form.control} 
                                    name='firstName' 
                                    label='First Name' 
                                    placeholder='Enter your first name' 
                                    />
                                    <CustomInput 
                                        control={form.control} 
                                        name='lastName' 
                                        label='Last Name' 
                                        placeholder='Enter your last name' 
                                    />
                                </div>
                                
                                <CustomInput 
                                    control={form.control} 
                                    name='address1' 
                                    label='Address' 
                                    placeholder='Enter your specific address' 
                                />

                                <div className='flex gap-4'>
                                    <CustomInput 
                                        control={form.control} 
                                        name='province' 
                                        label='Province' 
                                        placeholder='Example: Bangkok' 
                                    />
                                    <CustomInput 
                                        control={form.control} 
                                        name='postalCode' 
                                        label='Postal Code' 
                                        placeholder='Example: 10110' 
                                    />
                                </div>
                                <div className='flex gap-4'>
                                    <CustomInput 
                                        control={form.control} 
                                        name='dob' 
                                        label='Date of Birth' 
                                        placeholder='YYYY-MM-DD' 
                                    />
                                    <CustomInput 
                                        control={form.control} 
                                        name='ID' 
                                        label='ID Card Number' 
                                        placeholder='123456789ABC' 
                                    />
                                </div>
                            </>
                        )}
                        <CustomInput 
                            control={form.control} 
                            name='email' 
                            label='Email' 
                            placeholder='Enter your email' 
                        />
                        <CustomInput 
                            control={form.control} 
                            name='password' 
                            label='Password' 
                            placeholder='Enter your password' 
                        />
                        
                        <div className='flex flex-col gap-4'>
                            <Button type="submit" disabled={isLoading} className='form-btn'>
                            {isLoading ? (
                                <>
                                    <Loader2 size={20}
                                    className='animate-spin' /> &nbsp;
                                    Loading...
                                </>
                            ) : type === 'sign-in'
                                ? 'Sign in' : 'Sign up'}
                            </Button>
                        </div>
                        
                    </form>
                </Form>
                <footer className='flex justify-center gap-1'>
                    <p className='text-14 font-normal text-gray-600'>{type === 'sign-in'
                        ? "Don't have an account?"
                        : "Already have an account?"}
                    </p>
                    <Link href={type ==='sign-in' ? '/sign-up' : '/sign-in'} className='form-link'>
                        {type === 'sign-in' ? 'Sign up' : 'Sign in'}
                    </Link>
                </footer>
            </>
        )}
    </section>
  )
}

export default AuthForm