import React from 'react';
import { useEffect, useState } from "react";
// import loading from "../../../src/image/loading.gif";
// import loading from "/images/loading/loading.gif"
import { uploadFile } from "../../firebase";
// import { Storage } from "../../firebase";
import { useAuthContext } from '../../hook/useAuthContext';
import { useNavigate } from "react-router-dom";


const likes = 0
const handleCancelClick = true

const AddPost = ({setOpenAddPost, username}) =>{
    let navigate = useNavigate();
    const { user } = useAuthContext()
    const [description, setDes] = useState('')
    const [imageFile, setImage] = useState('')
    const [uploadingImage, setUploadingImage] = useState(false)
    const [valid, setValid] = useState(null)

    const checkValid = (e) => {
        e.preventDefault()

        if (!imageFile || !description){
            setValid("Add something first!")
        } else {
            setValid(null)
            handleSubmit()
        }
    }

    const handleSubmit = async () =>{
        if(!user){
            return
        }

        const addpost = {description, username, likes, imageFile}
        const response = await fetch('api/post/', {
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
            navigate(0)
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
          setValid("File too big. Max 2MB")
          return;
        }
    
        try {    
            console.log("image file set");
            setUploadingImage(true)
            setValid(false)
            let [_, url] = await uploadFile(image);
            console.log(url);
            setImage(url);
            setUploadingImage(false)
            
        } catch (e) {
          return;
        }
      };

      

    return (
        <div>
            <div className="fixed  inset-0 bg-gradient-to-br from-black/60 to-black/60 flex justify-center items-center backdrop-blur-sm">
                <div className="  pt-8 pb-8 p-8  rounded-2xl bg-gradient-to-br from-red-700/40 to-gray-600/40">
                  
                    <div className="bg-white p-10 pr-20 pl-20 rounded-2xl">
                        <form onSubmit={checkValid}>
                            <div className="font-bold ">Make a Post</div> 
                            <div className="bg-gray-300 flex justify-center mb-4 rounded-2xl cursor-pointer hover:bg-stone-400" onClick={(event) => pick_image()}>
                                {imageFile ? 
                                <img src={imageFile} className='h-48' alt="" /> : 
                                <img src="./images/add/add.png" className='h-48 p-10' alt="sp" />
                                }
                            </div>
                            {uploadingImage ? 
                            <div className='p-4 bg-red-400 animate-pulse'>Uploading Image please wait...</div>
                            : " "}
                            
                            
                            <div className='mt-6'>Description</div> 
                            <div><textarea 
                                className="resize-y w-96 h-36  outline outline-offset-2 outline-1 rounded-xl" 
                                placeholder="Add something great"
                                onChange={(e) => {setDes(e.target.value);}}>
                            </textarea></div>

                            {valid && <div className="mt-4 rounded bg-red-300 pl-10 pr-10 pt-2 pb-2 border-2 border-red-800">{valid}</div>}

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    onClick={() =>setOpenAddPost(false)}
                                    className="bg-gray-500 mt-4 rounded-2xl text-white content-center p-3 pl-10 pr-10 mr-4 bg-fixed  hover:bg-gray-700 active:bg-gray-800">
                                    Go Back
                                </button>
                                <button
                                    disabled={uploadingImage}
                                    type="submit"
                                    onClick={handleCancelClick}
                                    className={` ${uploadingImage ? "bg-gray-600" : "bg-red-600 hover:bg-red-700 active:bg-red-800"}  mt-4 rounded-2xl text-white content-center p-3 pl-14 pr-14 bg-fixed  `}>
                                    Add Post
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

