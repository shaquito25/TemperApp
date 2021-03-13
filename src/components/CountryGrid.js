import React, { useState,useEffect } from 'react'


export const CountryGrid = ({ country }) => {

    const [Clima, setClima] = useState([])
  

    useEffect(()=>{

            GetTemp()
            
    }, [])

    const GetTemp = async() => {

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=d3803ff26ffa74bfb44ce6ce02e463a6&units=metric`
            const resp = await fetch(url)
            const {id, main} = await resp.json()
            
            const CountryTempData = {

                     temp: main.temp,
                     sensacion: main.feels_like,
                     humedad: main.humidity,
                     
            }
    
            console.log(id,main);
           
            setClima(CountryTempData)
            
    }
    
    return (

        <div className="card-temp  animate__animated animate__bounceInDown">


       <div className="card-h3">

                <h3>Pais/Ciudad/Estado</h3>               
                <h3>Temperatura</h3>
                <h3>Sensación Termica</h3>
                <h3>Humedad</h3>

       </div>
             
                 <div className="card-p">
                    <h3 key={country}>{country}</h3>
                     <p> {Clima.temp}° </p>
                     <p> {Clima.sensacion}° </p>
                     <p> {Clima.humedad}% </p>
    
                </div>
        </div>
    )
}
