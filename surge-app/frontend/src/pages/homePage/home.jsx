
import { useState } from "react"
import AddPost from "../addPost/addPost";

function HomePage(){
    const [openAddPost, setOpenAddPost] = useState(false);

    return (
        <div className="justify-center flex">
            <div className="bg-amber-300 w-5/6 ">
                <div className="flex">
                    <div className="bg-red-200 w-1/4">1</div>
                    <div className="bg-blue-200 w-2/4">2</div>
                    <div className="bg-green-200 w-1/4">
                        {openAddPost && (
                            <AddPost
                                setOpenAddPost={setOpenAddPost}
                            />
                        )}

                        <button
                            onClick={() =>setOpenAddPost(true)}
                            className="bg-red-600 mt-4 rounded-2xl text-white content-center p-3 pl-14 pr-14 bg-fixed  hover:bg-red-700 active:bg-red-800">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage