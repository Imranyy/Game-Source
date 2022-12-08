import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginPage=()=>{
    const navigate=useNavigate();
    const [name, setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    const signIn=async(e)=>{
        const form =document.querySelector('.login form');
        e.preventDefault();
        try {
           
                const url='';
                const response=await fetch(url,{
                    method:"POST",
                    body:JSON.stringify({
                        name,
                        email,
                        password
                    }),
                    headers:{
                        'content-type':"application/json"
                    }
                })
                navigate('/');
                toast.success('Sign in successful')
                const parseRes=await response.json();
                console.log(parseRes);
        } catch (error) {
            form.reset();
            toast.error('Try again☠');
            console.log(error.message);
        }
    }
    return(
        <div className="login">
            <div className='option'>
                <button>Sign in with Google</button>
            </div>
            <form onSubmit={signIn}>
                <label>Username</label>
                <input type='name' placeholder='Kevin' onChange={(e)=>setName(e.target.value)} required/>
                <label>Email</label>
                <input type='email' placeholder='Kevin@gmail.com' onChange={(e)=>setEmail(e.target.value)} required/>
                <label>Password</label>
                <input type='password' onChange={(e)=>setPassword(e.target.value)} required/>
                <div>
                <button>Sign in</button>
                <Link style={{paddingLeft:'30px',textDecoration:'underline'}} to='/register'>create account?</Link>
                </div>
            </form>

        </div>
    )
};

export default LoginPage;