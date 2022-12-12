import React from 'react'
import PrItem from './PrItem'


const PrList = (props) => {
    const data = props.pr
   console.log(data);
  return (
    <div className='container'>
        <div className="row">
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