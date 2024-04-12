import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"



const Home = () => {

  const addToCartHandler = () => {

  }

  return (
    <div className="home">
      <section></section>

    <h1>Latest Products
      <Link to={"/search"} className="findmore">More</Link>
    </h1>

    <main>
      <ProductCard 
        productId="adasdasd" 
        name="macbook" 
        price={109100} 
        stock={546} 
        handler={addToCartHandler} 
        photo="https://m.media-amazon.com/images/I/71ItMeqpN3L._AC_UY327_FMwebp_QL65_.jpg" />
    </main>

    </div>
  )
}

export default Home
