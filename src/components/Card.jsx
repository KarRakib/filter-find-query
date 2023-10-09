import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import {AddContext} from '../Context/ProductsContext'
// eslint-disable-next-line react/prop-types
const Card = ({ img, title,  reviews, _id, newPrice }) => {
  console.log();
  const {addToCart} = useContext(AddContext)
  const handleAdd =(title, newPrice,img,_id)=>{
    const product = {title,newPrice,img,_id, quantity:1}
    addToCart(product)
  }
  return (
    <>
      <div className="card card-compact w-40 md:w-72 bg-base-100 shadow-xl">
                <figure><img className="md:w-40  h-32 w-24" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="md:card-title text-sm">{title} </h2>
                   <div className="flex justify-between">
                    
                    <p> ${newPrice}</p>
                    <p>{reviews}</p>
                   <button onClick={()=> handleAdd(title, newPrice,img,_id)} className="flex p-2 rounded-md items-center bg-rose-500 text-white "><CiShoppingCart/> Add  </button>
                   </div>
                    {/* <div className="card-actions justify-end">
                        <Link to='' className="btn btn-primary">Buy Now</Link >
                    </div> */}
                </div>
            </div>
    </>
  );
};

export default Card;