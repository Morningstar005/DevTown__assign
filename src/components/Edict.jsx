import React from 'react'

const Edict = ({ prodData }) => {
    return (
        <div className='flex flex-col cursor-pointer h-[38rem]  bg-gray-100 p-3 md:w-[90%]  rounded-md hover:scale-105 transition-transform  duration-200'>
            <div className='relative w-full'>
                {
                    prodData?.image && (
                        <img src={prodData?.image} alt={prodData?.Category}
                            className='object-cover w-96 h-66 origin-center mx-auto lg:object-center rounded-t-md' />
                    )
                }
                <div>
                    <div className='flex flex-col w-full bg-opacity-70 bg-gray-800  rounded drop-shadow-lg text-white p-5  justify-between'>
                        <p className='font-semibold mb-2'>
                            {prodData.title}
                        </p>
                        <p className='mb-1 font-bold'> ${prodData.price_in_inr}</p>
                        <p className='text-[15px] opacity-80'>
                            {prodData.description.slice(0, 100)}...
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-5 flex-1'>
                <p className=' capitalize text-lg font-bold'>
                    {prodData.Category}
                </p>
            </div>
            <a href='#'
                className="mt-5 font-bold flex items-center group-hover:underline">
                Read More
            </a>
        </div>
    )
}

export default Edict