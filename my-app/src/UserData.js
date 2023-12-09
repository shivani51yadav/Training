import React, { useEffect, useState } from 'react'

const UserData = () => {
    const [data,setData]=useState([])
    const getData=async ()=> {
        const userData =await fetch ('http://reqres.in/api/users?page=2');
        const userData1=await userData.json();
        setUserData(userData1.data);
        console.log(userData);
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div>
        <button variant="primary" onClick={()=>getData()} >Get Data</button><br/>
    </div>
  )
}

export default UserData
