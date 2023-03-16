import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import {postLogin} from '../services/apiServices';
const ModelDangKy = (props) => {
    const {show, setShow} = props
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Account, setAccount] = useState("");
  const [Password, setPassword] = useState("");
  const [First_Name,setFirst_Name] =useState("");
  const [Last_Name,setLast_Name] =useState("");
  const [Gender,setGender] =useState("Nam");
  const [DoB,setDoB] =useState("");
const handledangky = async() =>{
   
    await axios.post(`http://localhost:8080/api/login/v1/signup`, {Account, Password,First_Name,Last_Name,Gender,DoB})
      .then(res => {
        console.log(res);
        console.log(res.message)
        console.log(res.data);
      });

}

    return(
        <>
       {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Account</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
          
          value={Account}
          onChange={(event) => setAccount(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
          
          value={Password}
          onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} >
          <Form.Label>Account</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
          
          value={First_Name}
          onChange={(event) => setFirst_Name(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Last_Name</Form.Label>
          <Form.Control type="password" placeholder="Password" 
          
          value={Last_Name}
          onChange={(event) => setLast_Name(event.target.value)}
          />
        </Form.Group>
      </Row>
     

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>DoB</Form.Label>
          <Form.Control 
          
          value={DoB}
          onChange={(event) => setDoB(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select  onChange={(event) => setGender(event.target.value)}>
            <option>Nam</option>
            <option>Nữ</option>
          </Form.Select>
        </Form.Group>

        
      </Row>

      

     
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handledangky}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )

    
}
export default ModelDangKy;