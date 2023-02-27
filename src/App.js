import { useEffect, useState } from 'react';
import "./App.css"
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from './Components/AuthPage';
import DashBoard from './Components/DashBoard';
import NoPage from './Components/NoPage';
import StudentProfile from './Components/StudentProfile';
import { StudentDetails } from './Components/Students';
import WelcomePage from './Components/WelcomePage';
import AddStudents from './Components/AddStudents';
import EditStudents from './Components/EditStudents';

function App() {
  // data
  const [studentsData, setStudents] = useState([]);
// mounting 
useEffect(()=>{
   const getStudents = async () => {
    try {
      const response = await fetch("http://localhost:9000/students", {
        method:"GET"
      }); 
      const data = await response.json();
      console.log(data);
      setStudents(data.data)
    } catch (error) {
      console.log("Error Occured", error)
    }
   }; 

   getStudents();
   // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return (
    <div className="App">
       
   <Switch>
    
     <Route exact path = "/">
     <WelcomePage/>
     </Route>
      
      <Route path="/dashboard">
          <DashBoard/>
      </Route>

      <Route path= "/register">
        <AuthPage/>
      </Route>

      <Route path = "/details">
        <StudentDetails 
        studentsData={studentsData} 
        setStudents= {setStudents}/>
      </Route>

      <Route path = "/students">
         <Redirect to = "/details"/>
      </Route>

      <Route path = "/student/:id">
        <StudentProfile studentsData={studentsData} />
      </Route>

      
      <Route path = "/add-data">
        <AddStudents
        studentsData={studentsData} 
        setStudents= {setStudents}
        />
      </Route>

      <Route path = "/edit/:id">
        <EditStudents 
        studentsData={studentsData}
        setStudents= {setStudents} />
      </Route>

      <Route path = "**">
        <NoPage/>
      </Route>
   </Switch>

    
    
      
    </div>
  );
}

export default App;