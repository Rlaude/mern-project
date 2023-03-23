import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Creative Narratives</h1>
                </Link>
                <Link to="/About">
                    <h2>About Us</h2>
                </Link>
                <Link to="/Add">
                    <h2>New Narrative</h2>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;