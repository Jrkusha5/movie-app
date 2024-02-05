import React from 'react'
import './App.css'
import 'bootstrap/js/dist/modal'
import { useState } from 'react'
import axios from 'axios'


const Result = ({result,openDetail}) => {
     const[title,setTitle]=useState({})
     const handleData=(id)=>{
        axios('http://www.omdbapi.com/?i=tt3896198&apikey=1431e59b').then(({data})=>{
            let result =data;
            setTitle(result)
            alert(id)
        });

     }

  return (
    <div className='result ' onClick={e=> openDetail(result.imdbID)}>
        <div className='border border-dark border-4'>
        <img src={result.poster} alt=''/>
        </div>
        <div className='bg-dark text-white p-2'>
        <h3>{result.Title}</h3>
        </div>
        
    </div>
  )
}

export default Result