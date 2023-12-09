import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

export default function Home() {
  return (
    <>

    <div className="row">
      <div className="col-6">
      <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' width={200}  height={300}/>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className=' d-block w-100' alt='...' width={200}  height={300}/>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className=' d-block w-100' alt='...' width={200}  height={300} />
      </MDBCarouselItem>
    </MDBCarousel>
    
      </div>
      <div className="col-6">
      <MDBContainer fluid>
          <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Login Form
                  </p>

                  {/* <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100'/>
              </div> */}
                  

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput label="Your Email" id="form2" type="email" />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput label="Your Password" id="form2" type="password" />
                  </div>

            
                 

                  <MDBBtn className="mb-4" size="lg">
                    Submit
                  </MDBBtn>
                </MDBCol>

                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    fluid
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
    </div>
   
    <div className="row">
      <div className="col-3">
      <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./images2" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-3">
      <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./images2" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-3">
      <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./images2" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-3">
      <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./images2" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>

    <marquee style={{background:"green", color:"white"}}> <img src="data:image/jpeg;base64,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" alt="" srcset="" /> </marquee>

    </>

  );
}

