import React from 'react'
import PrItem from '../components/PrItem'

export const Expensive = (props) => {
    const products = props.products
  return (
         <div className='container'>
        <div className="row">
        {
            products && products.map(item => {
                if(item.price > 200){
                    return(
                        <PrItem 
                            key = {item.id}
                            pr = {item}
                        />
                        
                    )
                }
                
            })
        }
        </div>
      </div>
  )
}
