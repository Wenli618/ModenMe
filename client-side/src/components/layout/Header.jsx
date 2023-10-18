import * as styles from './Header.css';
import logoImg from '../../assets/logo.svg'
import { useAuth } from "../../context/AuthContext"

import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FiShoppingCart, FiUser, FiSearch, FiUserMinus } from 'react-icons/fi'
import { BsBagHeart } from 'react-icons/bs'
import { LuLayoutDashboard} from 'react-icons/lu'


const Header = () => {
    const { user, logout } = useAuth()

    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" className={styles.navbar}>
            <Container className={styles.navContainer}>
                <Navbar.Brand className={styles.brandLink} as={Link} to='/'>
                    <img alt="modernme logo"
                    src={logoImg}
                    className={styles.logo}
                    />
                    <div className={styles.logoTextBox}>
                         <span className={styles.brand}>Modern<span className={styles.span}>M</span>e</span>
                        <span className={styles.brandSub}>YOUR FASHION PARADISE</span>
                    </div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav" className={styles.navMenu}>
                    <Nav >
                        
                         <Nav.Link className={styles.navLink} as={Link} to='/store/products'>ALL Products</Nav.Link>
                         
                         <Nav.Link className={styles.navLink} as={Link} to='/store/products/new'>NEW ARRIVAL</Nav.Link>

                         <Nav.Link className={styles.navLink} as={Link} to='/store//products/onsale' >On SALE</Nav.Link>
                         
                    </Nav>

                    <Nav> 
                        
                        <Nav.Link className={styles.navLink} as={Link} to="/search">
                        <FiSearch size={25} />
                        </Nav.Link>

                       {!user && <Nav.Link className={styles.navLink} as={Link} to="/login">
                        <FiUser size={25} />
                        </Nav.Link>}
                        
                        <Nav.Link className={styles.navLink} as={Link} to='/shopping-cart'><FiShoppingCart size={25}/></Nav.Link>
                      
                        <Nav.Link className={styles.navLink} as={Link} to='/favoraites'><BsBagHeart size={25}/></Nav.Link>

                        {user && <Nav.Link className={styles.navLink} as={Link} to="/dashboard">
                            <LuLayoutDashboard size={25}/>                           
                        </Nav.Link>}

                        {user && <Nav.Link className={styles.navLink} as={Link} to="/logout">
                            <FiUserMinus size={25}/>                           
                        </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default Header;







// function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header