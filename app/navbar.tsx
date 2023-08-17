"use client"

import Link from "next/link"
import { useEffect, useState } from "react" 
import { usePathname } from "next/navigation"
import Image from "next/image"
import { gsap } from "gsap"


export default  function Navbar() {

    

    const [showMenu, setShowMenu] = useState(false)
    const [rotate, setRotate] = useState(false)

    const pathname = usePathname();

    useEffect(() => {
        const tl = gsap.timeline({ defaults: {duration: 2} })
    tl.fromTo("nav", { y: "-100%" }, { y: "0%" })
    }, [])

    useEffect(() => {
        if(showMenu) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "auto";
            setRotate(false)
        }
    },[showMenu])

    return (
        <nav className={` z-50 px-5 sm:px-6 lg:px-12 xl:px-32 sticky top-0 bg-white`}>
            {/* for screen larger than md */}
            <div className="py-5 pt-8 hidden lg:flex justify-between text-lg font-medium text-grayText items-center">
                <div>     
                    <Link href={'/'} className=" text-2xl text-black flex gap-2 items-center font-extrabold">
                        <Image src={'/LOGO4.jpg'} width={40} height={40} alt="logo" className=" rounded-lg"/>    
                        <h1>ChatBloom</h1>
                    </Link>     
                </div>
                <div className="flex lg:gap-20 xl:gap-36">
                    <div className="flex items-center gap-10">
                        <Link href={'/'} className={`${pathname === '/' ? ' text-black' : ''}`}>Home</Link>
                        <Link href={'/'}>Features</Link>
                        <Link href={'/pricing'} className={`${pathname === '/pricing' ? ' text-black' : ''}`}>Pricing</Link>
                    </div> 
                    <div className="flex items-center gap-8">
                        <Link href={'/'}>Login</Link>
                        <Link href={'/'}><button className=" bg-black hover:bg-[#fff] hover:text-black border border-black transition-all duration-500 text-white py-3 px-7 rounded-full">Get Started</button></Link>
                    </div>
                </div>
            </div>
            
            {/* for screen lower than md */}
            <div className="lg:hidden py-5 flex justify-between items-center">
                    <Link href={'/'} className="flex items-center gap-2 text-3xl font-extrabold">
                        <Image src={'/LOGO4.jpg'} width={30} height={30} alt="pic" />
                        <h1>ChatBloom</h1>
                    </Link>
                <div>
                    <Link href={'/'}><button className=" bg-black hover:bg-[#fff] hover:text-black border border-black transition-all duration-500 text-white py-3 px-7 rounded-full">Get Started</button></Link>
                </div>
               
                <div className={`${showMenu ? "  left-0" : " -left-[100%]"} text-lg fixed top-0 min-h-screen w-full`}>
                    <div onClick={() => setShowMenu(false)} className="absolute  overflow-y-hidden z-50 w-full min-h-screen bg-black opacity-50">
                    </div>
                    <div  className={`${showMenu ? "left-0 " : "-left-[100%]"} flex flex-col py-20 transition-all duration-500 min-h-screen max-h-screen ease-in-out px-10 w-1/2 gap-8 fixed top-0 z-50 bg-white  overflow-y-auto overflow-x-hidden `}>
                        <button onClick={() => setShowMenu(false)}  className="absolute top-5 right-5">X</button>
                        <Link className="border-b" onClick={() => setShowMenu(false)} href={'/'}>Home</Link>
                        <Link className="border-b" onClick={() => setShowMenu(false)} href={'/'}>Features</Link>
                        <Link className="border-b" onClick={() => setShowMenu(false)} href={'/pricing'}>Pricing</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
  }




  