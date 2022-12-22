import { Link } from 'react-router-dom';

export const Header = (props) => {


  return (
    <header>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-2 col-4 left">
                    <Link to='/' >Product</Link>
                    
                </div>
          
                <div className="col-lg-10 col-md-8 col-5 right mx-auto ">
                    <Link to='/about'  >About</Link>
                    <Link to='/expensive' className='mx-5' >Expensive</Link>
                </div>
                
            </div>
            
        </div>
       
    </header>
  )
}
