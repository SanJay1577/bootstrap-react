import React from 'react'
import { useParams } from 'react-router-dom';
import Base from '../Base/Base'

const StudentProfile = ({studentsData}) => {
    const {id} = useParams();
    const student = studentsData[id]
  return (
    <Base
    title="Student Profile"
    description= "Inidividual Student Details"
    >
      <div>
        <h1>Studen-Profile </h1>
        <h2>Studnet Name: {student.name}</h2>
        <p> Gender: {student.gender} </p>
        <p>Batch : {student.batch} </p>
        <p>Years of  Experience: {student.yearsOfExperience}</p>
      </div>
    </Base>
  )
}

export default StudentProfile