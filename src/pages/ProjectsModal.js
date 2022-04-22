import { Button, Modal} from "react-bootstrap";

function ProjectsModal({show, handleClose, project}) {
    console.log(project)
    return ( 
        <Modal show={show} onHide={handleClose} id="modal">
            <Modal.Header id="modal-header">
                <Modal.Title>
                   <b id="modal-title">{project.name}</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body id="modal-content">
                <div>
                    <img id="modal-image" src={project.image} alt={project.imgAlt} />
                    <p>{project.description}</p>
                </div>
            </Modal.Body>
            <Modal.Footer id="modal-footer">
                <a href={project.demoLink}><Button>Demo</Button></a>
                <a href={project.webLink}><Button>Application</Button></a>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
     );
}

export default ProjectsModal;