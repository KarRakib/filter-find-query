import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import {AddContext} from '../Context/ProductsContext'
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const Card = ({ img, title,  reviews, _id, price,company }) => {
  console.log();
  const {addToCart} = useContext(AddContext)
  const [qty, setQty] = useState(1);
  const handleAdd =(title, price,img,_id)=>{
    const product = {title,price,img,_id}
    addToCart({product,quantity:1})
  }
  return (
    <>
      <div className="card card-compact w-40 md:w-72 bg-base-100 shadow-xl">
                <figure><img className="md:w-40  h-32 w-24" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="md:card-title text-sm">{title} </h2>
                   <div className="flex justify-between">
                    
                    <p> ${price}</p>
                    <p>{reviews}</p>
                   <button onClick={()=> addToCart({title, price,img,_id,company},qty)} className="flex p-2 rounded-md items-center bg-rose-500 text-white "><CiShoppingCart/> Add  </button>
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