import { FaApple } from "react-icons/fa"
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div >
      <div className="flex text-white bg-black flex-col md:flex-row py-10 px-10 md:px-16 lg:px-28 gap-x-10 gap-y-8 justify-between" >
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col gap-y-2">
              <p className="text-md md:text-lg font-bold pb-2">Account</p>
              <a href='#'>My Account</a>
              <a href='#'>Login/Register</a>
              <a href='#'>Cart</a>
              <a href='#'>Wishlist</a>
              
              <a href='#'>Shop</a>
          </div>

      </div>

        <div className="flex">
          <div className="flex gap-x-5 md:gap-x-10 xl:gap-x-32 ">
            <div className="flex flex-col gap-y-2">
              <p className="text-md md:text-lg font-bold pb-2">Support</p>
              <a href='#'>Lorem ipsum dolor sit.</a>
              <a href='#'>esclusive@gmail.com</a>
              <a href='#'>+88015-88888-9999</a>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-md md:text-lg font-bold pb-2">Quick List</p>
              <a href='#'>Privacy Policy</a>
              <a href='#'>Term of Use</a>
              <a href='#'>FAQ</a>
              <a href='#'>Contact</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <div className="text-2xl font-bold pb-4">
            <p>Download App</p>
          </div>


          <div className="flex flex-col space-y-2">
            <p>Save $3 with App New User Only</p>
            <div className="flex items-center gap-x-3">
              <div className="flex-1 bg-white px-4"> 
                <img src="/public/Qrcode 1.png" alt="qr code" />
              </div>
              <div className="w-52 px-4 space-y-3">
                <div className="flex items-center gap-x-2 border-white border-2 p-2 rounded-xl ">
                  <IoLogoGooglePlaystore className="text-3xl" />
                  <div>
                    <p className="text-xs">GET IT ON</p>
                    <p className="text-xl font-bold">Google Play</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2 border-white border-2 p-2 rounded-xl">
                  <FaApple className="text-4xl" />
                  <div>
                    <p className="text-xs">Download on the</p>
                    <p className="text-xl font-bold">App Store</p>
                  </div>
                </div>
                <div className="flex justify-around text-white text-xl">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><CiTwitter /></a>
                  <FaInstagram />
                  <FaLinkedinIn />
                </div>

              </div>
            </div>
          </div>

          <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;