import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React ,{useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Base from '../Base/Base';
import { studentValidationSchema } from './AddStudents';
import { StudentDetails } from './Students';

const EditStudents = ({studentsData,setStudents}) => {
    const history = useHistory();
    const {id} = useParams();
    const student = studentsData[id] 
    const [editId, setEditId] = useState("");
    
// 

    const {values, handleChange, handleSubmit, handleBlur, errors, touched} = useFormik({
      initialValues : {
        name : student.name,
        batch :student.batch,
        gender:student.gender,
        experience:student.experience,
      },
      validationSchema : studentValidationSchema,
      onSubmit : (editedStudent) => {
        setEditId(student.id)
        console.log("onSubmit triggerd", editedStudent)
        updateStudentData(editedStudent)
      }
    })

// initial things and mountings happening
       useEffect(() => {
         setEditId(student.id);
       }, []);    

    const updateStudentData = async (editedStudent) => {

     try {
      const response = await fetch(`https://63ae58eeceaabafcf177e256.mockapi.io/users/${editId}`, {
        method :"PUT", 
        body : JSON.stringify(editedStudent),
        headers : {
          "Content-Type":"application/json"
        },
      })
      
      const data = await response.json();
      if (data) {
              // select and find our student 
     const editStudentIndex = studentsData.findIndex((stud) => stud.id === editId); 
              // change the updated object in the specific array of data
     studentsData[editStudentIndex] = editedStudent;
              //set the students data, 
              setStudents([...studentsData])
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

              <form onSubmit={handleSubmit}>
     <TextField 
     fullWidth 
     label="Enter the Name"
     onChange={handleChange}
     onBlur= {handleBlur}
     value= {values.name}
     name= "name"
      id="fullWidth" />
     {touched.name && errors.name ? <p style={{color:"red"}}> {errors.name} </p>: ""}

     <TextField 
     fullWidth 
     label="Enter the Batch"
     onChange={handleChange}
     value = {values.batch}
     onBlur= {handleBlur}
     name= "batch"
      id="fullWidth" />
   {touched.batch && errors.batch?<p style={{color:"red"}}> {errors.batch} </p> : ""}
     <TextField 
     fullWidth 
     label="Enter the Gender"
     onChange={handleChange}
     value = {values.gender}
     onBlur= {handleBlur}
     name= "gender"
      id="fullWidth" />

   {touched.gender && errors.gender ? <p style={{color:"red"}}> {errors.gender} </p> : ""}

     <TextField 
     fullWidth 
     label="Enter the Experience"
     onChange={handleChange}
     value = {values.experience}
     onBlur= {handleBlur}
     name="experience"
      id="fullWidth" />
   {touched.experience && errors.experience ? <p style={{color:"red"}}> {errors.experience} </p> : ""}
     <Button
       className="add-btn"
       type="submit"
       color="secondary"
       variant="contained"
     >
       Update Data
     </Button>
     </form>


   </div>
    </Base>
  )
}

export default EditStudents