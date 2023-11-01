import React from 'react'
import { AiOutlineUser } from "react-icons/ai"
const Navbar = () => {
    return (
        <div className='w-full border-b-2'>
            <div className='flex justify-between items-center px-6 md:px20 py-4'>
                <a href="/" className='flex items-center gap-1'>
                    <p className='text-gray-700 text-[21px] font-bold'>
                        DevTown
                        <span className='text-red-600'>
                            Products
                        </span>
                    </p>
                </a>

                <div className='flex gap-x-5 items-center'>
                    <AiOutlineUser height={25} width={25} />
                </div>
            </div>

        </div>
    )
}

export default Navbar