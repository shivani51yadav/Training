import React, {useEffect,useState} from 'react'
import {Button, Table} from 'react-bootstrap';

const UserData = () => {
    const [data,setData] = useState([])
    const [svalue,setSvalue]=useState([])

    const searchData=async()=>{
        const udata = await fetch(`https://reqres.in/api/users/${svalue}`);
        const udata1 = await udata.json()
        alert(udata1.data.id + ","+udata1.data.first_name)
    }
    const getData=async()=>{
        const udata = await fetch('https://reqres.in/api/users?page2');
        const udata1 = await udata.json()
        setData(udata1.data);
        console.log(udata1.data);
    }
  useEffect(()=>{
    getData()
  },[])  
  return (
    <div>
     User Data
    <input type="number" value={svalue} onChange={(e)=>setSvalue(e.target.value)} /><Button variant="primary" onClick={()=>searchData()}>Search data
    </Button><br/>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
      {data.map((dt,i)=>
      <>
        <tr>
            <td>{i+1}</td>
            <td>{dt.id}</td>
            <td>{dt.first_name} {dt.last_name}</td>
            <td>{dt.email}</td>
            <td>
            <img src={dt.avatar} height={80} width={80} alt='img1'/>
            </td>  
        </tr>
      </>
      )}
        
      </tbody>
    </Table>

    </div>
  )
}
export default UserData;
