import React from "react";
import { useState } from "react";
import { useSignup } from "../../hook/useSignup";
import { useNavigate } from "react-router-dom";
import { uploadFile } from "../../firebase";
import ReCAPTCHA from "react-google-recaptcha";

function RegisterPage(){
    let navigate = useNavigate();
    const [name, setName] = useState('')
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCon, setPasswordCon] = useState('')
    const [imageFile, setImage] = useState('')
    const {signup, error, isLoading} = useSignup()
    const [uploading, setUploading] = useState(false)

    const [verify, setVerify] = useState(true)
    const [verifyMsg, setVerifyMsg] = useState(null)
    const [capOnState, setCapOnState] = useState(false)
    const [valid, setValid] = useState('')

    const onChange = () => {
      setVerify(true);
    }

    const checkVerify = () => {
      setCapOnState(false)

      if(error || verifyMsg || valid){
          setCapOnState(true)
          setVerify(false)
      }

      if(!email){
          setVerifyMsg('email is empty')
      } else if (!password){
          setVerifyMsg('password is empty')
      }
      if(verify){
          setVerifyMsg(null)
          handleSubmit()
      }else if (!verify){
          setVerifyMsg('verify that you are human!')
      }
    }

    const handleSubmit = async () =>{
        await signup(email, password, username, name, imageFile )
    }

    const checkValid = (e) => {
      e.preventDefault()
      if (!name || !username || !email || !password || !passwordCon){
        setValid("All feilds must be filled")
      } else if(password != passwordCon){
        setValid("password does not match")
      } else {
        setValid(null)
        checkVerify()
      }
    }

    const pick_image = async () => {
        console.log("pick image works");
        const picker_options = {
          types: [
            {
              description: "Images",
              accept: {
                "image/*": [".png", ".jpg", ".jpeg"],
              },
            },
          ],
          excludeAcceptAllOption: true,
          multiple: false,
        };
    
        let files = await window.showOpenFilePicker(picker_options);
    
        if (files.length < 1) {
          return;
        }
    
        let image = await files[0].getFile();
    
        if (image.size > 2 * 1024 * 1024) {
        //   setImageBig(true);
          console.log("image big error")
          return;
        }
    
        try {    
            setUploading(true)
            console.log("image file set");
            // setImage(loading);
            let [_, url] = await uploadFile(image);
            console.log(url);
            setImage(url);
            console.log("image" + imageFile)
            setUploading(false)

        } catch (e) {
          return;
        }
      };
    
    return (
        <div>
            <div className="flex flex-row h-screen w-screen">
                <div className="bg-red-900 w-3/5 grid h-screen place-items-center bg-cover" style={ { backgroundImage: `url("images/login/login.jpg")` }}>
                    <form action="" onSubmit={checkValid}>
                        <div className="bg-gradient-to-tr from-red-800/40 to-gray-800/70  backdrop-blur-sm pt-14 pb-16 pl-24 pr-24 flex flex-col justify-center items-center rounded-xl">
                            <div className="text-3xl text-white">Register</div>    
                                <div className="ml-20 mr-20 pt-4 pb-2 w-full">
                                    <div className="text-lg mt-14 w-full"><input onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder="Name"  className="text=4xl bg-black/0 border-0 focus:outline-none text-white border-b-2 w-full placeholder-white " /></div>
                                    <div className="text-lg mt-14 w-full"><input onChange={(e)=> setEmail(e.target.value)} value={email} type="text" placeholder="Email"  className="text=4xl bg-black/0 focus:outline-none border-0 text-white border-b-2 w-full placeholder-white " /></div>
                                    <div className="text-lg mt-14 w-full"><input onChange={(e)=> setUserName(e.target.value)} value={username} type="text" placeholder="User Name"  className="text=4xl focus:outline-none bg-black/0 border-0 text-white border-b-2 w-full placeholder-white " /></div>
                                    <div className="text-lg mt-14"><input onChange={(e)=> setPassword(e.target.value)} value={password} type="Password"  placeholder="Password"  className="text=4xl focus:outline-none text-white bg-black/0 border-0 border-b-2 w-full placeholder-white " /></div>        
                                    <div className="text-lg mt-14"><input onChange={(e)=> setPasswordCon(e.target.value)} value={passwordCon} type="Password"  placeholder="Confirm Password"  className="focus:outline-none text=4xl text-white bg-black/0 border-0 border-b-2 w-full placeholder-white " /></div>        
                                    <div className='p-2 bg-stone-300 cursor-pointer hover:bg-stone-400 active:bg-stone-500 rounded mt-8' onClick={(event) => pick_image()}>add photo</div>
                                </div>
                                {error && <div className="rounded bg-red-300 pl-10 pr-10 pt-2 pb-2 border-2 border-red-800">{error}</div>}
                                {valid && <div className="rounded bg-red-300 pl-10 pr-10 pt-2 pb-2 border-2 border-red-800">{valid}</div>}
                                {verifyMsg && <div className="rounded bg-red-300 pl-10 pr-10 pt-2 pb-2 border-2 border-red-800">{verifyMsg}</div>}

                                {capOnState ?  
                                  <ReCAPTCHA
                                      sitekey="6Lfjw1UkAAAAAENxsjNrS4Ef7v3Dm0zoLPoWsqqK"
                                      onChange={onChange}
                                  />
                                : " "}

                                <div className="flex justify-end items-center mt-12 bg-blue-00">
                                    {uploading ? " " :  <div onClick={()=>(navigate("/login"))}   className="flex text-white items-center mr-5">Login</div>}
                                    <div>
                                        {uploading ? <div className="py-2 px-7 animate-pulse rounded bg-gray-200" >Uploading Image</div> : 
                                        <button disabled={isLoading} className="py-2 px-7 rounded bg-red-600">Register</button>
                                        }
                                    </div>
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

export default RegisterPage;