import React from 'react'
import Button from '../../components/button/Button'
import { useForm } from 'react-hook-form';

const Screen1 = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
      };

    return (
        <div className='login'>
                <form className='login-comp' onSubmit={handleSubmit(onSubmit)}>
                    <Button label={<><img alt="/" src="https://img.icons8.com/fluent/100/000000/google-logo.png"/> Login with Google</>} className='google-button'/> 
                    <h3>or</h3>
                    <input name="email" placeholder='Enter Your Email' type='text'ref={register({ required: true })}/>
                    {errors.email?<span className='error'>Email is Required</span>:null}
                    <input name="password" placeholder='Enter Your Password' type='password'ref={register({ required: true })}/>
                    {errors.password?<span className='error'>Password is Required</span>:null}
                    <button className='button-red'>Login</button> 
                </form>
            <div className='footer-login'>
               <span> 
                   New to Safe Space? 
                   <span onClick={()=>props.switchState(true)} className='button-footer-login'> Join Now</span>
                </span>
            </div>
        </div>
    )
}

export default Screen1
