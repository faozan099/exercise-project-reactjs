import img from "../assets/logo.webp"
import { Container } from "react-bootstrap"

function Profile(){
    return(
        <Container className="container-lg d-flex justify-content-center my-5" style={{backgroundColor: "white", width: "500px"}}>
            <img src={img} alt="" width= "200px"/>
            <div style={{paddingTop: '15px'}}>
            <h3 >FAOZAN</h3>
            <h5>BOOTCAMP STUDENT</h5>
            <p>Coding Membuat Saya Belajar bagaimana Berfikir</p>
            </div>
        </Container>
    )
}

export default Profile;