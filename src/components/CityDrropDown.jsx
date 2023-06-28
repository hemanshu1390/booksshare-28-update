import React from 'react';
import{Country,State,City} from 'country-state-city'
import ReactFlagsSelect from "react-flags-select";
import { useState } from 'react';
const CityDrropDown = () => {
  const [country , getcountry]=useState([])
  const [countryid , getcountryid]=useState('')
  const [stat , getStat]= useState([])
  const [stateid,getstateid]=useState('')
  const [citi , getciti]= useState([])
  


    const countries=(Country.getAllCountries())




   const HandleclickOne=(event)=>{
    const getCountry= event.target.value;
    console.log(getCountry)
    getcountryid(getCountry)
    getcountry(countries)
   }
    const Handleclicktwo=(event)=>{
      const getstateId=event.target.value
      console.log(getstateId)
      getstateid(getstateId)

        getStat(State.getStatesOfCountry(countryid))
    }

 const    Handleclickthree = () =>{
    getciti(City.getCitiesOfState(countryid,stateid))
 }

    return (
        <div className='container text-center'>
        <div className='mt-5'>
            <label>country</label>
            <select className='form-select' onClick={HandleclickOne}><option >Select country</option>
            {
                country.map((country)=>
                <option key={country.isoCode}value={country.isoCode}>{country.name}</option>
                )
            }
            </select>
            </div>
           <div className='mt-5'>
            <label>State</label>
            <select className='form-select' onClick={Handleclicktwo}><option>Select State</option>
            {
             stat.map((state)=>
              <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
             )
            }
            </select>
            </div>

            <div className='mt-5'>
            <label>city</label>
            <select className='form-select' onClick={Handleclickthree}><option>City</option>
            {
             citi.map((cit)=>
                 <option key={cit.isoCode}>{cit.name}</option>

             )
            }
            
            </select>
            </div>
            
    
        </div>
    );
}

export default CityDrropDown;