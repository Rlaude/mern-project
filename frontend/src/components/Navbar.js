import { Link } from 'react-router-dom';
import creativeNarrativeLogo from '../assets/creativeNarrativeLogo.PNG'

const Navbar = () => {
    const logoStyle = {
        height: "100px",
        width: "100px",
        display: "flex"
    }
    
    return (
        <header>
            <div className="container">
                <Link to="/">
                <img src={creativeNarrativeLogo} alt="logo"style={logoStyle}/>
                </Link>
                <Link to="/">
                
                    <h1>Creative Narratives</h1>
                </Link>
                <Link to="/about">
                    <h1>About Us</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;