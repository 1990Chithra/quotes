import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Apifetch() {

 const [quotes, setQuotes] = useState([])
  const [randomQuote, setRandomQuote] = useState()
const fetchQuotes = async () => {
   try {
     const response = await axios.get('https://dummyjson.com/quotes')
     setQuotes(response.data.quotes)
   } catch (error) {
     console.error(error);
   }
 }
 const generateRQuote = () => {
   const rIndex = Math.floor(Math.random() * quotes.length)
   setRandomQuote(quotes[rIndex])
   console.log(quotes[rIndex]);
 }

 useEffect(() => {
   fetchQuotes()
 },[])
 
  return (
   <div className="justify-center"style={{paddingTop:'50px',paddingBottom:'50px',backgroundColor:'ButtonFace'}}>
      {randomQuote &&
        <article className='text-center text-black'>
          <p className='mb-3'>
            {randomQuote.quote} 
          </p>
          <p className='text-success font-bold'>{randomQuote.author}</p>
          <p className='text-danger font-bold'>{randomQuote.id}</p>

        </article>
      }
      <button onClick={generateRQuote} className='text-dark btn btn-primary'>Generate Quote</button>
    </div>
  )
}

export default Apifetch