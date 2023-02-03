import{
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";


export function StudentDetails({studentsData, setStudents}) {
  const history = useHistory();

useEffect(()=>{
if (!localStorage.getItem("user-name")){
  history.replace("/register")
}
}, [])


  //delete a new data
  const deleteStudentData = async (studID) =>{
        try {
          const response = await fetch(`https://63ae58eeceaabafcf177e256.mockapi.io/users/${studID}`, {
            method :"DELETE", 
          }); 
          const data = await response.json()
         console.log(data);
       const selectedStudents = studentsData.filter((stud)=> stud.id !== studID);
       setStudents(selectedStudents); 
        } catch (error) {
          console.log("error occured")
        }
  }

  return (
    <Base
    title = "Batch Details"
    description= "All students details"
    >
    <div className="containers">
      {studentsData && (
      <div className="card-containers">
        {studentsData?.map((stud, id) => (
          <Card sx={{ maxWidth: 345 }} key={id} className="card">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Name : {stud.name}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                Batch : {stud.batch}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gender : {stud.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Experience : {stud.yearsOfExperience} years
              </Typography> */}
            </CardContent>
            <CardActions>
              <Button 
              onClick={() => history.push(`/edit/${id}`)}
               color="secondary">Edit</Button>
              <Button onClick={()=>deleteStudentData(stud.id)} color="error">Delete</Button>
              <Button onClick={()=>history.push(`/student/${id}`)}>View Student</Button>
            </CardActions>
          </Card>
        ))}
      </div>
      )}
    </div>
    </Base>
  );
}

// readings
