import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill} from 'react-icons/bs'
import './Products.css'
import Card from '../components/Card'
const Products = ({result}) => {
   
    // const datas = [
    //     {
    //         img:"https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",

    //     },
    //     {
    //         img:"https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",

    //     },
    //     {
    //         img:"https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",

    //     },
    //     {
    //         img:"https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",

    //     },
    //     {
    //         img:"https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",

    //     },
    //     {
    //         img:"https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",

    //     },
    //     {
    //         img:"https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",

    //     },
    //     {
    //         img:"https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",

    //     },
    //     {
    //         img:"https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",

    //     },
    //     {
    //         img:"https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",

    //     },
    //     {
    //         img:"https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",

    //     },
    //     {
    //         img:"https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",

    //     }
    // ]
    return (
        <>
        <div className='container'>

        <section className='card-conatiner'>{result}
        {/* <Card  ></Card> */}
         </section>
        </div>
        </>
    //    <div className='container'>
    //      {
    //         datas.map((data, i)=>(
    //             <section key={i} className='card-container'>
    //         <div className="card">
    //             <img className='card-img' src={data.img} alt="shoe" />
    //             <div className="card-details">
    //                 <h3 className='card-title'>
    //                     Shoe
    //                 </h3>
    //                 <section className="card-reviews">
    //                     <AiFillStar className='rating-star' />
    //                     <AiFillStar className='rating-star'/>
    //                     <AiFillStar className='rating-star'/>
    //                     <AiFillStar className='rating-star'/>
    //                     <span className="total-reviews">4</span>
    //                 </section>
    //                 <section className="card-price">
    //                     <div className="price">
    //                         <del>$300</del> 200
    //                     </div>
    //                     <div className="bag">
    //                         <BsFillBagHeartFill className='bag-icon'/>
    //                     </div>
    //                 </section>
    //             </div>
    //         </div>
    //     </section>
    //         ))
    //     }
    //    </div>
    )
}
export default Products