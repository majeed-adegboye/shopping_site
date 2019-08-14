import React, { Component } from 'react'
import '../App.css';
import {Link} from 'react-router-dom';
import SuggestionComment from '../layout/SuggestionComment'


import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCarouselCaption, MDBRow, MDBCol, MDBView, MDBMask} from "mdbreact";



export default class Home extends Component {
  state ={
    name:'',
    comment:''
       }
       handleChange = (e) => {
          this.setState({
              [e.target.id]:e.target.value
          })
       }
    
       handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
    }
       

    render() {
        return (
            
           <div className="homeApp position-fixed">
                <div className="homeSplit">
                <MDBContainer  >
      <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={true} multiItem >
        <MDBCarouselInner >
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBCol md="10">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1553546895-531931aa1aa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" />
                  <MDBCardBody>
                    <MDBCardTitle className="text-black">Fruits & Vegetables</MDBCardTitle>
                    <MDBCardText className="text-black">
                      Check out our fresh vegatables
                    </MDBCardText>
                    <Link to="/fruites-vegetables" ><MDBBtn color="primary"> View </MDBBtn></Link>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="10">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80" />
                  <MDBCardBody>
                    <MDBCardTitle className="text-black">Dairy</MDBCardTitle>
                    <MDBCardText className="text-black">
                      Dairy
                    </MDBCardText>
                    <Link to="/dairies" ><MDBBtn color="primary"> View </MDBBtn></Link>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBCol md="9">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1514792368985-f80e9d482a02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                  <MDBCardBody>
                    <MDBCardTitle className="text-black">Toiletries</MDBCardTitle>
                    <MDBCardText className="text-black">
                     Check the toiletries
                    </MDBCardText>
                    <Link to="/toiletries" ><MDBBtn color="primary"> View </MDBBtn></Link>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="9">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" />
                  <MDBCardBody>
                    <MDBCardTitle className="text-black">Drinks</MDBCardTitle>
                    <MDBCardText className="text-black">
                        Dinks
                      
                    </MDBCardText>
                    <Link to="/drinks" ><MDBBtn color="primary"> View </MDBBtn></Link>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>


                </div>

                
                    <div className="homeSplit2">
    
                    <MDBContainer>
                    <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                    
                    >
                    <MDBCarouselInner >
                 
                        <MDBCarouselItem itemId="1">
                        <MDBView>
                            
                            <img
                            className="img-fluid"
                            src="https://www.freewebheaders.com/wp-content/gallery/drinks/sodas-pet-bottles-on-store-shelves-web-header.jpg"
                            alt="first slide"

                            />
                            
                        
                        <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption className="text-white" >
                            <h1  className="h3-responsive">Drinks</h1>
                            <div className= "align-self-center mb0"><h2>10% discount offer on all our soft drinks product</h2></div>
                        </MDBCarouselCaption>
                        </MDBCarouselItem>
                       
                        <MDBCarouselItem itemId="2" >
                        <MDBView >
                            <img
                            className="d-block w-100"
                            src="https://www.freewebheaders.com/wp-content/gallery/beautiful-landscape/amazing-ocean-sunset-and-blue-clouds-landscape-web-header.jpg"
                            alt="Second slide"
                            />
                        <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption className="text-white" >
                            <h1 className="h3-responsive">Virtual Reality</h1>
                            <div><h2>Try our mordern electronic meditation room</h2></div>
                        </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                            className="d-block w-100"
                            src="https://www.freewebheaders.com/wp-content/gallery/liquids-headers/awesome-alcoholic-beverages-on-bar-shelves-background-header.jpg"
                            alt="Third slide"
                            />
                        <MDBMask overlay="black-slight" />
                        </MDBView>
                        <MDBCarouselCaption className="text-white" >
                            <h1 className="h3-responsive">Bar</h1>
                            <div><h2 >Introducing grocery free testing bar, coming soon!!!</h2></div>
                        </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                    </MDBCarousel>
                    </MDBContainer> 
                    
                    
                    <div className="text-black">

                    <div>
                            <MDBRow>
                                <MDBCol  className="coupon">
                                <MDBCard wide className="shape">
                                   <Link to="/default"> <MDBCardImage cascade className="img-fluid" src="https://www.lightingever.com/skin/frontend/default/lightingever2017/images/coupon/coupon_banner.jpg" /></Link>
                                    
                                </MDBCard>
                                </MDBCol>
                                </MDBRow>
                                <br/>
                                
                    </div>



                        </div>
                    <div>
                        

                        <div>
                                <MDBRow>
                                <MDBCol  >
                                <MDBCard wide className="shape">
                                    <MDBCardImage cascade className="img-fluid" src="https://images.unsplash.com/photo-1493655430214-3dd7718460bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                                    <MDBCardBody cascade className="text-black">
                                    <MDBCardTitle>Female Clothing</MDBCardTitle>
                                    <Link to="/default"><MDBBtn color="primary">View</MDBBtn></Link>
                                    </MDBCardBody>
                                </MDBCard>
                                </MDBCol>
                                <MDBCol >
                                <MDBCard narrow className="shape">
                                    <MDBCardImage cascade className="img-fluid" src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                                    <MDBCardBody cascade className="text-black">
                                    <MDBCardTitle>Baking Materials</MDBCardTitle>
                                    <Link to="/default"><MDBBtn color="primary">View</MDBBtn></Link>
                                    </MDBCardBody>
                                </MDBCard>
                                </MDBCol>
                                <MDBCol  >
                                <MDBCard cascade className="shape">
                                    <MDBCardImage cascade className="img-fluid" src="https://images.unsplash.com/photo-1526848707818-825332fe55f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                                    <MDBCardBody cascade className="text-black">
                                    <MDBCardTitle>Male Clothing</MDBCardTitle>
                                    <Link to="/default"><MDBBtn href="#" color="primary">View</MDBBtn></Link>
                                    </MDBCardBody>
                                </MDBCard>
                                </MDBCol>
                            </MDBRow>
                            </div>
                            
                   
                           
                            <br/>
                            
                            
                         
                                
                                   
                            <div className="text-black">
                            
                                   <Link to=""> Terms and Conditions</Link>
                                   <Link to="" > About</Link>
                                    <Link to="/contact" > Contact</Link>

                                    <Link to="" >@copyright 2019</Link>
                                
                            </div>
                
                </div>
                    </div>
                  <div className="homeSplit3" >
                                    <SuggestionComment>
                                      </SuggestionComment>      
                                       
                  </div>    
        </div>
       
        )
    }
}










 
