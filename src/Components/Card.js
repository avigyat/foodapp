import React from 'react'

const Card = (props) => {
  let options = props.foodOptions[0]
  let priceOptions = Object.keys(options)

  
  
  return (
    
    <>
      <div className="max-w-sm  rounded overflow-hidden shadow-lg bg-slate-800 text-white">
        <img className="w-full" src={props.foodImgSrc} style={{height:"200px",objectFit:"fill"}}  />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.foodName}</div>
          <p className=" text-base">
            {props.foodDescription}
          </p>
        </div>
        <select className="m-2 h-100 rounded bg-success-500">
              {Array.from(Array(6),(e , i) =>{
                return(
                  <option key={i+1} value={i+1}>{i+1}</option>
                )
              })}
        </select>
        <select className="m-2 h-100 rounded bg-success-500">
              {priceOptions.map((data)=>{               
                return(
                  <option key={data} value={data}>
                      {data}
                  </option>)                
              })}
        </select>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.foodCategory}</span>
        </div>
      </div>
    </>
  )
}

export default Card