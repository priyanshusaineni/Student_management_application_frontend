import react from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import StudentList from './components/StudentList'
import AddStudent from './components/AddStudent'
import UpdateStudent from './components/UpdateStudent' 
function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<StudentList/>}></Route>
          <Route path='/students' element={<StudentList/>}></Route>
          <Route path='/add-student' element={<AddStudent/>}></Route>
          <Route path='/update-student/:id' element={<UpdateStudent/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
