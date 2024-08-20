import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from 'react-router'
const Navbar = () => {
    const MenuList = ['About', '2021', '2022', '2023', '2024']
    const navigate = useNavigate()
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
            <div className="login-button" onClick={goToLogin}> 
            <FontAwesomeIcon icon={faUser} />
            <div>Login</div>
            </div>
        </div>



        <div className='nav-section'>
        <img width={200}
         src={process.env.PUBLIC_URL+"./img/12.jpeg"} alt='logo'/>
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