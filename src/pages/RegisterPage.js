import {useState} from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage=()=>{
    const navigate=useNavigate();
    const [name, setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    
    const register=async(e)=>{
        const form =document.querySelector('.register form');
        e.preventDefault();
        try {
            if(password===confirmPassword){
                const url='';
                const response=await fetch(url,{
                    method:"POST",
                    body:JSON.stringify({
                        name,
                        email,
                        confirmPassword
                    }),
                    headers:{
                        'content-type':"application/json"
                    }
                })
                navigate('/');
                toast.success('Sign in successful')
                const parseRes=await response.json();
                console.log(parseRes);
            } else {
                toast.error("Password doesn't matct");
            }
            
        } catch (error) {
            form.reset();
            toast.error('Try again');
            console.log(error.message);
        }
    }
    return(
        <div className="register">
            <div className='option'>
                <button>Sign up with Google</button>
            </div>
            <form onSubmit={register}>
                <label>Username</label>
                <input type='name' placeholder='Kevin' onChange={(e)=>setName(e.target.value)} required/>
                <label>Email</label>
                <input type='email' placeholder='Kevin@gmail.com' onChange={(e)=>setEmail(e.target.value)} required/>
                <label>Password</label>
                <input type='password' onChange={(e)=>setPassword(e.target.value)} required/>
                <label>Confirm Password</label>
                <input type='password' onChange={(e)=>setConfirmPassword(e.target.value)} required/>
                <div>
                <button>Sign up</button>
                <Link style={{paddingLeft:'100px',textDecoration:'underline'}} to='/login'>Sign in</Link>
                </div>
            </form>

        </div>
    )
};

export default RegisterPage;