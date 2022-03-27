import twitterIcon from './images/twitter-icon.png';
import facebookIcon from './images/facebook-icon.png';
import linkedinIcon from './images/linkedin-icon.png';
import githubIcon from './images/github-icon.png';

function Footer() {
    return (
        <div className="footer">
           <a href="#" target="_blank" rel="noopener noreferrer">
               <img src={twitterIcon} alt="My Twitter Acount"></img>
           </a>
           <a href="#" target="_blank" rel="noopener noreferrer">
               <img src={facebookIcon} alt="My Facebook Acount"></img>
           </a>
           <a href="https://www.linkedin.com/in/shanyulin/" target="_blank" rel="noopener noreferrer">
               <img src={linkedinIcon} alt="My LinkedIn Acount"></img>
           </a>
           <a href="https://github.com/12cassie34" target="_blank" rel="noopener noreferrer">
               <img src={githubIcon} alt="My github Acount"></img>
           </a>
        </div>
    )
}

export default Footer;