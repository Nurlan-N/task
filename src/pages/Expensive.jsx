import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PrItem from '../components/PrItem'

export const Expensive = () => {
    const [pr,setPr] = useState([])

    useEffect(() => {
      const getPr = async() => {
        const respons = await axios.get('https://fakestoreapi.com/products')
        setPr(respons.data)
      }
      getPr();
    }, [])
  return (
         <div className='container'>
        <div className="row">
        {
            pr.map(item => {
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
