import React from 'react'
import Top from './Top';
import ContentContainer from './ContentContainer'

const DashboardLayout = ({ children }: any) => {
    return (
        <div className='relative'>
            <div className=''>
                <Top />
            </div>
            <div className='relative top-[110px]'>
                <ContentContainer children={children} />
            </div>
        </div>
    )
}

export default DashboardLayout;