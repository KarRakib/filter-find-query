// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Navbar = ({ query, handleQuery }) => {
  const { user, userLogOut } = useContext(AuthContext)
  console.log(user?.email);
  const logOut = () => {
    userLogOut()
      .then(res => res.json())
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl">E-Shop</Link>
        </div>
        <ul>
          {
            user?.email ? <li><Link to={'/register'}> {user?.displayName} </Link> </li> : <Link to={'order'}> Order</Link>
          }
        </ul>
        <div className="flex-none gap-2">
          <div className="flex">
            <input value={query} onChange={handleQuery} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            <select className="select select-primary w-full max-w-0 md:max-w-xs">
              <option disabled selected>What is the best TV show?</option>
              <option>Game of Thrones</option>
              <option>Lost</option>
              <option>Breaking Bad</option>
              <option>Walking Dead</option>
            </select>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li onClick={() => logOut()}><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;