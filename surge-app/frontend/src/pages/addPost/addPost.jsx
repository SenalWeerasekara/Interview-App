import React from 'react';
import { useEffect, useState } from "react";
// import loading from "../../../src/image/loading.gif";
// import loading from "/images/loading/loading.gif"
import { uploadFile } from "../../firebase";
// import { Storage } from "../../firebase";
import { useAuthContext } from '../../hook/useAuthContext';



const loading = "tesdt"

const username = "test"
const likes = 23
const ok = "test"
const handleCancelClick = true

const AddPost = ({setOpenAddPost}) =>{
    const { user } = useAuthContext()
    const [description, setDes] = useState('')
    const [imageFile, setImage] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()

        if(!user){
            return
        }

        const addpost = {description, username, likes, imageFile}
        const response = await fetch('/api/post/', {
            method: 'POST',
            body: JSON.stringify(addpost),
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if(!response.ok){
            console.log("something went wrong")
        } else if (response.ok){
            console.log("added new post")
            console.log({imageFile})
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
            console.log("image file set");
            // setImage(loading);
            let [_, url] = await uploadFile(image);
            console.log(url);
            setImage(url);
            

        } catch (e) {
          return;
        }
      };


    return (
        <div>
            <div className="fixed z-50 inset-0 bg-gradient-to-br from-black/60 to-black/60 flex justify-center items-center backdrop-blur-sm">
                <div className="  pt-4 pb-4 p-4  rounded-2xl bg-gradient-to-br from-red-700/40 to-gray-600/40">
                  
                    <div className="bg-white p-10 pr-20 pl-20 rounded-2xl">
                        <form onSubmit={handleSubmit}>
                            <div className="font-bold ">Make a Post</div> 
                            <div className="bg-gray-300 h-96 w-96 mb-4 rounded-2xl">
                                <svg fill="none" stroke="currentColor" className="p-20" stroke-width="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div className='p-4 bg-red-300' onClick={(event) => pick_image()}>add photo</div>
                        
                            <div>Description</div> 
                            <div><textarea 
                                className="resize-y w-96 h-36  outline outline-offset-2 outline-1 rounded-xl" 
                                placeholder="Add something great"
                                onChange={(e) => {setDes(e.target.value);}}>
                            </textarea></div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    onClick={() =>setOpenAddPost(false)}
                                    className="bg-gray-600 mt-4 rounded-2xl text-white content-center p-3 pl-10 pr-10 mr-4 bg-fixed  hover:bg-gray-700 active:bg-gray-800">
                                    Go Back
                                </button>
                                <button
                                    type="submit"
                                    onClick={handleCancelClick}
                                    className="bg-red-600 mt-4 rounded-2xl text-white content-center p-3 pl-14 pr-14 bg-fixed  hover:bg-red-700 active:bg-red-800">
                                    Post
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default AddPost
