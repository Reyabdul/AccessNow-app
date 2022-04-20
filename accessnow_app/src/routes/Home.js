import React from "react";
import GoogleMap from "../components/GoogleMap";
import '../routes/Home.css';
import './Home.css';
import Footer from "../components/Footer";
import Nav from "../components/Nav";


//The following function syntax is what is known as a functional component,
//where we write the component using function syntax as opposed to using a class.
//This is shorter and can be useful when there's not a lot logic.
function Home() {
  return(
    <div>
      <div className="Navigation">
        <Nav />
      </div>
      <GoogleMap />
      <Footer/>
    </div>
  )
};

export default Home;