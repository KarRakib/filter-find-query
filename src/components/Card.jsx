import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ img, title,  reviews, prevPrice, newPrice }) => {
  return (
    <>
      <div className="card card-compact w-40 md:w-72 bg-base-100 shadow-xl">
                <figure><img className="md:w-40  w-24" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="md:card-title text-sm">{title} </h2>
                   <div className="flex justify-end">
                    
                    <p>{newPrice}</p>
                    <p>{reviews}</p>
                   </div>
                    <div className="card-actions justify-end">
                        <Link to='' className="btn btn-primary">Buy Now</Link >
                    </div>
                </div>
            </div>
    </>
  );
};

export default Card;