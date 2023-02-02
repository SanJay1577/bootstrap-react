import { Button, Experimental_CssVarsProvider, FormControl, FormLabel, Input, Typography } from '@mui/material'
import React, {useState}from 'react'
import { Link, useHistory } from 'react-router-dom'
import Base from '../Base/Base'
import { authdata } from '../Data/authdata'

const AuthPage = () => {
  const[auth, setAuth] = useState(authdata); 
  const [loginName, setLogiName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  const history  = useHistory()

  const loginUser = () =>{
    if(loginName === auth[0].name 
      && password === auth[0].password) {
      localStorage.setItem("user-name", loginName);
      setError(false)
      history.push("/details")
    } else {
      setError(true)
    }

  }

  return (
 <Base
 title= "Please login or signup"
 description = "Authentication Page"
 >
  <div className = "login-page">
     


          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              onChange= {(e)=>setLogiName(e.target.value)}
              value = {loginName}
            />
          </FormControl> {" "}
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
              onChange ={(e)=>setPassword(e.target.value)}
              value = {password}
            />
          </FormControl>

          <Button
           sx={{ mt: 1 /* margin top */ }}
           onClick= {loginUser}
           >Log in</Button>
     {error ?   
      <Typography>
        Invalid Credentials
      </Typography>
   : ""}


    
      
  </div>
 </Base>
  )
}

export default AuthPage