import Image from "next/image"
import Link from "next/link"

export default function Pricing() {
    return(
        <div className="px-5 sm:px-6 lg:px-12 xl:px-32 py-8 h-[1000px]">
             {/* pricing Header */}
            <div className="flex flex-col gap-10 justify-center items-center">
                <div className="text-center flex flex-col gap-3">
                    <h1 className=" text-4xl font-bold">Ready to get started?</h1>
                    <p className=" text-grayText text-lg font-medium">Choose a plan tailored to your needs</p>
                </div>
                <div className="flex gap-4 text-grayText cursor-pointer border rounded-s-lg rounded-e-lg px-[1px] py-[1px] border-gray-500 overflow-hidden">
                    <div className="text-white bg-black px-4 py-2 rounded-lg">Monthly</div>
                    <div className="px-4 py-2">Yearly</div>
                </div>
            </div>
            
            {/* pricing plans */}
            <div className=" grid grid-cols-fluid  gap-8 item-center justify-center px-4 py-8">
                <Pricingplan 
                    src="/seedling.svg"
                    popularity=""
                    planName="Lite"
                    planDesc = "Perfect to get started"
                    price= "11"
                    subscribe="Try 7 days for free"
                    planIncludes= "Lite includes:"
                    highlight1="Text-based Chat"
                    highlight2="Limited Conversations"
                    highlight3="Standard Responses"
                    highlight4="Basic Avatar"
                    highlight5="Email Support"

                />

                <Pricingplan 
                    src="/rocket.svg"
                    popularity="POPULAR"
                    planName="Plus"
                    planDesc = "Your best choice"
                    price= "19"
                    subscribe="Upgrade to Plus"
                    planIncludes= "Plus includes:"
                    highlight1="Advanced Conversations"
                    highlight2="Custom Responses"
                    highlight3="Enhanced Avatar"
                    highlight4="Image and File Support"
                    highlight5="Priority Support"

                />

                <Pricingplan 
                    src="/crown.svg"
                    popularity=""
                    planName="Pro"
                    planDesc = "Everything you need"
                    price= "35"
                    subscribe="Upgrade to Pro"
                    planIncludes= "Pro includes:"
                    highlight1="Natural Language Processing"
                    highlight2="Multilingual Support"
                    highlight3="Voice Interaction"
                    highlight4="AI Personality Customization"
                    highlight5="Dedicated Account Manager"
                />
            </div>
        </div>
    )
}

function Pricingplan({src, popularity, planName, planDesc, price, subscribe, planIncludes, highlight1, highlight2, highlight3,highlight4,highlight5}: 
    {   src: string, 
        popularity: string, 
        planName: string, 
        planDesc: string, 
        price: string,
        subscribe: string,
        planIncludes:string,
        highlight1:string,
        highlight2:string,
        highlight3:string,
        highlight4:string,
        highlight5:string,
    }) {
    return(
        <div className="border rounded-lg border-gray-500 inline-flex flex-col gap-8 relative px-6 pt-8">
            <div className={`absolute top-2 right-2 text-xs font-semibold ${popularity === "" ? "" : "bg-[#fca94c]"}  rounded-lg px-3 py-1 text-white`}><h1>{popularity}</h1></div>
            {/* first div */}
            <div className=" flex flex-col gap-3">
                <div className="flex gap-4 items-center">
                     <Image src={src} width={30} height={30} alt="pic"/>
                    <h1 className=" text-2xl font-semibold">{planName}</h1>
                </div>
                 <p className="text-grayText">{planDesc}</p>
            </div>

            {/* second div */}
            <div className="flex flex-col gap-5">
                 <h1 className=" text-5xl"><span className="text-grayText">$</span>{price}<span className="text-grayText text-lg">/month</span></h1>
                <button className="px-14 bg-black text-white hover:bg-white hover:text-black border border-gray-500 py-3 w-64 rounded-lg duration-300">{subscribe}</button>
            </div>

            {/* third div */}
            <div className="flex flex-col gap-4 text-grayText">
                <h1 className="text-black text-lg">{planIncludes}</h1>
                <div className="flex gap-2 items-center">
                    <Image src={'/check.svg'} width={25} height={25} alt="pic"/>
                    <h1>{highlight1}</h1>
                </div>
                 <div className="flex gap-2 items-center">
                    <Image src={'/check.svg'} width={25} height={25} alt="pic"/>
                    <h1>{highlight2}</h1>
                </div>
                <div className="flex gap-2 items-center">
                 <Image src={'/check.svg'} width={25} height={25} alt="pic"/>
                     <h1>{highlight3}</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <Image src={'/check.svg'} width={25} height={25} alt="pic"/>
                    <h1>{highlight4}</h1>
                 </div>
                 <div className="flex gap-2 items-center">
                    <Image src={'/check.svg'} width={25} height={25} alt="pic"/>
                    <h1>{highlight5}</h1>
                 </div>
            </div>
            <div className="text-center text-[#fca94c] w-full py-4 border-t">
                <Link href="/" className=" text-base font-medium">See all features</Link>
            </div>
        </div>
    )
}