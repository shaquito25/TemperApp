import React, { useState } from 'react'
import { AddCountry } from './components/AddCountry'
import { CountryGrid } from './components/CountryGrid'


export const App = () => {


   // const countries = ["Venezuela" , "Argentina" , "Mexico"]

   const [Countries, setCountries] = useState(["Venezuela"])

  /* const handleAdd = () => {
    
            setCountries( cot => [...cot ]  )
   }*/
    
    return (
        
        <>

        <div>
  
        <h1>TemperApp</h1>

        <AddCountry setCountries={ setCountries } />


        <ol>

            {

                Countries.map(country => 

                   <CountryGrid 
                    
                    key={country}
                    country = {country}

                   />
                )

            }

        </ol>
        
        </div>

        </>
    )
}
