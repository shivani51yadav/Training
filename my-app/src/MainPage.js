import React from "react";
import Header from "./Header";
import UserData from "./UserData";
import Calc from "./Calc";
import Footer from "./Footer";
const MainPage = () => {
  return (
    <>
      {/* <div className='container'>Hello</div>
      <div className='constainer-fluid'>Hello row 1 </div>
      <div className='row'>Hello row 2</div> */}

      <div className="container">
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
          {/* <div className="col-3">abc</div> */}
        </div>
        <div className="row">
          <div className="col-9"><UserData/></div>
          <div className="col-3">abc</div>
        </div>
        <div className="row">
          <div className="col-6" style={{background:"gold"}}><Calc/></div>
          <div className="col-6" style={{background:"blue"}}>slider</div>
        </div>
        <div className="row">
          <div className="col-6"><marquee style={{background:"green", color:"white"}}>Hello</marquee></div>
          <div className="col-6">slider</div>
        </div>
        <div className="row">
          <div className="col-12"><Footer/></div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
