
import { useAuthContext } from "../../hook/useAuthContext";
import { useEffect, useState } from "react";

const ShowUser = ({setUsername}) => {
    const [userD, setUserD] = useState(null)
    const {user} = useAuthContext()

    useEffect(()=>{
        const fetchUser = async () => {
            const response = await fetch('/api/user/oneuser',{
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

    return (
        <div> 
            <div className="justify-center grid">
  
                    <div className="h-12 w-12"> 
                        {userD == null ? <img  src="./images/profile/nopp.jpg" alt="noppimg" /> : 
                        <img className="object-contain shadow-lg rounded-full max-w-full h-auto align-middle border-none" src={userD.imageFile ? "userD.imageFile" : "./images/profile/nopp.jpg"} alt="noppimg"/>
                        }
                    </div> 
        
                 
                <div>
                    {userD == null ? "loading..." : userD.username} 
                </div> 
                <div>
                    {userD == null ? "loading..." : userD.name} 
                </div> 
            </div>
        </div>
    ) 
}

export default ShowUser