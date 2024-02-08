import React, { useState, useEffect } from 'react'
import Card from './Card'

const Foodarea = () => {
    const [cat, setcat] = useState([]);
    const [items, setitems] = useState([]);
    const host = "http://localhost:4000/api/foodData"

    const loadData = async () => {
        let response = await fetch(`${host}`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.

            headers: {
                "Content-Type": "application/json"

            }
        });
        response = await response.json();
        // console.log(response[0],response[1]);
        setitems(response[0]);
        setcat(response[1]);
    //    console.log(items ,"ITEMS")

    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div className="  h-full  bg-gradient-to-b from-black via-gray-800 to to-gray-700 p-8">
            <div >
                {
                    cat != [] ?
                        cat.map((data) => {
                            return (
                                <div className="row mb-3 " >

                                    <div key={data._id} className='text-white' >
                                        {data.CategoryName}
                                    </div>
                                    <hr className='4px bg-white ' />
                                    <div className="flex flex-wrap  mt-10 text-white" >

                                        {
                                            items != [] ? items.filter((item) =>
                                                item.CategoryName === data.CategoryName
                                            ).map((filteredItems) => {

                                                return (
                                                    
                                                        <div key={filteredItems._id} className='text-white px-2 py-2' >
                                                           {console.log(filteredItems.options,"OPTIONS")}
                                                            <Card 
                                                                foodCategory={filteredItems.CategoryName}
                                                                foodName ={filteredItems.name}
                                                                foodImgSrc ={filteredItems.img}
                                                                foodOptions ={filteredItems.options}
                                                                foodDescription ={filteredItems.description}>
                                                            </Card>
                                                        </div>
                                                    

                                                )
                                            })
                                                : <div>No data found</div>
                                        }
                                    </div>

                                </div>
                            )

                        }) : ""
                }

            </div>



        </div>
    )
}

export default Foodarea