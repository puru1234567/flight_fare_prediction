import React from 'react'
import { Icon } from 'semantic-ui-react'
import './Landing.css'
// import GoogleLoginComponent from './Googleauth'
function Landing() {
   

    return (
        <div>
            <div className="landing">
                    <div ><h1 className="high">
                        High Risers
                        <Icon name=" plane" size='small' color='yellow' />
                        </h1>
                    </div>
                {/* <video className='flight' autoPlay loop muted>
                    <source src={flight2} type='video/mp4' />
                </video> */}
            </div>

        </div>
    )
}

export default Landing;
