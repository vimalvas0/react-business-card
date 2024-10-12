import "./ProfileDescription.css";
import ProfileSection from "../ProfileSection/ProfileSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const profileSections = [
  {
    sectionName: "About",
    sectionContent:
      "I am a full stack engineer with expertise in Node.js, Go, Python, and React. I have also worked with DevOps. I am passionate about making complex systems simple and automating daily tasks. I prioritize security and best practices while always looking for new technologies and approaches to learn and improve my skills.",
  },
  {
    sectionName: "Interests",
    sectionContent:
      "Tech enthusiast. History buff. Avid reader. Article collector. Football fanatic. Lifelong learner. Soccer devotee. Curious mind. Thoughtful explorer.",
  },
];

export default function ProfileDescription() {
  return (
    <>
      <div className="description-item">
        <h2>Vimal Vashisth</h2>
        <h3>Software Engineer</h3>
        <p className="email">vimalvas03@gmail.com</p>
        <div className="social-links">
          <a href="mailto:vimalvas03@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="btn btn-email">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>Email Me</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/vimal0399/" target="_blank" rel="noopener noreferrer">
            <div className="btn btn-linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
              <p>LinkedIn</p>
            </div>
          </a>
        </div>
        <div className="profile-sections">
          {profileSections.map((section, index) => {
            return <ProfileSection sectionName={section.sectionName} sectionContent={section.sectionContent} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}
