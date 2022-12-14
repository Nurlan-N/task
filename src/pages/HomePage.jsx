import PrList from '../components/PrList'

export const HomePage = (props) => {
  return (
    <div className='w-100'>
      
            <PrList pr = {props.products}/>
    </div>
  )
}
