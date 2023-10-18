import * as styles from './FormCard.css'

const FormCard = ({ title, authform, children }) => {
  return (
    <div className={styles.container}>
        <div className={styles.leadCard}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <div>{children}</div>
        </div>
    </div>
  )
}

export default FormCard