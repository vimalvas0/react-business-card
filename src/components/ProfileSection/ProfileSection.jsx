import "./ProfileSection.css";

export default function ProfileSection({ sectionName, sectionContent }) {
  return (
    <div className="profile-section">
      <h4>{sectionName}</h4>
      <p>{sectionContent}</p>
    </div>
  );
}
