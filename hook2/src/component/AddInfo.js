import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";


function AddInfo({ add }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId]= useState(0);
  

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handId = (e) => {
    setId(e.target.value);
  };



  const handleAdd = () =>{
    const newInfo= {type, description, id}
        add(newInfo)
        handleClose()
      }
      return (
        <div className="AddInfo">
          <Button variant="primary" onClick={handleShow} class="btn">
            Add new Pc
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>welcome!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>type</Form.Label>
                  <Form.Control onChange={(e)=>handleType(e)} type="text" placeholder="Type" autoFocus />
    
                  <Form.Label>Description</Form.Label>
                  <Form.Control onChange={(e)=>handleDescription(e)} type="text" placeholder="Description" autoFocus />
    
                  <Form.Label>Id</Form.Label>
                  <Form.Control onChange={(e)=>handId(e)} type="number" placeholder="Id"  autoFocus />
              </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button onClick={()=>handleAdd()} variant="primary" >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
}
export default AddInfo;