import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Addstudent() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phoneno,setPhoneno]=useState('')
    const[enrollno,setEnrollno]=useState('')
    const[doa,setDoa]=useState('')
    const Navigate=useNavigate()

const handlesubmit=(e)=>{
  e.preventDefault()
 
 axios.post('http://localhost:3001/students/post',{name,email,phonenumber:phoneno,endrollnumber:enrollno,dateofadmission:doa})
 .then(res=>console.log(res)).catch(err=>console.log(err))

}

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>Name :</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <label>email</label>
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <lable>phoneno</lable>
        <input type='number' value={phoneno} onChange={(e)=>setPhoneno(e.target.value)}></input>
        <label>enrollno</label>
        <input type='number' value={enrollno} onChange={(e)=>setEnrollno(e.target.value)}></input>
        <label>doa</label>
        <input type='text' value={doa} onChange={(e)=>setDoa(e.target.value)}></input>
        <button type='submit'>Submit</button>     
      </form>
      <button onClick={()=>{Navigate('/admin')}}>cancel</button>
    </div>
  )
}
