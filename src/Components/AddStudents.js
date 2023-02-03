import { Button, TextField } from '@mui/material'
import React , { useState }  from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../Base/Base'
import * as yup from 'yup'
import { useFormik } from 'formik'

// schema validations 

export const studentValidationSchema = yup.object({
   name : yup.string().required("Please fill in your name..."),
   batch : yup.string().required("please fill in your batch")
   .min(5, "hey you need minium five values"),
   gender : yup.string().required("please mention your gender"),
   experience : yup.string().required("why not tell your experience"),
})

const AddStudents = ({studentsData, setStudents}) => {

  const {values, handleChange, handleSubmit, handleBlur, errors, touched} = useFormik({
    initialValues : {
      name : "",
      batch :"",
      gender:"",
      experience:"",
    },
    validationSchema : studentValidationSchema,
    onSubmit : (newStudent) => {
      console.log("onSubmit triggerd", newStudent)
      addNewStudent(newStudent);
    }
  })

  
  // const [values, setValues] = useState({
  //   name : "",
  //   batch :"",
  //   gender :"",
  //   experience : ""
  // }); 
  // const {
  //    name,
  //    batch, 
  //    gender, 
  //    experience} = values; 
    const history = useHistory();

// Single handle change event
// const handleChange  => (name) => (event) =>{
//    const value = event.target.value; 
//    setValues({...values, [name]:value})
// }

    const addNewStudent = async (newStudent) => {
        try {     
  const response = await fetch("https://63ae58eeceaabafcf177e256.mockapi.io/users", {
    method : "POST", 
    body : JSON.stringify(newStudent), 
    headers : {
        "Content-Type" :"application/json"
    }, 
  }); 
        const data = await response.json()
        console.log(data)
        setStudents([...studentsData, data])
        history.push("/details")
        } catch (error) {
             console.log("error occured")
        }

   
      };


  return (
    <Base
    title = "Add A Student"
    description= "You can a student data here"
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
       color="success"
       variant="contained"
      //  onClick={addNewStudent}
     >
       Add Data
     </Button>
     </form>

   </div>
    </Base>
  )
}

export default AddStudents