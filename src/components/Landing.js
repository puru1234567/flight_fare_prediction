import React from 'react'
import flight2 from '../videos/flight2.mp4'
import './Landing.css'
import GoogleLoginComponent from './Googleauth'
function Landing() {
   

    return (
        <div>
            <div className="landing">
                <video className='flight' autoPlay loop muted>
                    <source src={flight2} type='video/mp4' />
                </video>
                    <div className="high">High Risers
                    {/* < GoogleLoginComponent style={{marginTop:"10%"}}/> */}
                    </div>
            </div>

        </div>
    )
}

export default Landing;
