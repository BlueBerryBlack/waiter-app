import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <div className={styles.background}>
            <Nav className={`${styles.navigation} me-auto`}>
                <Nav.Link as={NavLink} to="/" className={styles.link}>Waiter.app</Nav.Link>
                <Nav.Link as={NavLink} to="/" className={styles.link}>Home</Nav.Link>
            </Nav>
        </div>
    );
};
export default NavBar;

