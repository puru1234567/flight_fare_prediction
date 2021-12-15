import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Details from "./Form";
import flight2 from '../videos/flight2.mp4'
import Particles from "react-tsparticles";


import { Button, Icon } from 'semantic-ui-react'
import './GoogleAuth.css'


const CLIENT_ID =
  "970326869644-6nu12ud0ccr7pb7ijnnlgjh2uo7gdok7.apps.googleusercontent.com";

class GoogleLoginComponent extends Component {
  constructor(props) {
    super(props);
    this.responseGoogleSuccess =this.responseGoogleSuccess.bind(this);
    this.state = {
      isLoggedIn: props.isLoggedIn,
      options:{ text:'Logout'},
      userInfo: {
        name: "",
        emailId: "",
        profile: "",

      },
    };
  }



  // Success Handler
  responseGoogleSuccess = (response) => {
    // console.log(response);

    let userInfo = {
      name: response.profileObj.name,
      emailId: response.profileObj.email,
      profile: response.profileObj.imageUrl
    };
    this.setState({ userInfo, isLoggedIn: true });
  };

  // Error Handler
  responseGoogleError = (response) => {
    console.log(response);
  };


  // Logout Session and Update State
  
  logout = (response) => {
    console.log(response);
    let userInfo = {
      name: "",
      emailId: "",
      profile: "",

    };
    this.setState({ userInfo, isLoggedIn: false });

    
  };

  particlesInit = (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  particlesLoaded = (container) => {
    // console.log(container);
  };
    


  
  render() {
    return (
      
      <div className="row mt-4">
        <div className="col-md-4">
          <video className='flight' autoPlay loop muted>
            <source src={flight2} type='video/mp4' />
          </video>
          <Particles
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={{
              
            fpsLimit: 60,
            interactivity: {
            events: {
                onClick: {
                enable: true,
                mode: "attract",
                },
                onHover: {
                enable: true,
                mode: "repulse",
                },
                resize: true,
            },
            modes: {
                bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
                },
                push: {
                quantity: 4,
                },
                repulse: {
                distance: 100,
                duration: 0.1,
                },
                attract:{
                    distance:200,
                    duration:0.4,
                }
            },
            },
            particles: {
            color: {
                value: "#fffff",
            },
            links: {
                color: "#e9c066",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "destroy",
                random: false,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                enable: true,
                value_area: 600,
                },
                value: 100,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                image: {
                    height: 500,
                    src: "https://particles.js.org/images/plane_alt.png",
                    width: 128
                  },
                  type: "image"
                    },
                //   opacity: {
                //     value: 1
                //   },                        
            },
            size: {
                random: true,
                value: 5,
            },
        
            detectRetina: true,}}/>
            
          {this.state.isLoggedIn ? (
            <div>          
                  <div style={{textAlign:"right", display:"flex-end", backgroundColor:"black"}} >
                  
                  
                  <GoogleLogout
                    clientId={CLIENT_ID}
                    buttonText={"logout"}
                    onLogoutSuccess={this.logout}  
                    icon={false}
                    // className="profile"
                    render = {renderProps =>(
                      <div style={{position:"absolute", top:"5%", left:"90%",transform: "translate(-50%, -50%)"}}>

                        <h3 className="username" style={{fontFamily:"inherit", color:"white", fontSize:"110%" }}>{this.state.userInfo.name} 
                        </h3>
                        <img src={this.state.userInfo.profile} style={{borderRadius:"90%", width:"30px", display:"inline-block"}} onClick={renderProps.onClick} disabled={renderProps.disabled} alt="Logout" className="profile"/>
                      </div>
                      )}  
                      redirectUri="http://localhost:3000/"      
                  ></GoogleLogout>
                  </div>

                  <Details/>
                

                
              {/* <Details userInfo= {this.state.userInfo}/> */}
            </div>
          ) : (
            <div>



                  <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText="Sign In"
                    onSuccess={this.responseGoogleSuccess}
                    onFailure={this.responseGoogleError}
                    isSignedIn={true}
                    cookiePolicy={"single_host_origin"}   
                    render = {renderProps =>(
                      <div>
                      <h1 className="high">
                        High Risers
                        {/* <Icon name=" plane" size='small' color='yellow' /> */}
                        <br/>
                      <Button animated size="huge" bordered={true} circular color="yellow" inverted onClick={renderProps.onClick}  className="login">
                      <Button.Content hidden>Sign In
    
                      </Button.Content>
                      <Button.Content visible>
                        <Icon size="large "name='plane' />
                      </Button.Content>
                    </Button >
                        </h1>
                    </div>)}        
                    />
                
        </div>
          )
        }
        </div>
      </div>
      );
  }
}
export default GoogleLoginComponent;