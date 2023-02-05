import { useState } from "react";


const SideBar = ({setSelectedHome}) => {
    const [selected, setSelected] = useState("feed")

    function change(topic){
        setSelected(topic)
        setSelectedHome(topic)
    }

    
    return (
        <div className="flex sticky top-0">
            <div className="pl-10  ml-0 w-full h-screen  sticky top-0">

            <div className="pt-14  flex mr-6">
                <img className="h-10" src="./images/logo/logo.png" alt="" />
            </div>

            <div className="pt-40 pb-36 border-r-2">
                <ul>
                    <li className={`mb-14 rounded mr-10 pl-8 flex items-center gap-x-4 cursor-pointer hover:bg-red-500 ${selected == 'feed' ? "bg-red-300" : " "} `}  onClick={()=>{change("feed")}}>
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"></path>
                    </svg>
                        Feed
                    </li>

                    <li className={`mb-14 rounded mr-10 pl-8 flex items-center gap-x-4 cursor-pointer hover:bg-red-500 ${selected == 'liked' ? "bg-red-300" : " "} `} onClick={()=>{change("liked")}}>
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                    </svg>
                        Liked Posts
                    </li>

                    <li className={`mb-14 rounded mr-10 pl-8 flex items-center gap-x-4 cursor-pointer hover:bg-red-500 ${selected == 'my' ? "bg-red-300" : " "} `} onClick={()=>{change("my")}}>
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                    </svg>
                        My Posts
                    </li>

                    <li className={`mb-14 rounded mr-10 pl-8 flex items-center gap-x-4 cursor-pointer hover:bg-red-500 ${selected == 'mostLiked' ? "bg-red-300" : " "} `} onClick={()=>{change("mostLiked")}}>
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                    </svg>
                        Most Liked
                    </li>

                    <li className={`mb-14 rounded mr-10 pl-8 flex items-center gap-x-4 cursor-pointer hover:bg-red-500 ${selected == 'oldest' ? "bg-red-300" : " "} `} onClick={()=>{change("oldest")}}>
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                        Oldest First
                    </li>
                </ul>
            </div>

               

            </div>

        </div>
    );
};

export default SideBar;