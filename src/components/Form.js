import React, {useState} from 'react'
import { Button, Form, Dropdown, Segment } from 'semantic-ui-react'
import flying from '../videos/flying.mp4'
import 'semantic-ui-css/semantic.min.css';
import './Form.css'
import GoogleLoginComponent from './Googleauth';
import { Router } from 'react-router';



function Details (userInfo){

    const [selectedOption, setSelectedoption] = useState(null)
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

    const set = (name) => {
        return ({ target: { value } }) => {
          setData(oldData => ({...oldData, [name]: value }));
          console.log(value)
        }
      };

    const saveFormData = async () => {
        const response = await fetch('/predict', {
          method: 'POST',
          body: JSON.stringify(data)
        });
        if (response.status !== 200) {
          throw new Error(`Request failed: ${response.status}`); 
        }
      }
    
    const handleChange = async(event) => {
        event.preventDefault();
        try {
            await saveFormData();
            setData({date_dep:'', date_arr:'', source:'', destination:'', stopage:'', airline:''});
        }catch (e) {
                console.log("error")
            }
        }

    const choose = selectedOption => {
        setSelectedoption({selectedOption});
    }

    console.log(data)
    
    

    

    return (
        <div>
            <video className='flight' autoPlay loop muted>
                    <source src={flying} type='video/mp4' />
                </video>
            <div className="details">
            <h1 className="higher">High Risers</h1>
            
                

                <Segment inverted>
                <h1 style={{color:"white"}}></h1>
            <Form inverted onSubmit={handleChange}>
                <Form.Input label='Departure Date' placeholder='Departure Date'>
                    <input type="date" name="date_dep" id="" onChange={set('date_dep')} />
                    </Form.Input>
                <Form.Input label='Arrival Date' placeholder='Arrival Date' >
                <input type="date" name="date_arr" id="" onChange={set('date_arr')}/></Form.Input>

                <Form.Group >
                <Dropdown name= "source" placeholder='Source' options={source} search selection className="item" onChange={choose} value={selectedOption}/>
                <Dropdown name="destination" placeholder='Destination' options={destination} search selection className="item" onClick={set('destination')}/>

                </Form.Group>
                <Form.Group>
                <Dropdown name="stopage" placeholder='Stopage' options={stopage} search selection className="item" id="stop"onSelect={set('stopage')}/>
                <Dropdown name="airline" placeholder='Which airline do you want to travel?' options={airline} search selection className="item" id="stop" onChange={set('airline')}/>
                </Form.Group>

                <Button type='submit'style={{marginTop:"50px"}} onClick={handleChange}>Submit</Button>
            </Form>
            </Segment>

            
            </div>
                {/* < GoogleLoginComponent style={{marginTop:"10%"}} isLoggedIn={isLoggedIn}/> */}
               
        </div>
    )
}

export default Details
