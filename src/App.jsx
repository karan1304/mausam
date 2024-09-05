import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './Components/Logo/Logo'
import Searchbar from './Components/Searchbar/Searchbar'
import Header from './Components/Header/Header'
import TemperatureCard from './Components/TemperatureCard/TemperatureCard'
import AdditionalDetails from './Components/AdditionalDetails/AdditionalDetails'
import AdditionalDetailsCard from './Components/AdditionalDetailsCard/AdditionalDetailsCard'
import CardContainer from './Components/CardContainer/CardContainer'
import DifferentCityCard from './Components/DiiferentCityCard/DifferentCityCard'
import DifferentCityCardContainer from './Components/DifferentCityCardContainer/DifferentCityCardContainer'
import HomeCard from './Components/HomeCard/HomeCard'
import axios from 'axios'

function App() {
  const [city , setCity] = useState('');
  const API_KEY='efab98e337c4053031f1c9ada7cf4c92';
  const [weatherdata , setWeatherData] = useState(null);
  const [differentCityWeatherData , setDifferentCityWeatherData] = useState([]);

  // this function is used to find latitude of a state and longitude of a state
  const findLatLong = async(state)=>
    {
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${state}&limit=1&appid=${API_KEY}`);
        const data = response.data;
        if(data.length===0)
        {
          return null;
        }
        else
        {
          const lat = data[0].lat;
          const long = data[0].lon;
          return {lat , long};
          
        }   
    }

    // Function used to find weather
    const findWeather = async(obj , search)=>
      {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${obj.lat}&lon=${obj.long}&appid=${API_KEY}&units=metric`);
        const data = response.data;
        if(search)
          {
            setWeatherData(data);
            return data.sys.country;
          }
          return data;
      }

      // find weather data of other cities
    const findOtherCitiesData = async(ctry)=>
      {
        const statesresponse =await axios.get("https://countriesnow.space/api/v0.1/countries/states");
        const statedata = statesresponse.data;
        const countrydata = statedata.data;
        const allstates = countrydata.filter((obj)=>obj.iso2 === ctry);
        const len = allstates[0].states.length;
        let citiesarray = [];
        let isExists;
        let citi='';

        for(let i=0;i<6;)
          {
            citi=(allstates[0].states[Math.floor(Math.random()*len)]).name.split(' ')[0];
            if(!citiesarray.includes(citi))
             {
               citiesarray.push(citi);
               i++;
             }
          }

          
          let citiesweatherdata=[];
          for(let x in citiesarray)
            {
              let obj = await findLatLong(citiesarray[x]);// finding latitude and longitude
              isExists=false;
              let data='';
              
              if(obj!==null)
               {
                 data = await findWeather(obj , false); //pass false if you are searching for different cities 
                  citiesweatherdata.push(data);
                }
              while(obj===null)
                {
                  while(!isExists)
                    {
                      citi = (allstates[0].states[Math.floor(Math.random()*len)]).name.split(' ')[0];
                      if(!citiesarray.includes(citi))
                        {
                          citiesarray[x]=citi;
                          obj = await findLatLong(citiesarray[x]);
                          if(obj!==null)
                           { 
                            isExists=true;
                            data = await findWeather(obj , false);
                            citiesweatherdata.push(data);
                          }
                        }
                    }
                }
            }
        setDifferentCityWeatherData(citiesweatherdata);
          }


  const handleSearch = async()=>
    {
      let latlong='';
      if(city==='')
        alert('search is empty')
      else
       { latlong = await findLatLong(city);
      if(latlong !== null&&latlong!=='')
        {
          let country = await findWeather(latlong , true);
          findOtherCitiesData(country);
        }
        else
        {
          alert('Invalid Input');
        }
       }
      
      setCity('');
    }

  return (
    <>
    <div className="container custom-container">
      <Header city={city} setCity={setCity} handleSearch={handleSearch}/>
      {weatherdata===null?<HomeCard/>:<CardContainer data={weatherdata}/>}
      {differentCityWeatherData.length===0?'':(<DifferentCityCardContainer data={differentCityWeatherData}/>)}
      
    </div>
    </>
  )
}

export default App
