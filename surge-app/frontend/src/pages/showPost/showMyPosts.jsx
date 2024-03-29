import { useEffect, useState } from "react";
import PostBody from "../../components/postBody";
import { useAuthContext } from "../../hook/useAuthContext";

const ShowMyPost = () =>{
    const [posts, setPosts] = useState(null)
    const {user} = useAuthContext()

    useEffect(()=>{
        const fetchPosts = async () => {
            const response = await fetch('http://localhost:4000/api/post/my',{
                headers: {
                    'Authorization' : `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok){
                setPosts(json)
            }
        }

        if (user) {
            fetchPosts()
        }
        
    }, [user])

    return (
        <div>
            <div>
                {posts && posts.map((post) => (
                    <PostBody key={post._id} post={post}/>
                ))}
            </div>
        </div>
    )
}

export default ShowMyPost