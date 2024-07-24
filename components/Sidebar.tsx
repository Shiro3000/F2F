'use client'

import Link from "next/link"
import Image from "next/image"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Island_Moments } from "next/font/google"
import Footer from "./Footer"


const Sidebar = ({user}: SiderbarProps) => {
  const pathname = usePathname();
  
    return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href='/' 
            className='flex mb-5 cursor-pointer item-center'>
                <Image 
                    src="/icons/F2F_logo.svg"
                    width={100}
                    height={200}
                    alt="Fund2Farm logo"
                    className="h-[100px] w-[200px]"
                />
                
            </Link>

            {sidebarLinks.map((item)=> {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                
                return (
                    <Link href={item.route} key={item.label} className={cn('sidebar-link', {'bg-bank-gradient': isActive})}>
                        <div className="relative size-6">
                            <Image 
                                src={item.imgURL} 
                                alt={item.label}
                                fill
                                className={cn({
                                    'brightness-[3] invert-0': isActive
                                })}
                            />
                        </div>
                        <p className={cn('sidebar-label',{'!text-white' :isActive})}>
                            {item.label}
                        </p>
                    </Link>
                )
            })}

            USER
        </nav>

        <Footer user={user} type={"desktop"}/>
    </section>
  )
}

export default Sidebar