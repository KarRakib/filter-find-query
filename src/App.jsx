import { useEffect, useState } from 'react'
import './App.css'
import Nav from './Navbar/Nav'
import Products from './Products/Products'
import Recommend from './Recommended/Recommend'
import Sliderbar from './Slidebar/Sliderbar'


import Card from './components/Card'
function App() {
   const [allProducts, setAllProduct] = useState([])
 const [selectedCateory, setSelectedCateory] = useState(null)
 const [qurey, setQurey] = useState("")
 useEffect(()=>{
   fetch('/datas.json')
   .then(res=> res.json())
   .then(data =>{
    setAllProduct(data)
   })

 },[])
//   input - filter
 const handleInputChange = (e)=>{
  setQurey(e.target.value)
 }
 const filteredItems = allProducts.filter(
  (product) => product.title.toLowerCase().indexOf(qurey.toLowerCase()) !== -1
);
//  Radio filter 
console.log("1st",filteredItems);
const handleChange = (e)=>{
  setSelectedCateory(e.target.value)
 }
//  buton filter
const handleClick = (e) =>{
  setSelectedCateory(e.target.value)
}
function filteredData(products, selected, query) {
  let filteredProducts = products;

  // Filtering Input Items
  if (query) {
    filteredProducts = filteredItems;
  }

  // Applying selected filter
  if (selected) {
    filteredProducts = filteredProducts.filter(
      ({ category, color, company, newPrice, title }) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected
    );
  }

  return filteredProducts.map(
    ({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    )
  );
}
console.log("2nd ",filteredData);
const result = filteredData(allProducts, selectedCateory,qurey)
console.log('3rd',result);
  return (
    <>
   
    <Sliderbar handleChange={handleChange} handleClick={handleClick}/>
    <Nav qurey={qurey} handleInputChange={handleInputChange} />
    <Recommend handleClick={handleClick}/>
    <Products result={result} />
    </>
  )
}

export default App
