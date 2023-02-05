import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../../hook/useLogin";

function LoginPage(){
    let navigate = useNavigate();

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await login(email, password);
    }
    return (
        <div>
            <div className="flex flex-row h-screen w-screen">
                <div className="bg-red-900 w-3/5 grid h-screen place-items-center bg-cover" style={ { backgroundImage: `url("images/login/login.jpg")` }}>
                <form action="" onSubmit={handleSubmit}>
                    <div className="bg-gradient-to-tr from-red-800/40 to-gray-800/70  backdrop-blur-sm pt-16 pb-20 pl-24 pr-24 flex flex-col justify-center items-center rounded-xl">
                        
                            <div className="text-3xl text-white">Login</div>    
                            <div className="ml-20 mr-20 pt-20 pb-10 w-full">
                                <div className="text-lg w-full"><input onChange={(e)=> setEmail(e.target.value)} value={email} type="text" placeholder="Email/Username"  className="focus:outline-none text=4xl bg-black/0 border-0 text-white border-b-2 w-full placeholder-white " /></div>
                                <div className="text-lg mt-14"><input onChange={(e)=> setPassword(e.target.value)} value={password} type="Password"  placeholder="Password"  className="focus:outline-none text=4xl text-white bg-black/0 border-0 border-b-2 w-full placeholder-white " /></div>        
                            </div>
                            {error && <div className="rounded bg-red-300 pl-10 pr-10 pt-2 pb-2 border-2 border-red-800">{error}</div>}
                            <div className="flex justify-end items-center mt-16 bg-blue-00">
                                <div onClick={()=>(navigate("/register"))}  className="flex text-white items-center mr-5">Register</div>
                                <div><button disabled={isLoading} className="py-2 px-7 rounded bg-red-600">Login</button></div>
                            </div> 
                        
                    </div>
                    </form>
                </div>

                <div className="bg-white w-2/5 grid h-screen place-items-center">
                    <div className="m-28">
                        <div className="text-5xl mb-10"><span className="font-bold text-red-600">Surge</span> SE Internship {'\n'} March 2023</div>
                        <div className="text-4xl" >Senal Weerasekara</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LoginPage;