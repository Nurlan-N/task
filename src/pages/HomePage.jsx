import React from 'react'
import PrList from '../components/PrList'

export const HomePage = (props) => {
  return (
    <div>
            <PrList pr = {props.products}/>
    </div>
  )
}
