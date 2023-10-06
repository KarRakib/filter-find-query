import Products from "../Products/Products";
import Sidebar from "../SideBar/Sidebar";
import Button from "../components/Button";


// eslint-disable-next-line react/prop-types
const Home = ({ products, handleInputChange,handleClicked,result }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-1">
        <Sidebar handleInputChange={handleInputChange} handleClicked={handleClicked} />
      </div>
      <div className="col-span-4">
        <div>
          <div className="hidden md:block pb-3">
            <h2 className='recommended-title'> Recommend </h2>
            <div className="flex gap-1">

              <Button onClickHandler={handleClicked} value="" title=" All Products" />
              <Button onClickHandler={handleClicked} value="Nike" title="Nike" />
              <Button onClickHandler={handleClicked} value="Adidas" title="Adidas" />
              <Button onClickHandler={handleClicked} value="Puma" title="Puma" />
              <Button onClickHandler={handleClicked} value="Vans" title="Vans" />
            </div>
          </div>
        </div>

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