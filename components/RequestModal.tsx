import React, { Dispatch, SetStateAction } from 'react'

type IRequestProps = {
    ID: string;
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>
}

const RequestModal = ({ ID, showModal, setShowModal }: IRequestProps) => {
    const handleCloseModal = (e: any) => {
        if (e.target.id === "container") setShowModal(!showModal)
    }
    if (!showModal) return null
    return (
        <div onClick={handleCloseModal} id="container" className='inset-0 fixed bg-black z-50 bg-opacity-90 overflow-y-auto'>
            <div className='absolute transform transition-transform duration-700 translate-x-[-50%] top-[50%] translate-y-[-50%] left-[50%]'>
                <div className='rounded-[1.25rem] max-h-[48rem] min-h-[35rem] w-[40rem] pt-[2.44rem] pb-[4rem] px-[2.75rem] bg-white'>
                    <div className='border-b-gray-300 border-b-[1px] flex justify-between pb-[1.7rem] mt-2'>
                        <div className=''>
                            <h2 className='font-bold text-[1.6rem] '>Request</h2>
                            <p className='mt-5 text-gray-500 text-[.95rem]'>Manage request</p>
                        </div>
                        <div onClick={() => { setShowModal(!showModal) }} className='bg-red-500 h-[3.25rem] w-[3.25rem] rounded-full flex items-center justify-center translate-x-3 cursor-pointer'>
                            <span className='bg-white h-[1.5rem] w-[1.5rem] rounded-full text-center text-red-500'>×</span>
                        </div>
                    </div>
                    <div className='mt-[2.87rem] flex flex-col gap-[1.68rem]'>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>REQUEST ID</span>
                            <span>{ID}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>REQUEST date</span>
                            <span>2/19/21</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>LOCATION</span>
                            <span>Oke Molete, Oke mopo, Ring road, Iwo road</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>PROPERTY PREFERENCE</span>
                            <span>3 BEDROOMS</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>BUDGET RANGE</span>
                            <span>#300,00 - #400,000</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>NAME</span>
                            <span>Jane Cooper</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>STATUS</span>
                            <span className={`text-yellow-500 bg-yellow-200 rounded-md text-center px-5`}>In Progress</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>EMAIL</span>
                            <span>trungkienspktnd@gmail.com</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-500'>WHATSAPP</span>
                            <span>08071798413</span>
                        </div>
                        <div>
                            <button className="w-full h-[45px] pl-[31px] pr-[32.58px] py-4 bg-emerald-400 rounded-[44px] justify-center items-center inline-flex">
                                <span className="text-center text-white text-base font-semibold font-['General Sans'] leading-tight">Contact via WhatsApp</span>
                            </button>
                            <button className="w-full h-[45px] pl-[31px] pr-[32.58px] mt-4 mb-6 py-4 bg-emerald-400 bg-opacity-10 rounded-[44px] justify-center items-center inline-flex">
                                <span className="text-center text-emerald-400 text-base font-semibold font-['General Sans'] leading-tight">Reject request with reason</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestModal;