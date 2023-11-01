import React, { useState } from 'react'
import { ProductData } from '../data/ProductData'
import Filter from './Filter'
import Edict from './Edict'
import { useSelector } from 'react-redux'


const ProductBox = () => {

    const { search, category, ProductRange } = useSelector((state) => state.prods)
    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 8;

    const totalPages = Math.ceil(ProductData.length / productPerPage);
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfirstProducts = indexOfLastProduct - productPerPage;
    const currentProduct = ProductData.slice(indexOfirstProducts, indexOfLastProduct)

    const onPageChange = (page) => {
        setCurrentPage(page)
    }
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <div className='w-full flex flex-col justify-end mx-auto mb-2 md:w-[76%] p-2 px-10 md:flex-row'>
                <Filter />
            </div>
            <div className='w-[80%] mx-auto h-[1px]  bg-yellow-400 mb-10 justify-center'></div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-16 gap-16 gap-y-16 pb-24 w-[100%] md:w-[95%] mx-auto items-center justify-center content-center'>
                {

                    currentProduct.filter((prodData) => {
                        if ((prodData.description.toLowerCase().includes(search.toLowerCase()) || search === '') && (
                            (category === '' || prodData.Category === category)
                        ) && (ProductRange === '' || prodData.price_in_inr >= ProductRange)) {
                            return prodData
                        } else return false
                    }).map((prodData) => (
                        <Edict prodData={prodData} key={prodData.title} />
                    ))



                }
            </div>
            <div className='flex items-center justify-center mx-auto mb-10 gap-x-5 lg:w-[5%] w-[10%] p-1 border rounded-lg bg-gray-400 '>
                {
                    pageNumbers.map(number => (
                        <button
                            key={number}
                            onClick={() => onPageChange(number)} className={`${number === currentPage ? "w-[25%] bg-gray-600 rounded-lg transition-all duration-200" : ""}`}>{number}</button>
                    ))
                }
            </div>

        </div>

    )
}

export default ProductBox