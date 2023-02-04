import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(){
    let navigate = useNavigate();

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(email, password);
    }
    return (
        <div>
            <div className="flex flex-row h-screen w-screen">
                <div className="bg-blue-200 w-3/5 grid h-screen place-items-center bg-cover" style={ { backgroundImage: `url("images/login/login.jpg")` }}>
                    <div className="bg-gradient-to-tr from-red-800/40 to-gray-800/70  backdrop-blur-sm pt-16 pb-20 pl-24 pr-24 flex flex-col justify-center items-center rounded-xl">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="text-3xl text-white">Login</div>    
                            <div className="ml-20 mr-20 pt-20 pb-10 w-full">
                                <div className="text-lg w-full"><input type="text" placeholder="Email"  className="text=4xl bg-black/0 border-0 text-white border-b-2 w-full placeholder-white " /></div>
                                <div className="text-lg mt-14"><input type="Password"  placeholder="Password"  className="text=4xl text-white bg-black/0 border-0 border-b-2 w-full placeholder-white " /></div>        
                            </div>
                            <div className="flex justify-end items-center mt-16 bg-blue-00">
                                <div onClick={()=>(navigate("/register"))}  className="flex text-white items-center mr-5">Register</div>
                                <div><button  className="py-2 px-7 rounded bg-red-600">Login</button></div>
                            </div> 
                        </form>
                    </div>
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