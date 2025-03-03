import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/experience">Work Experience</Link></li>
                    <li><Link to="/certifications">Certifications</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/references">References</Link></li>
                    <li><Link to="/documents">Documents</Link></li>
                </ul>
            </nav>
        </>
    );
}