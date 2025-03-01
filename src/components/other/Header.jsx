import React, { useEffect, useState } from "react";

const Header = (props) => {
              // data
   // console.log("Header data is ",data.firstName);
   const [username,setUsername] = useState('')
   // if(!data)
   // {
   //    setUsername('Admin')
   // }
   // else
   // {
   //    setUsername(data.firstName)
   // }

   useEffect(() => {
      if (!props.data) {
        setUsername('Admin');
      } else {
        setUsername(props.data.firstName);
      }
    }, [props.data]); 
   

   // useEffect(() => {
   //    if(!data)
   //       {
   //          setUsername('Admin')
   //       }
   //       else
   //       {
   //          setUsername(data.firstName)
   //       }
   //  }, []);

   const logOutUser = () =>{
      localStorage.setItem('loggedInUser','')
      console.log(props.changeUser);
      window.location.reload()
   }

    return(
         <div className="flex items-end justify-between">
            <h1 className="text-2xl text-white font-medium">Hello <br /> <span className="text-3xl font-semibold">{username}</span></h1>
            <button onClick={logOutUser} className="bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium">Log out</button>
         </div>
       )
}

export default Header