import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const Marvel = () => {
    const {id} = useParams()
    const [item,setItem] = useState()
    const fetch = async() => {
        const res = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=0503e2c789e8931df0b108b074d6381d&hash=ee093803a658e76a8bf24dc1c7f24e4f`)
        setItem(res.data.data.results[0])
        console.log(res.data.data.results[0])
    }
    // fetch()
    useEffect(() => {
        fetch()
    }, [])
  return (
    <>
    {(item) ? 
     <div className="box-content row">
        <div className="col-md-1 col-12 "></div>
        <div className="right-box col-md-5 col-12 text-center">
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}  alt="" /> 
        </div>
        <div className="left-box col-md-5 col-12">
            <h1>{item.name}</h1>
            <h4>{item.description}</h4>
        </div>
        <div className="col-md-1 col-12 "></div>
    </div>
 :""}
   
    </>
  )
}
