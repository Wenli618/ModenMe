
import * as styles from "./NotFound.css"
import errorImg from "../assets/404error.png"
import { Link } from "react-router-dom"


const  NotFound = () => {
  return (
    <Link to="/" className={styles.notFoundBox}>
        <img src={errorImg} className={styles.notFoundImg} />
        <h3>This page could not be found, back to Home Page</h3>
    </Link>
  )
}

export default NotFound

