import { useContext } from 'react';
import  { useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const RegisterForm = () => {
  const {userRegister,userUpdateProfile} = useContext(AuthContext)
  const [erorr, setError] =useState('')
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    photo: null, // Store the selected file here
  });
const navigate = useNavigate()
  const handleChange = async (e) => {
    // e.preventDefault()
    const { name, value, files } = e.target;
    setUserData({
      ...userData,
      [name]: name === 'photo' ? files[0] : value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    userRegister(userData.email, userData.password)
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
    const formData = new FormData()
    formData.append('image', userData.photo)
    const res = await fetch("https://api.imgbb.com/1/upload?key=6bb48633bfbc918a0a729fbc017993b6",
      {
        method: "POST",
        body: formData
      })
    if (res.ok) {
      const data = await res.json();
      const profile = { displayName: userData.name, photoURL: data.data.url}
      console.log(profile);
      userUpdateProfile(profile)
      .then(data=>{
        console.log('final User',data);
      })
      .catch(error => console.error(error))
      console.log(data.data.url);
      toast.success("User Creteting")
      navigate('/')
    } else {
      console.erorr("faild to updoad image");
    }

  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring"
              required
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
              Profile Picture
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring"
            />
          </div>
         {erorr&& <p>{erorr}</p> }
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Register
          </button>
        </form>
      <div> Alrady Register  Please  <Link to={'/login'} className='text-blue-500'> Login</Link> </div>
      </div>
    </div>
  );
};

export default RegisterForm;
