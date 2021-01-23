import React from 'react'
import { useForm } from 'react-hook-form';

const Screen2 = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='login'>
            <form className='login-comp' onSubmit={handleSubmit(onSubmit)}>
                <input name="name" placeholder='Enter Your Name' type='text' ref={register({ required: true })}/>
                {errors.name?<span className='error'>Name is Required</span>:null}
                <input name="email" placeholder='Enter Your Email' type='text'ref={register({ required: true })}/>
                {errors.email?<span className='error'>Email is Required</span>:null}
                <input name="password" placeholder='Enter Your Password' type='password'ref={register({ required: true })}/>
                {errors.password?<span className='error'>Password is Required</span>:null}
                <button className='button-red'>Sign Up</button> 
            </form>
            <div className='footer-login'>
               <span> 
                   Already have an account? 
                   <span onClick={()=>props.switchState(false)} className='button-footer-login'> Sign In</span>
                </span>
            </div>
        </div>
    )
}

export default Screen2
