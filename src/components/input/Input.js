import React from 'react'
import './input.css'

const Input = (props) => {
    return (
        <input 
        className={props.className} 
        value={props.value} 
        onChange={props.onChange} 
        placeholder={props.placeholder} 
        name={props.name}
        type={props.type}
        ref={props.ref}/>
    )
}

export default Input
