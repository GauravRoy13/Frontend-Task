import logo from "../assets/logo.png"
import styles from './Nav.module.css'

function Nav() {
    return (
        <div className={styles.nav}>
            <ul>
                <li>
                    <a href="#">
                        <img src={logo} alt="" />
                        <h3>ProVital</h3>
                    </a>
                </li>

                <li><a href="#">List your practice</a></li>
                <li><a href="#">For Employers</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Books</a></li>
                <li><a href="#">Speakers</a></li>
                <li><a href="#">Doctors</a></li>
                <li><a href="#">Login/Signup</a></li>
            </ul>
        </div>
    )
}

export default Nav