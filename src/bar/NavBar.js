import {NavLink} from "react-router-dom";

function NavBar() {
    return ( 
        <div className="border-bars top">
            <NavLink to="/" exact style={NavStyles}>
                Home
            </NavLink>
            <NavLink to="/about" exact style={NavStyles}>
                About
            </NavLink>
            <NavLink to="/skills" exact style={NavStyles}>
                Skills
            </NavLink>
            <NavLink to="/myProjects" exact style={NavStyles}>
                Projects
            </NavLink>
            <NavLink to="/blogs" exact style={NavStyles}>
                Blogs
            </NavLink>
        </div>
    );
}

export default NavBar;
const NavStyles =
{
border: "1px black solid"
}