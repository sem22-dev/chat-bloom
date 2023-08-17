"use client"

import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { useEffect } from 'react'

export default function Home() {
  
  useEffect(() => {
    const tl = gsap.timeline({ defaults: {duration: 2} })
    tl.fromTo(".title", { x: "-100%" }, { x: "0%" })
    tl.fromTo(".image", { opacity: 0 }, { opacity: 1 })
  },[])

  return (
    <main className=' z-0 px-5 sm:px-6 lg:px-12 xl:px-32 py-12 h-[1000px]'>
      <div className=' flex flex-col text-center lg:text-left lg:grid lg:grid-cols-2'>
        {/* left */}
        <div className=' title flex flex-col gap-7  font-semibold text-lg'>
          {/* description */}
          <div className='' >
            <h1 className=' text-5xl md:text-6xl leading-tight md:leading-tight  font-extrabold'>
              Presenting the next-gen Chatbot for your website
            </h1>
          </div>
          <div>
            <p className=' text-grayText text-base sm:text-lg'>
                Enhance your website's user experience with ChatBloom: 
                <br />
                the intelligent chatbot with a talking avatar. Engage visitors, 
                <br />
                provide instant help, and offer exceptional customer support.
            </p>
          </div>
          <div className=' items-center lg:items-start flex flex-col gap-4 '>
            <div className='flex gap-10 text-base sm:text-lg'>
              <Link href={'/'}>
                <button className=" bg-black  hover:bg-[#fff] hover:text-black border border-black transition-all duration-500 text-white py-4 px-6 sm:px-12 rounded-full font-normal">
                  Get Started <span className=' hidden sm:inline'>for free</span>
                </button>
              </Link>
              <Link href={'/pricing'}>
                <button 
                  className=" flex items-center gap-2 bg-white hover:-translate-y-2 transition-transform duration-300 border border-black py-4 px-6 sm:px-8 rounded-full">
                    <span>Pricing</span>
                    <Image src={'/arrow.svg'} width={20} height={20} alt='pic' className=' -rotate-45'/>
                </button>
              </Link>
            </div>
            <Link href={'/'} className=' underline flex gap-2 text-grayText'>
              <h1 className='pl-6'>Try now </h1>
              <Image src={'/star.svg'} width={20} height={20} alt='try'/>
            </Link>
          </div>
        </div>
        {/* right */}
        <div className='image hidden lg:block'>
          <Image src={'/bot.png'} width={1000} height={200} alt='pic' className=' object-fill'/>
        </div>
      </div>

      <div className=' hello pt-32'>
        {/* Second section */}
      </div>
    </main>
  )
}
