
import { useAuthContext } from "../../hook/useAuthContext";
import { useEffect, useState } from "react";
import { useLogout } from "../../hook/useLogout";

const ShowUser = ({setUsername}) => {
    const [userD, setUserD] = useState(null)
    const {user} = useAuthContext()
    const { logout } = useLogout()

    const handleLogout = () => {
        logout()
    }

    useEffect(()=>{
        const fetchUser = async () => {
            const response = await fetch('http://localhost:4000/api/user/oneuser',{
                headers: {
                    'Authorization' : `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok){
                setUserD(json)
               
                setUsername(userD.username)
            }
        }

        if (user) {
            fetchUser()
        }
        
    }, [])

    // setUsername(userD)
    if (userD) {
        setUsername(userD.username)
    }
    

    return (
        <div className="sticky top-28 w-96 mt-48 pt-48 pb-96 mt-28 border-l-2"> 
            <div className="justify-center grid ">
  
                <div className="h-32 w-32 mb-4 ml-4 justify-center flex"> 
                    {userD == null ? <img  src="./images/profile/nopp.jpg" alt="noppimg" /> : 
                    <img className="object-contain shadow-lg rounded-full max-w-full h-auto align-middle border-none" src={userD.imageFile ? userD.imageFile : "./images/profile/nopp.jpg"} alt="noppimg"/>
                    }
                </div> 
        
                 
                <div className="flex justify-center mb-4 text-2xl">
                    {userD == null ? "loading..." : userD.username} 
                </div> 
                <div className="flex justify-center mb-4 text-2xl">
                    {userD == null ? "loading..." : userD.name} 
                </div> 
            </div>

            <div className=" flex justify-center mt-16">
                <button onClick={handleLogout} className="py-2 px-7 rounded bg-stone-300 hover:bg-red-400 active:bg-red-600">Log Out</button>
            </div>
        </div>
    ) 
}

export default ShowUser