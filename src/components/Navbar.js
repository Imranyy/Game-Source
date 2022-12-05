import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        <>
            <nav className='nav-bar'>
                <div className='navbar-brand'><Link to='/'>Game source</Link></div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/register'>Register</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Navbar;