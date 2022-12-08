import {Link} from 'react-router-dom'
const Navbar=()=>{
    const showMenu=()=>{
        document.querySelector(".nav-menu").style.display='block'
    }
    const closeMenu=()=>{
        document.querySelector(".nav-menu").style.display='none'
    }
    return(
        <>
            <nav className='nav-bar'>
                <div className='navbar-brand'><Link to='/'>Game source</Link></div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/login'>Sign in</Link>
                    </li>
                    <div className='menuBtn' onClick={showMenu}>Menu</div>
                </ul>
            </nav>
            
                <div className='nav-menu'>
                    <div className='close-menu' onClick={closeMenu}>Close</div>
                    <ul>
                        <li>
                            <Link to='/' onClick={closeMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to='/dashboard' onClick={closeMenu}>Profile</Link>
                        </li>
                        <li>
                            <Link to='/login' onClick={closeMenu}>Sign in</Link>
                        </li>
                    </ul>
                </div>
        </>
    )
};

export default Navbar;