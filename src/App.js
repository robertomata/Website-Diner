import React,  {Component} from "react";
import './App.css';
import Product from "./components/product.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Pasta from "../public/img/Pasta.jpg";

class App extends Component {

  state = {
    mealArray: [
      { imgId:"img", imagePath: Pasta, name : "Pasta" , price: 150, description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      { imgId:"img", imagePath: "./img/avocado.jpg", name : "Avocado Sandwich", price: 50, description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { imgId:"img", imagePath: "./img/burger.jpg", name : "Cheese Burger", price: 80, description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { imgId:"img", imagePath: "./img/ribs.jpg", name : "Barbecue Ribs", price: 200,  description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      { imgId:"img", imagePath: "./img/milkshake.jpg", name : "Milkshake", price: 40,  description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      { imgId:"img", imagePath: "./img/pancake.jpg", name : "Pancakes", price: 30,  description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    ],
  };



render(){
  let message = "Rob's Diner";
  return (
    <div>
      <Header />
      
      <div id="wrapper">
      <h1>{message}</h1>

      <p>Rob's Diner aims to be a place for everyone to come and enjoy some good food. Serving traditional diner food and offering our all-day breakfast menu.
      A place to gather, a place to meet and a place to enjoy. Bottomless coffee, fresh juices combined with hearty American Diner meals.
      So come and join us at Rob's Diner, the best diner in the village!</p>
      
      </div>
      <div id="wrapper">
      <h2>Chef's Suggestions</h2>
      <div className="bodyWrapper">
      
      
      <Product imgId={this.state.mealArray[0].imgId} imagePath={this.state.mealArray[0].imagePath} name={this.state.mealArray[0].name} price={this.state.mealArray[0].price} description={this.state.mealArray[0].description} />
      <Product imgId={this.state.mealArray[1].imgId} imagePath={this.state.mealArray[1].imagePath} name={this.state.mealArray[1].name} price={this.state.mealArray[1].price} description={this.state.mealArray[1].description} />
      <Product imgId={this.state.mealArray[2].imgId} imagePath={this.state.mealArray[2].imagePath} name={this.state.mealArray[2].name} price={this.state.mealArray[2].price} description={this.state.mealArray[2].description} />
      <Product imgId={this.state.mealArray[3].imgId} imagePath={this.state.mealArray[3].imagePath} name={this.state.mealArray[3].name} price={this.state.mealArray[3].price} description={this.state.mealArray[3].description} />
      <Product imgId={this.state.mealArray[4].imgId} imagePath={this.state.mealArray[4].imagePath} name={this.state.mealArray[4].name} price={this.state.mealArray[4].price} description={this.state.mealArray[4].description} />
      <Product imgId={this.state.mealArray[5].imgId} imagePath={this.state.mealArray[5].imagePath} name={this.state.mealArray[5].name} price={this.state.mealArray[5].price} description={this.state.mealArray[5].description} />
      </div>
      
      <h3>Here you can find us!</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15628.814228022477!2d10.664727801379085!3d59.90744438934011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416c48af405dfb%3A0xc9eddc2174bb91ea!2zQnlnZMO4eSwgT3Nsbw!5e1!3m2!1sen!2sno!4v1615121776073!5m2!1sen!2sno" width="100%" height="150"  loading="lazy" allow="fullscreen" ></iframe>
      </div>
      <Footer />

    </div>
  )
}
}

export default App;

