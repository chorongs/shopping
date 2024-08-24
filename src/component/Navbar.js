import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = ({ isLogin, setIsLogin }) => {
    const MenuList = ['About', '2021', '2022', '2023', '2024'];
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLogin = () => {
        if (isLogin) {
            setIsLogin(false); 
        } else {
            navigate('/login'); 
        }
    };

    const search = (event) => {
        if (event.key === 'Enter') {
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    return (
        <div className="navbar">
            <div>
                <div className="login-button" onClick={toggleLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>{isLogin ? 'Logout' : 'Login'}</div>
                </div>
            </div>

            <div className="nav-section">
                <Link to="/">
                    <img width={200} src={process.env.PUBLIC_URL + './img/12.jpeg'} alt="logo" />
                </Link>
            </div>

            <div className="search-bar">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" onKeyPress={(event) => search(event)} />
            </div>

            <div className="menu-area">
                <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className="menu-button" />
                {isMenuOpen && (
                    <div className="sidebar-menu">
                        <FontAwesomeIcon icon={faTimes} onClick={toggleMenu} className="close-button" />
                        <ul className="menu-list">
                            {MenuList.map((menu, index) => (
                                <li key={index}>{menu}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
