import { useContext } from "react";
import Searchbar from "../../components/searchbar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
function HomePage() {
  const {currentuser} = useContext(AuthContext);
  console.log(currentuser)
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place
          </h1>
          <p>
          Welcome to <b> GHAR KHARDIO</b>, your ultimate destination for buying and selling properties with ease and confidence. At <b> GHAR KHARDIO</b>, we offer a user-friendly platform designed to connect buyers and sellers in the real estate market seamlessly. Whether you’re looking to find your dream home or sell your property at the best price, our extensive listings and advanced search features make it simple.
          <br/> <br/>

Explore a wide range of properties, from cozy apartments to luxurious villas, each detailed with high-quality images and comprehensive descriptions. Our expert team is dedicated to providing personalized support and insightful advice, ensuring a smooth and transparent transaction process.
          </p>

          <Searchbar/>

          <div className="boxes">
               <div className="box">
                  <h1>16+</h1>
                  <h2>Years of Experience</h2>
               </div>
          
               <div className="box">
               <h1>200</h1>
               <h2>Award Gained</h2>
            </div>


            <div className="box">
            <h1>1200+</h1>
            <h2>Property Ready</h2>
         </div>


          </div>

        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
