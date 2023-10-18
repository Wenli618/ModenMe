import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'

import * as styles from './Login.css'
import Loading from "../../components/common/Loading"
import FormCard from '../../components/common/FormCard'

 const Login = () => {
  const [loading, setLoading] = useState(false)

  const [user, setUser] = useState({
      email: "",
      password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(false)
}

  const handleTextChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
  })
}

  return (
    <FormCard title="Login" >
      <Form onSubmit={handleSubmit} className={styles.form}>
        
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className={styles.lable}>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleTextChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label className={styles.lable}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handleTextChange} />
        </Form.Group>
       
        <Button variant='danger' type="submit">
        {loading ? <Loading /> : "Submit"}
        </Button>
    </Form>

    <div className={styles.userNav}>
      <span>Not a member? &nbsp;
        <Link to="/signup" >Sign Up</Link>
      </span>
    </div>

    </FormCard>
  )
}

export default Login
