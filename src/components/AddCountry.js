import React, { useState } from 'react'

export const AddCountry = ({setCountries}) => {

   const [inputValue, setinputValue] = useState("")

   const handleInputChange = (e) => { 

         setinputValue(e.target.value);
   }

   const handleSubmit = (e) =>{

            e.preventDefault()


           if(inputValue.trim().length > 2 ){
            
            setCountries(c => [inputValue, ...c])

            setinputValue("")
      }
   }

    return (

          <form onSubmit = {handleSubmit}>

                <input 

                placeholder="Introduzca un Pais/Estado/Ciudad"  
                type="text"
                value={inputValue}
                onChange={handleInputChange}


                />

        </form>
        
    )
}
