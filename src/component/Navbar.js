import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from 'react-router'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const MenuList = ['About', '2021', '2022', '2023', '2024']
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(false);

    const toggleLogin = () => {
        setIsLogin(!isLogin)
    }
    const goToLogin = () => {
        navigate('/login')
    }

    const search = (event) => {
        if(event.key === "Enter") {
        // 입력한 검색어를 읽어와서
        let keyword = event.target.value
        // url을 바꿔준다.   
        navigate(`/?q=${keyword}`)
        }
    
    }

    

  return (
    <div>
        <div>
            <div className="login-button" onClick={toggleLogin}> 
            <FontAwesomeIcon icon={faUser} />
            <div>{isLogin ? 'Logout' : 'Login'}</div>
            </div>
        </div>



        <div className='nav-section'>
        <Link to='/'>
        <img width={200}
         src={process.env.PUBLIC_URL+"./img/12.jpeg"} alt='logo'/>
         </Link>
        </div>

        <div className='search-bar'>
            <FontAwesomeIcon icon={faSearch} />
            <input type='text' onKeyPress={(event) => search(event)}/>
        </div>

        <div className='menu-area'>
            <ul className='menu-list'>
                {MenuList.map(menu=> <li>{menu}</li>)}
            </ul>
        </div>


        </div>
  )
}

export default Navbar