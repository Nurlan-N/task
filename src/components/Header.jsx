
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CatecoryContext from '../context/CatecoryContext';
import PrItem from './PrItem';
import PrList from './PrList';

export const Header = (props) => {
    const categories = props.categories
    const [catecory,setCatecory] = useState('')
    
    const CategoriesHandler = (e) => {
        setCatecory(e.target.value)
    }

    
  return (
    <header>
        <CatecoryContext.Provider value={catecory}>
            <PrList/>
        </CatecoryContext.Provider>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-2 col-4 left">
                    <Link to='/' >Product</Link>
                    
                </div>
          
                <div className="col-lg-4 col-5 right mx-auto ">
                    <Link to='/about'  >About</Link>
                    <Link to='/expensive' className='mx-5' >Expensive</Link>
                </div>
                
            </div>
            <div className="selector ">
                        <select onChange={CategoriesHandler}  className="form-select w-50" aria-label="Default select example">
                            <option selected="selected" value="">All Categorie</option>
                            {
                                categories && categories.map(ct => {
                                    return(
                                        
                                        <option value={ct}>{ct}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
        </div>
       
    </header>
  )
}
