// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Home/Home';
import Card from '../components/Card';
import RegisterForm from '../Authentication/Register';
import LogIn from '../Authentication/LogIn';
import AddOrder from '../Products/AddOrder';
import PaymentForm from '../Products/CheckForm';
import Payment from '../Products/Payment';

const Route = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [query, setQuery] = useState('');
  console.log(selectedProduct, 'selected');

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleInputChange = (e) => {
    setSelectedProduct(e.target.value);
  };

  useEffect(() => {
    fetch('https://e-shop-server-tau.vercel.app/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleClicked = (e) => {
    setSelectedProduct(e.target.value);
    console.log(selectedProduct);
  };

  // Filter the products based on the query and selected product
  const filteredItems = products.filter((product) => {
    const productMatchesQuery = product.title.toLowerCase().includes(query.toLowerCase());
    const productMatchesSelected =
      selectedProduct === '' ||
      product.category === selectedProduct ||
      product.color === selectedProduct ||
      product.company === selectedProduct ||
      product.newPrice === selectedProduct ||
      product.title === selectedProduct;
  
    return productMatchesQuery && productMatchesSelected;
  });

  const result = filteredItems.map((product) => (
    <Card
      key={product._id} // Assuming each product has a unique ID
      img={product.img}
      title={product.title}
      star={product.star}
      reviews={product.reviews}
      prevPrice={product.prevPrice}
      price={product.price}
      _id={product._id}
      company={product.company}
    />
  ));
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main query={query} handleQuery={handleQuery} handleClicked={handleClicked} />,
            children: [
                {
                    path: '/',
                    element: <Home result={result} handleInputChange={handleInputChange} handleClicked={handleClicked}  />
                },
                {
                  path:"/register",
                  element:<RegisterForm/>
                },
                {
                  path:"/login",
                  element:<LogIn/>
                },{
                  path:'/cart',
                  element:<AddOrder/>
                },
                {
                  path:'/payment',
                  element:<Payment/>
                }
            ]
        },

    ])
    return (
        <RouterProvider router={router}>

        </RouterProvider>
    );
};

export default Route;