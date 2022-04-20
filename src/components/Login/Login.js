import React from 'react';
import {useForm} from "react-hook-form";
import './login.scss'
import {validateObjects} from "../assets/validateObjects";
import {useDispatch} from "react-redux";
import {setAuthorized} from "../../redux/actions/users__action";



const Login = () => {
    const {handleSubmit, register, formState: {errors}} = useForm({})
    const dispatch = useDispatch()

    const onFormSubmit = (data) => {
        dispatch(setAuthorized(data))
    }

    return (
        <div className='login' onSubmit={handleSubmit(onFormSubmit)}>
            <form className='login__form'>
                <h3 className='login__headingText'>Login</h3>
                <input {...register('email', {...validateObjects.email})} placeholder={'Email'} type="text" className='login__emailInput'/>
                {errors?.email && <span className="login__errorMessage">{errors?.email.message}</span>}
                <input {...register('password', {...validateObjects.password})} placeholder={'Password'} type="password"
                       className='login__passwordInput'/>
                {errors?.password && <span className='login__errorMessage'>{errors?.password.message}</span>}
                <button className='login__submitBtn'>Login</button>
            </form>
        </div>
    );
};

export default Login;