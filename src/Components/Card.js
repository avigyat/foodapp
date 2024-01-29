import React from 'react'

const Card = () => {
    return (
        <div>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-3 ">

                <img className="p-8 rounded-t-lg" alt="product image" />

                <div className="px-5 pb-5">

                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Food header</h5>

                    <div className=' container  text-gray-900 dark:text-white'>
                        <select className='m-2 h-100 bg-success rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded'>
                            <option value='half'>Half</option>
                            <option value='full'>Full</option>
                        </select>

                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">PRICE</span>
                        <p className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card