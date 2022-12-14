import React, { useContext } from 'react'
import CatecoryContext from '../context/CatecoryContext'
import PrItem from './PrItem'



const PrList = (props) => {
    const data = props.pr
    const catecory = useContext(CatecoryContext)
    console.log(catecory);
  return (
    <div className='container'>
        <div className="row ">
            
        {
            data && data.map(item => {
                return(
                    <PrItem 
                    key = {item.id}
                    pr = {item}
                    />
                )
            })
        }
        </div>
      </div>
  )
}

export default PrList