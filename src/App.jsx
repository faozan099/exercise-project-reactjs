import './App.css'
import MyCourses from './components/MyCourses'
import Navbar from"./components/Navbar"
import Profile from './components/Profile'
function App() {

  return (
    <>
    <Navbar />
    <Profile/>
    <h2 style={{textAlign: "center"}}>My Courses</h2>
    <MyCourses/>
    </>
  )
}

export default App
