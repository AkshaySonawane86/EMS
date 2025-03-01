import React, { useState } from "react";
import "./Style.css";

const Login = ({handleLogin}) =>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    // console.log(props);
    // console.log(handleLogin);

    const submitHandler = (e) =>{
        //  console.log("Hello submited");   
        e.preventDefault()
        // console.log("Hello submitted");
        // console.log("Email is ",email);
        // console.log("Password is ",password);

        handleLogin(email,password)

        setEmail("");
        setPassword("");
    }


    return(

        <div className="flex h-screen w-screen items-center justify-center bg-black">
            <div className="border-2 border-emerald-600 p-20 rounded-xl">
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className="flex flex-col items-center justify-center">
            <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="border-2 text-white border-emerald-600 rounded py-3 text-xl px-5 outline-none bg-transparent placeholder:text-gray-400" placeholder="Enter your email" required />
            <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} className="border-2 text-white mt-3 border-emerald-600 rounded py-3 text-xl px-5 outline-none bg-transparent placeholder:text-gray-400" placeholder="Enter your password" required />
            <button className="text-white bg-emerald-600 border-none mt-5 rounded py-3 text-xl px-5">Log in</button>
            </form>
            </div>
        </div>
    )
}

export default Login