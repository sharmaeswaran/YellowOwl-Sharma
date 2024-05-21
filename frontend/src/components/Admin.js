import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Admin() {
  const[list,setList]=useState([])
  const navigate=useNavigate()
  const[isupdate,setUpdate]=useState(false)
  const[isdelete,setDelete]=useState(false)

useEffect(()=>{
  axios.get('http://localhost:3001/students/get').then(res=>setList(res.data)).catch(err=>console.log(err))
})

//Edit phase 
const[name1,setName1]=useState('')
    const[email1,setEmail1]=useState('')
    const[phoneno1,setPhoneno1]=useState('')
    const[enrollno1,setEnrollno1]=useState('')
    const[doa1,setDoa1]=useState('')
    const openUpdate=(data)=>{
      setUpdate(true)
      setName1(data.name)
      setEmail1(data.email)
      setPhoneno1(data.phonenumber)
      setEnrollno1(data.endrollnumber)
      setDoa1(data.dateofadmission)
    }
const handleUpdate=(data)=>{
  axios.put(`http://localhost:3001/students/update/${data.id}`,{name:name1,email:email1,phonenumber:phoneno1,endrollnumber:enrollno1,dateofadmission:doa1}).then(res=>console.log(res)).catch(err=>console.log(err))
}



const handleClick=()=>{
navigate('/addStudent')
}
  return (
    <div>
      <h1>Students</h1>
      <button onClick={handleClick}>Add new Students</button>

      <table>
        <thead> 
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Enrollno</th>
                <th>Number</th>
                <th>Date of admission</th>
                <th> </th>
            </tr>
        </thead>
        <tbody>
         {list.map(x=>
          <tr key={x.id}>
              <td>{x.name}</td>
              <td>{x.email}</td>
              <td>{x.phonenumber}</td>
              <td>{x.endrollnumber}</td>
              <td>{x.dateofadmission}</td>
              <td>
                <button onClick={()=>openUpdate(x)}>update</button>
                <button>delete</button>
              
              </td>
          </tr>
          )}
        </tbody>
      </table>

{isupdate && <div>
  <form onSubmit={handleUpdate}>
        <label>Name :</label>
        <input type='text' value={name1} onChange={(e)=>setName1(e.target.value)}></input>
        <label>email</label>
        <input type='text' value={email1} onChange={(e)=>setEmail1(e.target.value)}></input>
        <lable>phoneno</lable>
        <input type='number' value={phoneno1} onChange={(e)=>setPhoneno1(e.target.value)}></input>
        <label>enrollno</label>
        <input type='number' value={enrollno1} onChange={(e)=>setEnrollno1(e.target.value)}></input>
        <label>doa</label>
        <input type='text' value={doa1} onChange={(e)=>setDoa1(e.target.value)}></input>
        <button type='submit'>Submit</button>     
      </form>
      <button onClick={()=>{setUpdate(false)}}>cancel</button>
  </div>}
    </div>
  )
}
