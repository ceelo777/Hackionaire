import React, { useEffect, useState } from "react";
import Infocard from './Infocard';
import MapLeaflet from "./Map";
import Table from "./Table";
import LineGraph from "./LineGraph"
import { sortData , PrintStatUnits} from "./Utilities";


import{
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent

} from "@material-ui/core";
import './App.css';
import 'leaflet/dist/leaflet.css';

//https://disease.sh/v3/covid-19/countries

function App() {

      const [countries, setCountries]= useState([]);

      const [country,setCountry] = useState('worldwide')

      const [countryInfo,setCountryInfo] = useState({});

      const [tableData,setTableData]= useState([]);

      const [mapCenter, setMapCenter] = useState({lat:34.8076, lng:-40.4796});
      
      const [mapZoom, setMapZoom] = useState(3);

      const [mapCountries, setMapCountries] = useState([]);

      const [casesType, setCasesType]= useState("cases");


      useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
        .then(res=> res.json())
        .then(data=> {
          setCountryInfo(data)
        })

      }, [])

  //Get the Dropdown
    useEffect(()  => {

      const getCountries = async () => {
       await  fetch("https://disease.sh/v3/covid-19/countries")
              .then((res) => res.json())
              .then((data) =>{
                let countries = data.map((country) => (
                  {
                    name: country.country,  //Name of country
                    value:country.countryInfo.iso2 //Country Code
                  
                  })); //End of map 
                
                const  sortedData= sortData(data);  
                setTableData(sortedData); 
                setMapCountries(data); 
                setCountries(countries);
              });
      };



      //Call the async function
      getCountries(countries);

    } , []);

   


    //Put the selected choice to effect on top
    const onCountryChange=async (e) => {
      const countryCode =e.target.value;
      console.log("Done ");

      setCountry(countryCode);
      //If from  dropdown, element is selected as Around the World or if element is selected as a specific country
      const url=countryCode ==="worldwide" ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

      await fetch(url)
            .then(res=> res.json())
            .then(data => {
              setCountry(countryCode);

              setCountryInfo(data);  //Json formatted data// Check console log for more 
              console.log(data)

            
              
              

              if (data.countryInfo) {
                setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
                  setMapZoom(4);

                  
                  //console.log("Lat: " , data.countryInfo.lat);
                } else {
                  setMapCenter([34.80746, -40.4796]);
                  setMapZoom(3);
                }
            });

    };

    console.log("COUNTRY INFO >>> ", countryInfo);

  return (
    <div className="app"> 
    <div className="app_left">


    <div className="app_header">
      <h1>Covid 19 Tracker </h1>
      <FormControl className="app_Dropdown">
        <Select variant= "outlined"  onChange={onCountryChange} value={country}>
       
        <MenuItem value = "worldwide">Around The World</MenuItem>
        
        {
          countries.map((country) => (
            <MenuItem value = {country.value}>{country.name}</MenuItem> //Using the custom made key value pair from map.
          ))
        }

          </Select> 
        </FormControl>
      </div>
         
        <div className= "app_info">
          <Infocard
           active={casesType === "cases"}

          onClick= {e => setCasesType("cases")} 
          title="Coronavirus Cases" no_of_cases={PrintStatUnits(countryInfo.cases)} />


          <Infocard 
            active={casesType === "recovered"}

           onClick= {e => setCasesType("recovered")} 
          title="Recovered" no_of_cases={PrintStatUnits(countryInfo.recovered)} />


          <Infocard
           active={casesType === "deaths"}

           onClick= {e => setCasesType("deaths")} 
          title="Deceased" no_of_cases={PrintStatUnits(countryInfo.deaths)} />

     
        </div>

        
     
        <MapLeaflet 
        casesType={casesType}
        countries={mapCountries} 
        center={mapCenter}
        zoom={mapZoom}  />

        


    </div>
     


      
       <Card>
        <CardContent className="app_right">
          <h3> Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3>Worldwide new {casesType} </h3>
          <LineGraph casesType={casesType} />
          
          
        </CardContent>
      </Card>
       
         


    </div>
  );
}

export default App;
