
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col text-sm bg-black text-white py-5 px-5 md:py-12  md:px-16 lg:px-20 gap-y-6 items center">
      <div className="flex flex-col lg:flex-row justify-between gap-y-4">
        <div className="flex flex-col lg:flex-row gap-x-4 gap-y-4">
          <div className="flex gap-x-4 md:gap-x-8 text-sm font-bold">
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


      <div className="text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
        mollitia culpa nesciunt blanditiis laboriosam placeat accusamus, vel

      </div>
      <div className="text-sm">© 2024 TAKIA, All Right Reserved</div>

    </div>
  );
};

export default Footer;
