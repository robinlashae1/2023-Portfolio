import ProjectsModal from "./ProjectsModal";
import {useState} from "react"

function Project() {
    const [modalOpen,setModalOpen] = useState(false)
    const [modalData,setModalData] = useState([])

    function renderProjects(array){
        return (
            array.map( project => 

               <div className="portfolioWork" onClick={()=> {setModalOpen(true);setModalData(project)}}>
                    <img id="portfolioImage" src={project.image} alt={project.imgAlt}/>
                    <div className="portfolioCard">
                       <h1 style={{marginTop: "auto",marginBottom: "auto"}}>{project.name}</h1>
                    <p className="portfolioPara">{project.preview}</p> 
                    </div>
                    {/* <a href="https://www.loom.com/share/39033ef1ad1f44448045ad5a961385e8">Demo</a> */}
                </div>
            )
        )
    }
    
    return ( 
        <div className="overall-container wrap">
            {renderProjects(Projects)}
            <ProjectsModal show={modalOpen} handleClose={()=> setModalOpen(false)} project={modalData}/>
        </div>
    );
}

export default Project;
const Projects = [
    {name: "Campus Finder",
    image: "https://www.columbusnavigator.com/wp-content/uploads/2017/08/otterbein-university-aerial-shot-1155x770.jpg",
    imgAlt: "Enlarged warped photo of a college campus",
    preview: "A rails application which connects students with all available personal services around their campus...",
    description: "A rails application which connects students with all available personal services around their campus. (Barbers, Artist, Nail Techs, Tutors, etc).This application has a resful API along with user functionality and active storage (aws) components.",
    demoLink: "https://www.loom.com/share/39033ef1ad1f44448045ad5a961385e8",
    webLink:"www.google.com"},

    {name: "Seed Watch",
    image: "https://specials-images.forbesimg.com/imageserve/61f70aaf89980982ec8b8f44/Best-Indoor-Plants--Peace-Lily-Plant--Spathiphyllum-/960x0.jpg?cropX1=31&cropX2=886&cropY1=18&cropY2=798",
    imgAlt: "Small house plant sitting in a white pot on a table",
    preview: "A rails application which provides plants owners with a way to track their plants through visuals and updates...",
    description: "A rails application which provides plants owners with a way to track their plants through visuals and updates. This application has a set database of house plants, however users can utilize full CRUD functions through plant creation/manipulation in their own personal nursery.",
    demoLink: "https://www.loom.com/share/e98f29c3bf974a3395827e34b262d1a5",
    webLink:"www.google.com"},

    {name: "Main Street Pho",
    image: "https://tasteasianfood.com/wp-content/uploads/2015/11/pho9.png",
    imgAlt: "Bowl of Pho",
    preview: "An Ordering application for my favorite local restaurant. Used to practice react. This was one of my first works...",
    description: "An Ordering application for my favorite local restaurant. Used to practice react. This was one of my first works, I love to include it to show my progress thus far. This is solely a react app so the data is from a db.json file and rendered dynamically throughout the app.",
    demoLink: "https://www.loom.com/share/96934f89a7fc4062b1293f1aa1cae499",
    webLink:"www.google.com"}
    ]