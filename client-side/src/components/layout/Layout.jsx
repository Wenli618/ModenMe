import { Outlet } from 'react-router-dom'
import { ToastContainer, Slide } from 'react-toastify'
import * as styles from './Layout.css'

import Header from './Header'
import Footer from './Footer'


export default function Layout() {
    
  return (
    <div className={styles.app}>
        <ToastContainer 
            style={{textAlign: 'centr'}}
            position='top-center'
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            transition={Slide}
            theme='colored'
        />
        <Header />
        <div className={styles.appContent}>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

