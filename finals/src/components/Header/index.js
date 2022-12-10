import "./style.css"
import {NavLink} from 'react-router-dom';
const HandleActiveClass = (params) => {
	return params.isActive ? "active-item" : "inactive-item"
}

const Header = () => {
    return(
        <div className='header'>
            <ul>
                <li>
                    <NavLink to="/" className={HandleActiveClass}>All</NavLink>
                </li>
                <li>
                    <NavLink to="/active" className={HandleActiveClass}>Active</NavLink>
                </li>
                <li>
                    <NavLink to="/completed" className={HandleActiveClass}>Completed</NavLink>
                </li>
		</ul>
        <hr></hr>
        </div>
    )
}

export default Header;