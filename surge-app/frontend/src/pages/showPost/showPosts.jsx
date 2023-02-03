import { useEffect, useState } from "react";
import PostBody from "../../components/postBody";

const ShowPost = () =>{
    const [posts, setPosts] = useState(null)

    useEffect(()=>{
        const fetchPosts = async () => {
            const response = await fetch('/api/post')
            const json = await response.json()

            if (response.ok){
                setPosts(json)
            }
        }

        fetchPosts()
    }, [])

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

export default ShowPost