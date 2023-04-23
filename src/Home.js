import React from "react";
import "./home.css";
import logo from "./step-1.jpg";
import step2 from "./step-2.jpg";
import step3 from "./step-3.jpg";
import step4 from "./step-4.jpg";


function Home() {
  return (
    <>
      <section class="home" id="home">
        <div class="content">
          <h3>The Quickest Food Delivery</h3>
          <p>
            Our Goal Is To Fill Your Stomach With <br />
            Delicious Food That Is Delivered Quickly
          </p>
          <a href="/login" class="btn">
            Order Now
          </a>
        </div>

        <div class="image">
          <img src="https://e0.pxfuel.com/wallpapers/160/33/desktop-wallpaper-pizza-macro-pc-high-resolution-cool-pizza.jpg" />
        </div>
        {/* About Us */}
      </section>
      <section class="about" id="about">
        <h3 class="heading"> about us </h3>
        <h1 class="heading"> why choose us? </h1>

        <div class="row">
          <div class="image">
            <img
              src="https://besthqwallpapers.com/Uploads/30-3-2018/46492/pizza-margarita-fast-food-pizza-with-vegetables-pizza-without-meat.jpg"
              alt=""
            />
          </div>

          <div class="content">
            <h3>The Best Food In The State</h3>
            <p>
              Big plate chicken is a type of chicken stew that is generally said
              to have been created by a migrant from Sichuan, living in Shawan
              County in northern Xinjiang, who mixed hot chili peppers with
              chicken and potatoes in an attempt to reproduce a Sichuan taste.
            </p>

            <div class="icons-container">
              <div class="icons">
                <i class="fas fa-shipping-fast"></i>
                <span>Free Delivery</span>
              </div>
              <div class="icons">
                <i class="fas fa-dollar-sign"></i>
                <span>Easy Payments</span>
              </div>
              <div class="icons">
                <i class="fas fa-headset"></i>
                <span>24/7 Service</span>
              </div>
            </div>
            <br />
            <a href="/login" class="btn">
              Order Now
            </a>
          </div>
        </div>
      </section>
      <br />
      <div class="step-container">
        <h3 class="heading">how it works</h3>

        <section class="steps">
          <div class="box">
            <img src={logo} />

            <h3>Choose From Different Varieties</h3>
          </div>
          <div class="box">
            <img src={step2} alt="" />
            <h3>Fast and Efficient Delivery</h3>
          </div>
          <div class="box">
            <img src={step3} alt="" />
            <h3>Payments Made Easy</h3>
          </div>
          <div class="box">
            <img src={step4} alt="" />
            <h3>Enjoy Your Food</h3>
          </div>
        </section>
        <br />
        <br />

        <section class="review" id="review">
          <h3 class="heading">
            {" "}
            our customers <span>reviews</span>{" "}
          </h3>

          <div class="box-container">
            <div class="box">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
              <h3>Sophia</h3>
              <div class="stars">
                <i class="fas fa-star" style={{ color: "#FDCC0D" }}></i>
                <i class="fas fa-star" style={{ color: "#FDCC0D" }}></i>
                <i class="fas fa-star" style={{ color: "#FDCC0D" }}></i>
                <i class="fas fa-star" style={{ color: "#FDCC0D" }}></i>
                <i class="far fa-star" style={{ color: "#FDCC0D" }}></i>
              </div>
              <p>
              The pizza here is real amazing and would recommend trying these guys out. They have a great toppings selections and great prices on a single sliced. 
              </p>
            </div>
            <div class="box">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
              <h3>Sandeep Sam</h3>
              <div class="stars">
                <i class="fas fa-star" style={{ color: "#FDCC0D" }}></i>
                <i class="fas fa-star" style={{ color: "#FDCC0D" }}></i>
                <i class="fas fa-star" style={{ color: "#FDCC0D" }}></i>
                <i class="fas fa-star" style={{ color: "#FDCC0D" }}></i>
                <i class="far fa-star" style={{ color: "#FDCC0D" }}></i>
              </div>
              <p>
              The ease of using the app. The UI of the app. Delivery services
are amazing. Transferring updates on your order is one of the finest
thing{" "}
              </p>
            </div>
            <div class="box">
              <img src="https://media.istockphoto.com/id/1338289824/photo/close-up-image-of-indian-man-with-buzz-cut-hairstyle-to-disguise-receding-hairline-wearing-t.jpg?s=612x612&w=0&k=20&c=YGf5cEYxFFnl3_ZaP0kwbJqTFk9IIOymvtQUgXHstTg=" alt="" />
              <h3>Vijay Arora</h3>
              <div class="stars">
                <i class="fas fa-star" style={{ color: "#FDCC0D" }}></i>
                <i class="fas fa-star" style={{ color: "#FDCC0D" }}></i>
                <i class="fas fa-star" style={{ color: "#FDCC0D" }}></i>
                <i class="fas fa-star" style={{ color: "#FDCC0D" }}></i>
                <i class="far fa-star" style={{ color: "#FDCC0D" }}></i>
              </div>
              <p>
                Ordering food from your favourite restaurant with fast delivery
                and polite delivery services always you can think of when you
                want to order food{" "}
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>

        <section class="footer">
          <div class="box-container">
            <div class="box">
              <h3>Locations</h3>
              <a href="#">Bangalore</a>
              <a href="#">Mysore</a>
              <a href="#">Chennai</a>
              <a href="#">Tirupathi</a>
              <a href="#">Hyderabad</a>
            </div>

            <div class="box">
              <h3>Quick Links</h3>
              <a href="/home">Home</a>
              <a href="/login">Login</a>
              <a href="/cart">Cart</a>
            </div>

            <div class="box">
              <h3>Contact Info</h3>
              <a href="#">+91 6360722072</a>
              <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=dschakri9@gmail.com">
                dschakri9@gmail.com
              </a>
              <a href="https://en.wikipedia.org/wiki/Bangalore">
                Bangalore, India - 560001
              </a>
            </div>

            {/* <div class="box">
              <h3>Follow Us</h3>
              <a href="https://www.twitter.com/dschakri117/">Twitter</a>
              <a
                href="https://www.linkedin.com/in/"
              >
                linkedin
              </a>
            </div> */}
          </div>

          <div class="credit">
            {" "}
            copyright @ 2023 by <span>Sai Chakri</span>{" "}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
