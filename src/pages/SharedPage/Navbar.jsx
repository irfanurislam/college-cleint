import React, { useContext } from 'react';
import {  Link } from "react-router-dom";
import { AuthConext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
const Navbar = () => {
const {user,logOut} = useContext(AuthConext)

const handleLogOut = () =>{
  logOut()
  .then(result =>{
    Swal.fire({
      title: 'Success!',
      text: 'User Logout successfully',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  })
  .catch(error =>{
    console.log(error.message)
  })
}


  const navList =(
    <>
    <li>  <Link to='/college'>College</Link></li>
    <li> <Link to='/admission'>Admission</Link></li>

    {
      user ? <>
       <li>  <Link to='/mycollege'>My Collegue</Link></li>
       <li> <Link to='/myprofile'>{user?.email}</Link></li>
      </>: <>
      <li>  <Link to='/login'>My login</Link></li>
      </>
    }
   
    </>
  )
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navList}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">LearnPortal </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navList}
    </ul>
  </div>
  <div className="navbar-end">
 {
  user? <>
   <button onClick={handleLogOut} className="btn btn-primary">Logout</button>
  </>:<>
  <Link to='/signup'><button className="btn btn-primary">Sign Up</button></Link>
  </>
 }
  </div>
</div>
        </div>
    );
};

export default Navbar;