import logo from "../assets/DjLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  return( 
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="hidden md:flex m-8 gap-5 text-l">
      <Link 
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer">Home</Link>
      <Link 
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer">About Me</Link>
      <Link 
          to="tech"
          smooth={true}
          duration={500}
          className="cursor-pointer">Technologies</Link>
      {/* <Link 
          to=""
          smooth={true}
          duration={500}
          className="cursor-pointer">Education</Link> */}
      <Link 
          to="experience"
          smooth={true}
          duration={500}
          className="cursor-pointer">Experience</Link>
      <Link 
          to="project"
          smooth={true}
          duration={500}
          className="cursor-pointer">Project</Link>
      <Link 
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer">Contact</Link>  
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a
        href="https://www.linkedin.com/in/deepesh-jaiswal-945a90160/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-blue-500 transition-colors duration-200"
      >
        <FaLinkedin  />
        </a>
        <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-gray-500 transition-colors duration-200"
      >
        <FaGithub /></a>
        <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-gray-700 transition-colors duration-200"
      ><FaSquareXTwitter /></a>
        
        <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-pink-600 transition-colors duration-200"
      ><FaInstagram /></a>
        
    </div>
  </nav>
  )
}

export default Navbar;