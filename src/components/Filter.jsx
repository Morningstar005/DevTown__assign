import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setProductRange, setSearch } from '../slices/ProductSlices'
import { ProductData, PriceRange } from '../data/ProductData'

const Filter = () => {
    const { search, category, ProductRange } = useSelector((state) => state.prods)
    const dispatch = useDispatch()

    const searchDispatch = (e) => {
        dispatch(setSearch(e))
    }
    const categoryDispatch = (e) => [


        dispatch(setCategory(e))
    ]
    const priceSetDispatch = (e) => {
        dispatch(setProductRange(e))
    }
    return (
        <div className='flex flex-col md:flex-row gap-y-2 w-[60%] md:w-full mx-auto md:mx-0'>
            <input
                type="text"
                className='w-full md:w-[50%] h-[38px] pl-12 p-4 bg-gray-200 rounded-l-full max-sm:rounded-full outline-none cursor-pointer text-sm border-r-2 border-white placeholder:text-black'
                value={search}
                placeholder='Search here'
                onChange={(e) => {
                    searchDispatch(e.target.value)
                }}
            />
            <select
                className='w-full md:w-[25%] bg-gray-200 capitalize outline-none border-r-2 border-white'
                name="category"
                id="Category"
                value={category}
                onChange={(e) => {
                    categoryDispatch(e.target.value)
                }}>
                <option>
                    Choose Category
                </option>
                {
                    ProductData.map((prodData) => (
                        <option key={prodData.title} value={prodData.Category}>{prodData.Category}</option>
                    ))}
            </select>

            <select
                className=' w-full md:w-[25%] bg-gray-200 rounded md:rounded-r-full'
                name='price'
                id='Price'
                value={ProductRange}
                onChange={(e) => {
                    // console.log(e.target.value)
                    priceSetDispatch(e.target.value)
                }}
            >
                <option>
                    Choose Price Range
                </option>
                {
                    PriceRange.map((Price) => (

                        <option value={Price.min} key={Price.min}>
                            {Price.max}
                        </option>

                    ))
                }
            </select>
        </div>
    )
}

export default Filter