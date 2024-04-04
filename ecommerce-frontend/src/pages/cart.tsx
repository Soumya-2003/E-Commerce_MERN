import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";

const cartItems = [

  {

    productId:"bjhgjkj",
    photo:"https://m.media-amazon.com/images/I/71ItMeqpN3L._AC_UY327_FMwebp_QL65_.jpg",
    name:"MacBook",
    price:3000,
    quantity:4,
    stock:10,

  }

];
const subtotal = 4000;
const tax = Math.round(subtotal*0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  const [couponCode,setCouponCode] = useState<string>("");
  const [isValidCouponCode,setisValidCouponCode] = useState<boolean>(false);

  useEffect(() => {

    const timeOutID = setTimeout(() => {
      if(Math.random()>0.5) setisValidCouponCode(true);
      else setisValidCouponCode(false);
    },1000);

    return () => {
      clearTimeout(timeOutID);
      setisValidCouponCode(false);
    }
  }, [couponCode])

  return (
    <div className="cart">
      <main>

        {
          cartItems.map((i,idx) => <CartItem key={idx}/>)
        }





      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em> - ₹{discount}</em>
        </p>
        <p><b>Total: ₹{total}</b></p>

        <input type="text" placeholder="Coupon Code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />

        {
          couponCode && (isValidCouponCode? (<span className="green">₹{discount} off using the <code>{couponCode}</code></span>) : <span className="red">Invalid Coupon <VscError /></span>)
        }

      </aside>
    </div>
  )
}

export default Cart
