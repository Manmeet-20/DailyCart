import React from 'react'

const CategoryCard = ({ name, image }) => {
    return (
        <div className='overflow-hidden transition-all hover:scale-105 transition-all rounded-xl shadow-md overflow-hidden hover:shadow-lg duration-300'>
            <div className=''>
                <div className='aspect-square relative bg-gray-200'>
                    <img src={image} alt={name} className='object-cover w-full h-full' />
                </div>
                <div className='p-4 text-center'>
                    <h3 className='font-medium'>{name}</h3>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
