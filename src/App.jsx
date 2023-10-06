import AuthProvider from "./Provider/AuthProvider";
import Route from "./Router/Route";


const App = () => {
  
  return (
    <div>
    <AuthProvider>
      
    <Route/>
    </AuthProvider>
      
    </div>
  );
};

export default App;