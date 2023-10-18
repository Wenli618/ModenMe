import { Form, Button } from 'react-bootstrap';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'

import * as styles from './Signup.css'
import Loading from "../../components/common/Loading"
import FormCard from '../../components/common/FormCard'
import { useAuth } from '../../context/AuthContext';




 const Signup = () => {
  const { loginSaveUser } = useAuth()

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
});

  const [loading, setLoading] = useState(false)

  const passwordConfirmRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if(user.password !== passwordConfirmRef.current.value) {
      toast.error("Passwords do not match")
      setTimeout(() => {
       // setLoading(false)
      }, 1000)
    }

    try {
      loginSaveUser({
        username: user.username,
        email: user.email,
        token: `mockToken`
      })
      console.log("signup done!")
    } catch(err) {
      console.log('Error', err);
      console.log(err?.response)
      toast.error(err.response.data)
    }

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <FormCard title="Sign Up" isAuthForm={true} >
      <Form onSubmit={handleSubmit} className={styles.form}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label className={styles.lable}>Username</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter username"
            name="username"
            value={user.username}
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label className={styles.lable} >Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label className={styles.lable}>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password"
            name='password'
            value={user.password}
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password-confirm">
          <Form.Label className={styles.lable}>Password Confirmation</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password Confirmation"
            ref={passwordConfirmRef}
          />
        </Form.Group>
       
        <Button className={styles.submitBtn} variant="danger" type="submit">
        {loading ? <Loading /> : "Submit"}
        </Button>
    </Form>
    <div className={styles.userNav}>
      <span>Already a member? &nbsp;
        <Link to="/login" >Login Here</Link>
      </span>
    </div>

    </FormCard>
  )
}

export default Signup
