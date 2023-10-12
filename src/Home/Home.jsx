import Products from "../Products/Products";

import Sidebar from "../SideBar/Sidebar";



// eslint-disable-next-line react/prop-types
const Home = ({ products, handleInputChange, handleClicked, result }) => {
  // eslint-disable-next-line no-undef
    return (
    
    <div className="grid grid-cols-5 gap-4 py-4">
      <div className="col-span-1">
        <Sidebar handleInputChange={handleInputChange} handleClicked={handleClicked} />
      </div>
      <div className="col-span-4">
      
        <Products products={products} result={result} />

      </div>
    </div>

  );
};

export default Home;

//
// onClickHandler={handleClick}
// onClickHandler={handleClick}
// onClickHandler={handleClick}
// onClickHandler={handleClick}