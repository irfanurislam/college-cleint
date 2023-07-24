import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-30 mb-12">
      <footer className="footer p-10 bg-black text-neutral-content">
  <div>
    <span className="footer-title">About Learnportals</span> 
    <a className="link link-hover">About Studyportals


</a>
    <a className="link link-hover">Our Marketing Services</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact us</a>
  </div> 
  <div>
    <span className="footer-title">Our websites</span> 
    <a className="link link-hover">
Bachelorsportal
</a>
    <a className="link link-hover">Mastersportal</a>
    <a className="link link-hover">EnglishTestportal</a>
    <a className="link link-hover">StudentInsuranceportal</a>
  </div> 
  <div>
          <span className="footer-title">Contact Information</span>
          <p className="">
            Address: AuckLand Music Street, Auckland City, FInland
            <br />
            Phone: +1234567890
          </p>
          <div className="flex flex-wrap justify-end mt-2">
            <Link to="#" className="btn btn-circle btn-outline ml-2 mb-2 sm:mb-0">
              <FaFacebook className="text-white text-xl" />
            </Link>
            <Link to="#" className="btn btn-circle btn-outline ml-2 mb-2 sm:mb-0">
              <FaTwitter className="text-white text-xl" />
            </Link>
            <Link to="#" className="btn btn-circle btn-outline ml-2 mb-2 sm:mb-0">
              <FaInstagram className="text-white h-4 w-4 text-xl" />
            </Link>
            <Link to="#" className="btn btn-circle btn-outline ml-2 mb-2 sm:mb-0">
              <FaGoogle className="text-white text-xl" />
            </Link>
          </div>
        </div>
</footer>






      <footer className="footer footer-center p-4 bg-black text-neutral-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Learn Portal </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
