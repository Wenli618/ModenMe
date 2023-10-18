
import * as styles from "./Footer.css"

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
      };
    return (
    <div className={styles.footer}>&copy; {getCurrentYear()} Modern<span className={styles.span}>M</span>e</div>
  )
}

export default Footer