import React, { useEffect, useState } from 'react'



const Orderhistory = () => {
    const [orderData, setorderData] = useState({})
    const email = localStorage.getItem('email')

    const fetchMyOrder = async () => {
        console.log("fetchorder email: ",localStorage.getItem('email'))
        await fetch("http://localhost:4000/orderHistory/myOrderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email
            })
        }).then(async (res) => {
            let response = await res.json()
            console.log("fetch orderdata:",response)
            setorderData(response)

        })

    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

  return (
    <div>
        
        <div className='conatainer'>
                <div className='row'>

                    {console.log(orderData,"order lenth here")}
                    {orderData.length !==0 ? Array(orderData).map(data => {
                        console.log('returned data',data)
                        return (
                            /* `data.orderData` is checking if the `orderData` property exists in the
                            `data` object. If it exists, it means that there is order data available
                            for that particular `data` object. */
                            
                            data.order_data
                            ?

                                data.order_data.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            console.log("array data here",arrayData)
                                            let img = arrayData.img
                                            return (
                                                <div  >
                                                    {arrayData.orderDate ? <div className='m-auto mt-5'>

                                                        
                                                        {console.log("img",arrayData.img)}
                                                        
                                                        <hr />
                                                    </div> :

                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                <img src={img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>{arrayData.qty}</span>
                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                        <span className='m-1'>{arrayData.orderDate}</span>
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                            ₹{arrayData.price}/-
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>



                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) :"fff"
                        )
                    }) :
                    <div><h1 className="w-100 text-center m-5">Oops! You don't have any Orders!</h1></div>
                    }
                </div>


            </div>

    </div>
  )
}

export default Orderhistory