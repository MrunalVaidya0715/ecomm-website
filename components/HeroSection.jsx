import Image from 'next/image'
import React from 'react'
import img1 from '../public/assets/budget1.jpg'
const HeroSection = () => {
    return (
        <div className=' py-20 flex flex-col w-full'>
            <div className=' flex flex-col w-full items-center justify-start h-screen'>
                <Image className=' w-full h-[600px] object-cover object-center' src={img1} alt='/' />

            </div>

        </div>
    )
}

export default HeroSection