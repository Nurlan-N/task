import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import PrItem from './PrItem'



const PrList =  (props) => {
    const [pr,setPr] = useState([])
    const categories = props.categories

    const [value,setValue] = useState('all')

    const CategoriesHandler = (e) => {
        setValue(e.target.value)
    }


    useEffect(() => {
      const getPr = async() => {
        const respons = await axios.get('https://fakestoreapi.com/products')
        setPr(respons.data)
      }
      getPr();
    }, [])

  return (
    <div className='container'>
      <div className="selector ">
                        <select defaultValue='all' onChange={CategoriesHandler}  className="form-select w-50 mx-auto mt-5" aria-label="Default select example">
                            <option selected="selected" value='all'>All Categorie</option>
                            {
                                categories && categories.map(ct => {
                                    return(
                                        <option value={ct}>{ct}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
        <div className="row ">
            {
                pr.map(item => {
                  if (value === 'all') {
                    return(
                      <PrItem 
                      key = {item.id}
                      pr = {item}
                      />
                  )
                  }else if (item.category.toLowerCase().includes(value.toLocaleLowerCase())) {
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

export default PrList