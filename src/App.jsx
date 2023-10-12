
import AuthProvider from "./Context/AuthProvider";
import Route from "./Router/Route";
import ProductContext from "./Context/ProductsContext";



const App = () => {

  return (
    <div>
      <AuthProvider>
        <ProductContext>
          <Route />
                  </ProductContext>
      </AuthProvider>

    </div>
  );
};

export default App;