
import { useState } from "react"
import AddPost from "../addPost/addPost";
import SideBar from "../../components/sidebar";
import ShowPost from "../showPost/showPosts";
import ShowMyPost from "../showPost/showMyPosts";
import { useLogout } from "../../hook/useLogout";
import ShowUser from "./showUser";

function HomePage(){

    const [openAddPost, setOpenAddPost] = useState(false);
    const [topic, setTopic] = useState("Feed");
    const { logout } = useLogout()
    const [selectedHome, setSelectedHome] = useState("feed")

    const handleLogout = () => {
        logout()
    }

    return (
        <div className="justify-center flex">
            <div className="bg-amber-500 w-5/6 relative">
                <div className="flex ">

                    <div className="bg-red-200 w-1/4 sticky top-0 "> 
                        <SideBar setSelectedHome={setSelectedHome}/> 
                    </div>


                    <div className="bg-blue-200 w-2/4 ">
                        <div className="bg-pink-400 h-20 flex justify-between sticky top-0 ">
                            <div>
                                <h1>{selectedHome}</h1>
                            </div>
                            <div>
                            <button
                                onClick={() =>setOpenAddPost(true)}
                                className="bg-red-600 mt-4 rounded-2xl text-white content-center p-3 pl-14 pr-14 bg-fixed  hover:bg-red-700 active:bg-red-800">
                                Post
                            </button>
                                {openAddPost && (
                                    <AddPost
                                        setOpenAddPost={setOpenAddPost}
                                    />
                                )}
                            </div>
                        </div>
                        
                        <div className="bg-amber-400 z-30 flex justify-center">
                            {selectedHome == 'feed' ? <ShowPost /> : "" }
                            {selectedHome == 'my' ? <ShowMyPost /> : "" }
                        </div>
                    </div>

                    <div className="bg-green-200 w-1/4 pt-48">
                        <div className="sticky top-0 z-10">
                            <div className="bg-blue-100 h-48">
                              <ShowUser />
                            </div>
                            <div className="bg-blue-500 h-10">
                                <button onClick={handleLogout} className="py-2 px-7 rounded bg-red-600">Log Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage