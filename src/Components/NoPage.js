import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../Base/Base'

const NoPage = () => {
    const history = useHistory();
  return (
   <Base
    title= "You Lost Your Way"
    description = "Please click the link below to home page"
   >
       <Button 
        variant='outlined'
        color='primary'
        size = "large"
        onClick={()=>history.push("/dashboard")}
        >
        Home
        </Button>
   </Base>
  )
}

export default NoPage