
import { useState } from "react"
import AddPost from "../addPost/addPost";
import SideBar from "../../components/sidebar";
import ShowPost from "../showPost/showPosts";
import ShowMyPost from "../showPost/showMyPosts";
import ShowUser from "./showUser";

function HomePage(){

    const [openAddPost, setOpenAddPost] = useState(false);
    const [topic, setTopic] = useState("Feed");
    const [selectedHome, setSelectedHome] = useState("feed")
    const [username, setUsername] = useState(null);

    return (
        <div className="justify-center flex">
            <div className=" w-5/6 relative">
                <div className="flex ">

                    <div className=" w-1/4 sticky top-0 "> 
                        <SideBar setSelectedHome={setSelectedHome}/> 
                    </div>


                    <div className=" w-2/4 ">
                        <div className="bg-white/90 h-20 flex justify-between sticky top-0 pt-2">
                            <div>
                                <h1 className="text-3xl ml-10 mt-6">{selectedHome}</h1>
                            </div>
                            <div>
                                <button
                                    onClick={() =>setOpenAddPost(true)}
                                    className="mr-4 bg-red-600 mt-4 rounded-xl text-white content-center p-3 pl-8 pr-8 bg-fixed  hover:bg-red-700 active:bg-red-800">
                                    Add Post
                                </button>
                                {openAddPost && (
                                    <AddPost
                                        setOpenAddPost={setOpenAddPost}
                                        username={username}
                                    />
                                )}
                            </div>
                        </div>
                        
                        <div className=" flex justify-center pl-10 pr-10">
                            {selectedHome == 'feed' ? <ShowPost /> : "" }
                            {selectedHome == 'my' ? <ShowMyPost /> : "" }
                        </div>
                    </div>

                    <div className={`${openAddPost? "-z-10" : ""}  sticky top-0 w-1/4`}>
                              <ShowUser setUsername={setUsername}/> 
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePage