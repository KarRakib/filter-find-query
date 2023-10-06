import { useContext } from 'react';
import  { useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const LogIn = () => {
  const {userLogin} = useContext(AuthContext)
  const [erorr, setError] =useState('')
  const [userData, setUserData] = useState({
        email: '',
    password: '',
      });

  const handleChange = async (e) => {
    // e.preventDefault()
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    userLogin(userData.email, userData.password)
    .then((result)=>{
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
     console.error(errorCode,errorMessage);
    });
    
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Please LogIn</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring"
              required
            />
          </div>
          
         {erorr&& <p>{erorr}</p> }
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
