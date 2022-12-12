import React from 'react'

const PrItem = (props) => {
   const product = props.pr
   console.log(product);
    return (
           <div className="col-lg-4 col-12 mt-5 mycard">
                <div className="card " style={{"width": "18rem"}}>
                    <img className='card-img-top' src={product.image} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">Price :{product.price}</p>
                    </div>
                </div>
           </div>
    )
}

export default PrItem