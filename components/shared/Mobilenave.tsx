'use client'
import React from 'react'
import { Sheet,SheetContent,SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger

 } from '../ui/sheet'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


export default function Mobilenave() {
  const pathname = usePathname()

  return (
    <header className='header'>
      <Link href='/' className='flex items-center gap-2 md:py-2'>
        <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={20}/>
      </Link>
      <nav className='flex gap-2'>
             <SignedIn> 
                 <UserButton /> 
                <Sheet>
                    <SheetTrigger>
                        <Image
                        src='/assets/icons/menu.svg'
                        alt='menu'
                        height={32}
                        width={32}
                        />
                    </SheetTrigger>
                    <SheetContent className='sheet-content sm:w-64'>
                      <>
                      <Image
                      src='/assets/images/logo-text.svg'
                      alt='logo'
                      width={152}
                      height={23}
                      className='mb-3'
                      />
                      </>

                      <ul className='sidebar-nav_elememts'>
                {navLinks.map((link)=>{
                  const isactive = link.route === pathname
                  return(
                    <li key={link.route} className={`sidebar-nav_element group ${isactive ? 'bg-purple-gradient text-white':'text-gray-700'}`}>
                        <Link className='sidebar-link' href={link.route}>
                          <Image 
                          src={link.icon}
                          alt='logo'
                          width={24}
                          height={24}
                          className={`${isactive && 'brightness-200'}`}
                          />
                          {link.label}
                        </Link>
                    </li>
                  )
                })}
                </ul>

                    </SheetContent>
                </Sheet>
             </SignedIn> 
            
      </nav>
    </header>
  )
}
