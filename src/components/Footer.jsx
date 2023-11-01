import React from 'react'


const tags = [
    {
        tagname: "Home"
    },
    {
        tagname: "About Us"
    },
    {
        tagname: "Services"
    },
    {
        tagname: "Contact"
    }
]
const Footer = () => {
  return (
    <footer className='bg-gray-700 text-white px-6 md:px-20 py-10'>
        <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center'>
            <div className='mb-4 lg:mb-0 space-y-2'>
            <p className='text-white text-[21px] font-bold'>
                        DevTown
                        <span className='text-red-600'>
                            Products
                        </span>
                    </p>
            </div>
            <div className='flex space-x-4'>
                {
                    tags.map((tag)=>(
                        <a href="#" className="hover:font-bold transition-all duration-200 ease-in-out px-2" key={tag.tagname}>
                            {tag.tagname}
                        </a>
                    ))
                }
            </div>
        </div>
    </footer>
  )
}

export default Footer