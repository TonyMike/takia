
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-white py-12 px-10 md:px-16 lg:px-20 gap-y-8 items center">
      <div className="flex flex-col lg:flex-row justify-between gap-y-4">
        <div className="flex flex-col lg:flex-row gap-x-4 gap-y-4">
          <div className="text-md">© 2024 TAKIA, All Right Reserved</div>
          <div className="flex gap-x-4 md:gap-x-8 text-md font-bold">
            <a href="#">Privacy</a>
            <a href="#">Term of Use</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
          </div>
        </div>
        <div className="flex gap-x-10 text-2xl ml-0">
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <CiTwitter />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>

        </div>
      </div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
      mollitia culpa nesciunt blanditiis laboriosam placeat accusamus, vel
      suscipit iste, quam laborum illo veniam ipsum exercitationem, quia odit
      ipsam vero at. Maxime deleniti totam reiciendis libero excepturi, aliquam
      quasi quia ut.
      <div></div>
    </div>
  );
};

export default Footer;
