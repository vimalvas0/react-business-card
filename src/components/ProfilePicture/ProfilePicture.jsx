import "./ProfilePicture.css";

export default function ProfilePicture({ src, alt }) {
  return <img className="profile-image" src={src} alt={alt} />;
}
