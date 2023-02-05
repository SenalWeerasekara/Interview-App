
import { useState } from "react";
import { useAuthContext } from "../hook/useAuthContext";

const PostBody = ({post}) =>{
    let date = new Date(post.createdAt).toDateString();
    const {user} = useAuthContext()
    const [likeCount, setLikeCount] = useState(post.likes)

    const handle = () => {
        handleLike()
        
    }

    const handleLike = async ()=> {
        const likedPostID = post._id
        
        const addLike = {likedPostID}
        const response = await fetch('/api/likedPost/like/', {
            method: 'POST',
            body: JSON.stringify(addLike),
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if(!response.ok){
            console.log("something went wrong")
        } else if (response.ok){
            console.log("added new like")
            updateLikeCount()
        }
    }

    const updateLikeCount = async ()=> {
        const data = post.likes + 1
        setLikeCount(data)
        
        const addLike = {data}
        const response = await fetch('/api/post/like/' + post._id, {
            method: 'PUT',
            body: JSON.stringify(addLike),
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if(!response.ok){
            console.log("something went wrong")
        } else if (response.ok){
            console.log("added new liksse")
            // updateLikeCount()
        }
    }
    
    return (
        <div className="m-10">
            <div className="grid grid-flow-row bg-stone-100 rounded-3xl p-4">
                <div className=" mb-4 ">
                    <img src={post.imageFile}  alt="image file" className=" rounded-3xl" />
                </div>
                <div className="h-12 flex justify-between">
                    <div className=" w-1/3 flex justify-start">
                        <div className="bg-purple-200 flex w-1/2 ml-2 items-center flex" onClick={()=>{handle()}}>
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                            </svg>
                            <div className="ml-2 justify-center items-center flex">{likeCount}</div>
                        </div>
                    </div>
                    <div className="bg-blue-200 w-1/3 flex justify-center ">{post.username}</div>
                    <div className="bg-green-200 w-1/3 flex justify-center">{date}</div>
                </div>
                <div className=" w-96 h-12 pl-4">
                    {post.description}
                </div>
            </div>
        </div>
    )
}

export default PostBody;



// let date3=new Date("2020-06-16T02:55:08.151437Z").toLocaleDateString()
// console.log(date3)


 



