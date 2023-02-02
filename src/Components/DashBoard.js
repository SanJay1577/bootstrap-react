import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../Base/Base'

const DashBoard = () => {
  const history = useHistory();
  return (
    <Base
    title = "Welcome To Students App"
    description= "Please Click the Below button to navigate to home page"
    >
      <br/>
        <Button 
        variant='outlined'
        color='primary'
        size = "large"
        onClick={()=>history.push("/details")}
        >
        Student Page
        </Button>
     </Base>
  )
}

export default DashBoard