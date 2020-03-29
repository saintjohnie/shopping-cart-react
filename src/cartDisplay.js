import React from 'react';
let Cartdisplay=(props)=>{
return(
      <div className='header-count'>
          <div className="counter">
                  {props.counts===0?null:<h3>cart: {props.counts}</h3>}
                  {props.counts===0?null:<h3>Sum total:{props.sumTotal}</h3>}
          </div>
          <div>
              <img src={props.imageUrl} width='100px'height="100px"/>
              <h5>{props.name}</h5>
              <h6>{props.price}</h6>
          </div>
      </div>
    )
  }
export default Cartdisplay;
