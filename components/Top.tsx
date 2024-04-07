import React from 'react'
import Image from 'next/image';
import Logo from '../public/ibadan-agent-logo.svg'

const Top = () => {
    return (
        <div className='fixed h-[30%] w-screen bg-[#52ADA2]'>
            <div className='max-w-[1100px] mx-auto mt-8'>
                <Image src={Logo} alt='' />
            </div>
        </div>
    )
}

export default Top;