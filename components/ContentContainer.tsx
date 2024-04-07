'use client';

import React from 'react'
// import { TbLogout2 } from 'react-icons/tb';
import { ContentLinks } from '../components/data/ContentDataLinks';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

type IProps = {
    children: any
}

const ContentContainer = ({ children }: IProps) => {
    const pathname = usePathname();

    return (
        <div className='sticky max-w-[1050px] mx-auto h-[1000px] max-h-[500px] overflow-y-auto z-10 px-[33.97px] py-[54.35px] bg-white rounded'>
            <div className='flex items-center justify-between'>
            <div className="mb-4 md:mb-0 md:mr-4 flex flex-col lg:flex-row lg:items-center items-start gap-2">
              <h2 className="text-2xl font-bold">Hey Hakeem -</h2>
              <p className="text-gray-400 text-sm md:text-base">
              here&apos;s what&apos;s happening with your account today
              </p>
            </div>
               
                <button className='flex items-center justify-center gap-2 cursor-pointer'>
                    {/* <TbLogout2 style={{ color: '#F0502F' }} /> */}
                    <span className="text-red-500 text-sm font-normal">Logout</span>
                </button>
            </div>
            <div className='flex items-center justify-start gap-10 mt-8'>
                {ContentLinks.map((item, idx) => {
                    const isActive =  pathname === item?.path || pathname.startsWith(item.path)
                    return (
                        <div key={idx}>
                            <Link href={item.path} as={item.path} className={isActive ? 'text-zinc-900 text-sm font-semibold' : 'text-zinc-900 text-sm font-normal'}>{item.name}</Link>
                        </div>
                    )
                })}
            </div>
            <div className='w-full my-2 bg-gray-500 h-[1px]'></div>
            <main className='mt-10'>{children}</main>
        </div>
    )
}

export default ContentContainer;