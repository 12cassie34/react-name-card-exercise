import emailIcon from "./images/email-icon.png";
import linkedinIcon from "./images/linkedin-icon-1.png";

function nameAndContact() {
  return (
    <div className="name-and-contact">
      <div className="title">
        <h1 className="title__name">Shan-yu, Lin</h1>
        <p className="title__position">Frontend Developer</p>
        <a
          className="title__website"
          href="https://medium.com/@cassiecoding"
          target="_blank"
          rel="noopener noreferrer"
        >
          cassiecoding.website
        </a>
      </div>
      <div className="contact">
        <a className="contact__item contact__item--email" href="mailto:ineslin35@gmail.com">
            <img src={emailIcon} alt="My Email"></img>
            Email
        </a>
        <a className="contact__item contact__item--linkedin" href="mailto:ineslin35@gmail.com">
            <img src={linkedinIcon} alt="My Email"></img>
            LinkedIn
        </a>
      </div>
    </div>
  );
}

export default nameAndContact;
