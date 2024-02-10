import React, { useState, useEffect } from 'react'
import Card from './Card'

const Foodarea = () => {
    const [search, setsearch] = useState("");
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
        <>
        {/* //CROUSAL AND SEARCH BAR */}
            <div>

                <section >
                    <div id="carouselExampleFade" className="carousel slide " data-ride="carousel" >
                        <div className="carousel-inner" style={{ height: "500px", objectFit: "fill" }}>
                            <div className="carousel-item active" >
                                <img src="https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU=" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://pbs.twimg.com/media/EGHYvtkUcAAuc8T?format=jpg&name=large" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://pbs.twimg.com/media/EGHYvtjU0AAO8w1?format=jpg&name=large" className="d-block w-100" alt="..." />
                            </div>
                            
                        </div>
                        
                    </div>
                </section>
                <section className=" align-middle w-full">
                    <div >
                        <div className='d-flex justify-content-center w-full bg-black ' >
                           
                                        <div className="col-lg-6 col-md-6 col-sm-6 mx-2 mt-2">
                                            <input type="text"
                                             className="form-control search-slt" 
                                             placeholder="Search" value={search} 
                                             onChange={(e)=>{setsearch(e.target.value)}}/>
                                        </div>                                      
                               
                        </div>
                    </div>
                </section>



            </div>

        {/* //Main FOOD AREA */}
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
                                                    (item.CategoryName === data.CategoryName) &&
                                                    (item.name.toLowerCase().includes(search.toLocaleLowerCase()))
                                                ).map((filteredItems) => {

                                                    return (

                                                        <div key={filteredItems._id} className='text-white px-2 py-2' >
                                                           
                                                            <Card
                                                                fooditems={filteredItems}
                                                                foodOptions={filteredItems.options[0]}
                                                                >
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
        </>
    )
}

export default Foodarea