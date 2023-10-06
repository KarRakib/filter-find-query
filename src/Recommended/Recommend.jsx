import Button from '../components/Button'
import './Recommend.css'
// eslint-disable-next-line react/prop-types
const Recommend = ({handleClick})=>{
    return (
        <div>
           <h2 className='recommended-title'> Recommend </h2>
           <div className="recommended-flex">
          
           <Button onClickHandler={handleClick} value="" title=" All Products" />
           <Button onClickHandler={handleClick} value="Nike" title="Nike" />
           <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
           <Button onClickHandler={handleClick} value="Puma" title="Puma" />
           <Button onClickHandler={handleClick} value="Vans" title="Vans" />
           </div>
        </div>
    )
}
export default Recommend