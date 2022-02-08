import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {Form,Button} from 'react-bootstrap'

export const LoginForm = ()=>{
    return(
    <div>
<Form>
  <p id="p1"> Form</p>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="b">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label class="b">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check className='h' type="checkbox" label="Check me out" />
  </Form.Group>
  <Button id="b1" type="submit">
    Submit
  </Button>
</Form>

    </div>

    )
}
