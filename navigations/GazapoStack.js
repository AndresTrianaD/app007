import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState , useEffect } from "react"
import { Input } from 'react-native-elements'
import { Div } from 'react-native-div'


export default function GazapoStack() {
  

    const [number, setNumber] = useState({one: 0, two: 0, three: 0})
    const [suma, setSuma] = useState()
  
    useEffect(()=>{
      const { one, two, three } = number
      setSuma(Number(one) + Number(two) + Number(three))
    },[number])
  
    const handleInput = (event) => {
      const { name, value } = event.target
      setNumber({...number, [name]: value})
    }
  
    return (
      <Div className="GazapoStack">
        <Input className="input" onChange={handleInput} name="one" value={number.one} placeholder="Ingesa un numero (1)"/>
        <Input className="input" onChange={handleInput} name="two" value={number.two} placeholder="Ingesa un numero (2)"/>
        <Input className="input" onChange={handleInput} name="three" value={number.three} placeholder="Ingesa un numero (3)"/>
        <Input value={suma}/>
      </Div>
    );
  }