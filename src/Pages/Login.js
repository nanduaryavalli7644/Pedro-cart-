import React from 'react'
import { useState } from 'react'

const Login = () => {
 const [info,setInfo]=useState({
    userName:"",
    password:""
 })
const [data,setData]= useState([])

const{userName,password} = info
const onChangeHandler = (e)=>{
   setInfo({...info,[e.target.name]:e.target.value})
}

const submitHandler = (e)=>{
          e.preventDefault();
          setData([...data,info])
          setInfo({
            userName:"",
            password:""
          })
         console.log(data)
}
    return (
    <div>
        <form onSubmit={submitHandler}>
            <label >User Name</label>
            <input type="text" name='userName' value={userName} onChange={onChangeHandler} />
            {/* {userName} */}
            <label >Password</label>
            <input type="password" name="password" value={password}  onChange={onChangeHandler}/>
            {/* {password} */}
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default Login;