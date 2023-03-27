import React, { useState,useEffect } from 'react'
import {Card} from './Card'
import axios from 'axios'

export const Main = () => {
    const [url,setUrl] = useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=0503e2c789e8931df0b108b074d6381d&hash=ee093803a658e76a8bf24dc1c7f24e4f")
    const [item, setItem] = useState()
    const [searchItem, setSearchItem] = useState()
    const onSearch = e => {
        setUrl(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchItem}&ts=1&apikey=0503e2c789e8931df0b108b074d6381d&hash=ee093803a658e76a8bf24dc1c7f24e4f`)
    }
    const onSetDefault = () => {
        setUrl('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=0503e2c789e8931df0b108b074d6381d&hash=ee093803a658e76a8bf24dc1c7f24e4f')
    }
    useEffect(() => {
        const fetch = async() => {
            const res = await axios.get(url)
            setItem(res.data.data.results)
        }
        fetch()
    }, [url])
    
  return (
    <>
     <div className='header'>
        <div className='bg'>
            <img src='/bg.png' alt=''></img>
        </div>
        <div className='search-bar'>
            <img src='/logo.jpg' alt=''></img>
            <input type='search' placeholder='Search Here' className='search'
            onKeyUp={onSearch} onChange={e => e.target.value !=='' ? setSearchItem(e.target.value):onSetDefault()}></input>
        </div>
    </div>
    <div className="content">
        {
            (item)? <Card data={item}/> : <p>Not Found</p> 
        }
    </div>
    </>
  )
}
