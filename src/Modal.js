// import React from 'react'
// import { render, createPortal } from "react-dom";
// import { ReactDOM } from 'react-dom'
// const  MODAL_STYLES ={
//     position: 'fixed',
//     top:'50%',
//     left:'50%',
//     backgroundColor: 'rgb(34,34,34)',
//     transform:'translate(-50%,-50%)',
//     zindex:1000,
//     height:'90%',
//     width:'90%'
// }
// const  OVERLAY_STYLES ={
//     position: 'fixed',
//     top:'0',
//     left:'0',
//     right:'0',
//     bottom:'0',
//     backgroundColor: 'rgb(0,0,0)',
//     zindex:1000
// }

// export default function Modal({children, onClose}) {
  
 
//   return createPortal(
//     <div>
//         <div style={OVERLAY_STYLES}>
//             <div style={MODAL_STYLES}>
//                 <button className='btn btn-danger fs-4' onClick={onClose} style={{marginLeft:'90%',marginTop:'-35%'} }>X</button>
//             </div>

//         </div>
//     </div>,
//     document.getElementById('cart-root')
//   )
// }
