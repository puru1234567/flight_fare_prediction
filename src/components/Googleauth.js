import React, { Component, useCallback } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Details from "./Form";
import Landing from "./Landing";
import { Dropdown, Form } from "semantic-ui-react";

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

  


  
  render() {
    return (
      <div className="row mt-4">
        <div className="col-md-4">
          {this.state.isLoggedIn ? (
            <div>
              <Details/>
            
            <div style={{position:"absolute", top:"0%", left:"90%", width:"5px"}}>
              <div style={{display:"inline-block", width:"5px"}}>          
              
                  <GoogleLogout
                    clientId={CLIENT_ID}
                    buttonText={"logout"}
                    onLogoutSuccess={this.logout}  
                    icon={false}
                    render = {renderProps =>(
                      <img src={this.state.userInfo.profile} style={{borderRadius:"50%", width:"50px"}} onClick={renderProps.onClick} disabled={renderProps.disabled}/>)}  
                      redirectUri="http://localhost:3000/"      
                  ></GoogleLogout>
                  </div>


              <div style={{display:"inline-block", width:"2px"}}>
                <h3 style={{fontFamily:"inherit", color:"white"}}>{this.state.userInfo.name}</h3>
              </div>
                  </div>
                

                
              {/* <Details userInfo= {this.state.userInfo}/> */}
            </div>
          ) : (
            <div>
              <Landing/>

            <div style={{position:"absolute", top:"60%", left:"40%", width:"10%"}}>


            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Sign In To continue"
              onSuccess={this.responseGoogleSuccess}
              onFailure={this.responseGoogleError}
              isSignedIn={true}
              cookiePolicy={"single_host_origin"}
              style={{width:"20px"}}
              
              />
            </div>
        </div>
          )
        }
        </div>
      </div>
      );
  }
}
export default GoogleLoginComponent;