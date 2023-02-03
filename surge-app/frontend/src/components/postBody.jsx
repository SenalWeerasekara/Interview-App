
const PostBody = ({post}) =>{
    let date = new Date(post.createdAt).toDateString();
    
    return (
        <div className="m-10">
            <div className="grid grid-flow-row">
                <div className="bg-red-100 w-96 h-96">
                    <img src={post.imageFile} alt="image file" className="w-96 h-96" />
                </div>
                <div className="bg-blue-100 w-96 h-12 flex justify-between">
                    <div className="bg-red-300 w-1/3 flex justify-start">
                        <div className="bg-green-400 w-1/2">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                            </svg>
                        </div>
                        <div className="bg-green-600 w-1/2"> {post.likes}</div>
                    </div>
                    <div className="bg-red-400 w-1/3 flex justify-center ">{post.username}</div>
                    <div className="bg-red-500 w-1/3 flex justify-center">{date}</div>
                </div>
                <div className="bg-blue-100 w-96 h-12">
                    {post.description}
                </div>
            </div>
        </div>
    )
}

export default PostBody;



// let date3=new Date("2020-06-16T02:55:08.151437Z").toLocaleDateString()
// console.log(date3)


 



