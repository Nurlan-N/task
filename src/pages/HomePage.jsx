import axios from 'axios'
import { useEffect, useState } from 'react'
import PrList from '../components/PrList'

export const HomePage = () => {
  const [category, setCategory] = useState([])

   
    useEffect(() => {
        const getCategory = async () => {
            setCategory(await axios.get('https://fakestoreapi.com/products/categories'))
        }
        getCategory();
    }, [])
  return (
    <div className='w-100'>
              <PrList categories = {category.data} />
    </div>
  )
}
