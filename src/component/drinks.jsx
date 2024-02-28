import React, { useEffect, useState } from 'react'
import { LiaCocktailSolid } from "react-icons/lia";
import axios from 'axios';
const Drinks = () => {
  const [selectedDrinkId, setSelectedDrinkId] = useState(null);
  const [drink, setDrink] = useState([]);

  const handleOpen = (idDrink) => {
    setSelectedDrinkId(idDrink);
  };
  const handleClose=()=>{
    setSelectedDrinkId(false)
  }
  const[drinks, setDrinks]=useState([]);
  useEffect(()=>{
    const fetchData =async()=>{
      try{
        const response=await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
        setDrinks(response.data.drinks);
      }
      catch (error){
console.error('Error fetching data', error)
      }
    }
    fetchData();
  },[]);
  return (
    <div name='drinks' className='font-mono  mx-auto p-2 border bg-orange-600/30'>
          <h1 className='text-2xl lg:text-3xl font-bold text-orange-500 flex justify-center'>Quench Your Thirst : </h1>
          <div className='grid md:grid-cols-2 gap-4 text-md pt-4 w-full' >
        {drinks.map((drink) => (
          <div key={drink.idDrink} className='grid grid-cols-2 gap-2 md:gap-4 border bg-white/60 rounded-lg'>
            <div className='rounded-l-lg'>
              <img className='object-cover w-full h-full rounded-l-lg' src={drink.strDrinkThumb} alt={drink.strDrink} />
            </div>
            <div className='flex flex-col justify-between rounded-lg'>
              <div className='gap-1 flex flex-col pt-4'>
                <div><h2 className='font-bold text-xl italic text-orange-500'>{drink.strDrink}</h2></div>
            <div><p>{drink.strCategory}</p></div>
            <div>
              <p>Ingredients:</p>
            <ol className="ml-4">
              <li>{drink.strIngredient1}</li>
              <li>{drink.strIngredient2}</li>
              <li>{drink.strIngredient3}</li>
              <li>{drink.strIngredient4}</li>
              <li>{drink.strIngredient5}</li>
              <li>{drink.strIngredient6}</li>
            </ol>
            </div>
             <div>
              <button onClick={() => handleOpen(drink.idDrink)} className='p-1'><span className='flex flex-row lg:items-center lg:gap-1'>How we craft it<LiaCocktailSolid className='text-orange-500' size={20} /></span></button>
             </div>
             {selectedDrinkId === drink.idDrink &&(
          <div className='top-0 right-0 inset-0 w-full h-full'>
<div className='flex flex-col justify-center items-center top-0 gap-2 w-full h-full text-orange-500 font-bold'>
  <p>{drink.strInstructions}</p>
<button onClick={handleClose} className='border-none'>close</button>
</div>
          </div>
        )}
              </div>
              
            <div className='text-right m-2'>
              <button className='border-none bg-orange-500/60 text-white font-bold italic'>add drink</button>
            </div>
            </div>
          </div>
        ))}
      </div>
        
    </div>
  )
}

export default Drinks