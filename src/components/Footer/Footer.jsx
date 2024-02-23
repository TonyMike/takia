import qr from '../../Assets/Qrcode 1.png'
import { FaApple } from "react-icons/fa"

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <p>Exclusive</p>
          <p>Subscribe</p>
          <div>
            <input type="email" placeholder="Enter your email" />

          </div>
        </div>

        <div>
          <p>Support</p>
          <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p>esclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
      </div>

      <div>
        <div>
          <p>Account</p>
          <p>My Account</p>
          <p>Login/Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div>
          <p>Quick List</p>
          <p>Privacy Policy</p>
          <p>Term of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
      </div>

      <div>
        <div>
          <p>Download App</p>
        </div>

        <div>
          <p>Save $3 with App New User Only</p>
          <div>
            <div>
              <img src={qr} alt="qr code" />
            </div>
            <div>
              <div></div>
              <div>
                <FaApple />

              </div>
            </div>
          </div>
        </div>

        <div>

        </div>
      </div>
    </div>
  );
}

export default Footer;