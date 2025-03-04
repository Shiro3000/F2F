'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { sidebarLinks } from "@/constants"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Footer from "./Footer"
  

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image 
                        src="/icons/hamburger.svg"
                        width={30}
                        height={30}
                        alt="menu"
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="w-fit border-non bg-white">
                    <Link href='/' className='flex cursor-pointer item-center gap-1 px-5 pt-2'>
                        <Image 
                            src="/icons/F2F_logo.svg"
                            width={34}
                            height={34}
                            alt="Fund2Farm logo"
                            className="h-[100px] w-[200px]"
                        />
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map((item)=> {
                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                                    
                                    return ( 
                                        <SheetClose asChild key={item.route}>
                                            <Link href={item.route} key={item.label} className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient': isActive})}>
                                                <Image 
                                                    src={item.imgURL} 
                                                    alt={item.label} 
                                                    width={20}
                                                    height={20}
                                                    className={cn({
                                                        'brightness-[3] invert-0': isActive
                                                    })}
                                                />
                                                <p className={cn('text-16 font-semibold text-black-2',{'text-white' :isActive})}>
                                                    {item.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}

                            USER
                            </nav>
                        </SheetClose>

                        <Footer user={user} type='mobile'/>
                    </div>

                    
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav