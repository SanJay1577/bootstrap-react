import { Button, TextField } from '@mui/material';
import React ,{useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Base from '../Base/Base';

const EditStudents = ({studentsData,setStudents}) => {
    const history = useHistory();
    const {id} = useParams();
    const student = studentsData[id] 
    const [editId, setEditId] = useState("");
    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [gender, setGender] = useState("");
    const [experience, setExperience] = useState("");
// initial things and mountings happening
       useEffect(() => {
         setEditId(student.id);
         setName(student.name);
         setBatch(student.batch);
         setGender(student.gender);
         setExperience(student.yearsOfExperience);
       }, []);    

    const updateStudentData = async () => {

     try {
              // we need the updated object
      const updatedObj = {
                name,
                batch,
                gender,
                yearsOfExperience : experience
              }

      const response = await fetch(`https://63ae58eeceaabafcf177e256.mockapi.io/users/${editId}`, {
        method :"PUT", 
        body : JSON.stringify(updatedObj),
        headers : {
          "Content-Type":"application/json"
        },
      })
      
      const data = await response.json();
      if (data) {
              // select and find our student 
     const editStudentIndex = studentsData.findIndex((stud) => stud.id === editId); 
              // change the updated object in the specific array of data
     studentsData[editStudentIndex] = updatedObj;
              //set the students data, 
              setStudents([...studentsData])
               setName("")
               setBatch("")
               setGender("")
               setExperience("")
               history.push("/details")

      }
     } catch (error) {
      console.log(error)
     }
      }




  return (
    <Base
    title = "Edit A Student"
    description= "You can a Edit a student data here"
    >
              <div className="input-section">

     <TextField 
     fullWidth 
     label="Enter the Name"
     onChange={(event)=>setName(event.target.value)}
     value= {name}
      id="fullWidth" />

     <TextField 
     fullWidth 
     label="Enter the Batch"
     onChange={(event)=>setBatch(event.target.value)}
     value = {batch}
      id="fullWidth" />

     <TextField 
     fullWidth 
     label="Enter the Gender"
     onChange={(event)=>setGender(event.target.value)}
     value = {gender}
      id="fullWidth" />

     <TextField 
     fullWidth 
     label="Enter the Experience"
     onChange={(event)=>setExperience(event.target.value)}
     value = {experience}
      id="fullWidth" />
 
        <Button
          className="add-btn"
          color="secondary"
          variant="contained"
          onClick={updateStudentData}
        >
          Update Data
        </Button>


   </div>
    </Base>
  )
}

export default EditStudents