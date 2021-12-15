import React, {useState} from 'react'
import { Button, Form, Dropdown, Segment, Icon } from 'semantic-ui-react'
// import flying from '../videos/flying.mp4'
import Particles from "react-tsparticles";
import 'semantic-ui-css/semantic.min.css';
import './Form.css'
import { Fade } from 'react-reveal';

function Details (userInfo){

    const particlesInit = (main) => {
        // console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        // console.log(container);
      };

    
    const [data, setData] = useState( {date_dep:'', date_arr:'', source:'', destination:'', stopage:'', airline:''})


    const source = [
        { key: 'Delhi', text: 'Delhi', value: 'Delhi' },
        { key: 'Kolkata', text: 'Kolkata', value: 'Kolkata' },
        { key: 'Mumbai', text: 'Mumbai', value: 'Mumbai' },
        { key: 'Chennai', text: 'Chennai', value: 'Chennai' },
    ]

    const stopage = [
        { key: '1', text: '1', value: '1' },
        { key: '2', text: '2', value: '2' },
        { key: '3', text: '3', value: '3' },
        { key: '4', text: '4', value: '4' },
    ]

    const destination = [
        { key: 'Delhi', text: 'Delhi', value: 'Delhi' },
        { key: 'Cochin', text: 'Cochin', value: 'Cochin' },
        { key: 'Hyderabad', text: 'Hyderabad', value: 'Hyderabad' },
        { key: 'Kolkata', text: 'Kolkata', value: 'Kolkata' },
    ]

    const airline = [
        { key: 'Jet Airways', text: 'Jet Airways', value: 'Jet Airways' },
        { key: 'IndiGo', text: 'IndiGo', value: 'IndiGo' },
        { key: 'Air India', text: 'Air India', value: 'Air India' },
        { key: 'Multiple Carriers', text: 'Multiple Carriers', value: 'Multiple Carriers' },
        { key: 'SpiceJet', text: 'SpiceJet', value: 'SpiceJet' },
        { key: 'Vistara', text: 'Vistara', value: 'Vistara' },
        { key: 'Air Asia', text: 'Air Asia', value: 'Air Asia' },
        { key: 'Go Air', text: 'Go Air', value: 'Go Air' },
        { key: 'Multiple Carriers Premium Economy', text: 'Multiple Carriers Premium Economy', value: 'Multiple Carriers Premium Economy' },
        { key: 'Jet Airways Business', text: 'Jet Airways Business', value: 'Jet Airways Business' },
        { key: 'Vistara Premium Economy', text: 'Vistara Premium Economy', value: 'Vistara Premium Economy' },
        { key: 'Trujet', text: 'Trujet', value: 'Trujet' },

    ]

    const options = [{
                    
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
                
                    detectRetina: true,
                    
                }]

    const set = (name) => {
        return ({ target: { value } }) => {
          setData(oldData => ({...oldData, [name]: value }));
        //   console.log(data)
        }
      };

    const saveFormData = async (data) => {
        fetch("/predict", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((response)=>{response.json().then((res)=>{
            console.log(res)
            document.getElementById("segment").style.display= "none"
            document.getElementById("fare").style.display= "inline"
            document.getElementById("new").style.display= "inline"

            document.getElementById("fare").innerHTML= "Your total Journey fare is ₹ "+res.s
        })
        })
      }
    
    const handleChange = async(event) => {
        event.preventDefault();
        // console.log(data)
        try {
            await saveFormData(data);
            setData({date_dep:'', date_arr:'', source:'', destination:'', stopage:'', airline:''});
        }catch (e) {
                console.log(e)
            }
        }

    const choose = (e, data) => {
        setData(oldData => ({...oldData, [data.name]: data.value }));
    }

    const newJourney = (e) =>{
        window.location.reload()
    }

    const[color, setColor] =useState("white")
    const changeColor = (e) =>{
        if(color==="white"){
            setColor("yellow")
        }
        else{
            setColor("white")
        }
    }


    return (
        <div id="tsparticles">
            {/* <video className='flight' autoPlay loop muted>
                    <source src={flight2} type='video/mp4' />
                </video> */}

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={options}/>
  

            {/* <video className='flight' autoPlay loop muted>
                    <source src={flight2} type='video/mp4' />
                </video> */}
            <div className="details" >
                <Fade cascade>

                    <Fade left>
                    <h1 className="higher">High Risers 
                        <Icon name=" plane"  size='mini' color={color} fitted bordered={false} onClick={changeColor}/><br/>
            </h1>
            <p id="fare" style={{fontSize:"5vh", color:"yellow"}}></p>
            <Button animated size="huge" bordered={true} circular color="yellow" inverted onClick={newJourney} id ="new" style={{display:"none", width:"90px"}}>
              
            <Button.Content hidden style={{fontSize:"70%"}}>NewJourney

            </Button.Content>
            <Button.Content visible>
              <Icon size="large "name='plane' />
            </Button.Content>
          </Button > 
            </Fade>
                </Fade>
            

            
                

                <Segment id ="segment">
                    <Form >

                        <Form.Input label='Departure Date' placeholder='Departure Date'>
                            <input type="date" name="date_dep" id="" onChange={set('date_dep')} />
                        </Form.Input>

                        <Form.Input label='Arrival Date' placeholder='Arrival Date' >
                                <input type="date" name="date_arr" id="" onChange={set('date_arr')}/>
                        </Form.Input>
                        <Form.Input label='Source' placeholder='Source'>

                            <Dropdown name= "source" placeholder='Source' options={source} fluid selection className="item" onChange={choose}/>
                        </Form.Input>
                        <Form.Input label='Destination' placeholder='Destination'>

                            <Dropdown name="destination" placeholder='Destination' options={destination} fluid selection className="item" onChange={choose}/>
                        </Form.Input>
                        <Form.Input label='Stopage' placeholder='Stopage'>


                            <Dropdown name="stopage" placeholder='Stopage' options={stopage} fluid selection className="item" id="stop"onChange={choose}/>
                        </Form.Input>
                        <Form.Input label='Airline' placeholder='Airline'>

                            <Dropdown name="airline" placeholder='Which airline do you want to travel?' options={airline} fluid selection className="item" id="stop" onChange={choose}/>
                            </Form.Input>
                        <Button type='submit'style={{marginTop:"50px"}} onClick={handleChange} color='yellow' animated='vertical'>
                                <Button.Content visible>Submit</Button.Content>
                            <Button.Content hidden><Icon name="plane"></Icon></Button.Content>
                        </Button>
                    </Form>
                </Segment>

            
            </div>               
        </div>
    )
}

export default Details
