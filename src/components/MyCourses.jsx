import vidio from "../assets/mov_bbb.mp4"
import { Container } from "react-bootstrap";
import img from "../assets/logo.webp"

function MyCourses(){
    return(
        
        <Container className="container-lg d-flex justify-content-center my-5">
            <div style={{display: "flex", border:"1px solid black"}} className="mx-2">
                <div >
                    <video width="300px" controls className="mx-3 my-3">
                        <source src={vidio}/>
                    </video>
                </div>
                <div>
                    <h6 className="pt-3">HTML Foundation</h6>
                    <p style={{color: "gray"}}>Learn HTML Foundamental for building Website</p>
                </div>
                <div>
                    <img src={img} alt="" width="100px" className="pt-2"/>
                </div>
            </div>
            <div style={{display: "flex", border:"1px solid black"}} className="mx-2">
                <div>
                    <video width="300px" controls className="mx-3 my-3">
                        <source src={vidio}/>
                    </video>
                </div>
                <div>
                    <h6 className="pt-3">CSS Foundamental</h6>
                    <p style={{color: "gray"}}>Learn CSS Foundamental for design Website</p>
                </div>
                <div>
                    <img src={img} alt="" width="100px" className="pt-2"/>
                </div>
            </div>
        </Container>
        )
}

export default MyCourses;