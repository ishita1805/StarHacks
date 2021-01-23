import React,{ useState } from 'react'
import LoginComp from './Screen1'
import SignUpComp from './Screen2'
import '../input/input.css'

import './login.css'


const Login = () => {
    const [switchState, setSwitchState] = useState(false)

    if(!switchState) return <LoginComp switchState={(data)=>setSwitchState(data)}/>  
    else return <SignUpComp switchState={(data)=>setSwitchState(data)}/>  

}

export default Login
