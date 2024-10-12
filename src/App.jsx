import "./App.css";
import Card from "./components/Card/Card";
import ProfilePicture from "./components/ProfilePicture/ProfilePicture";
import ProfileDescription from "./components/ProfileDescription/ProfileDescription";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Card>
        <ProfilePicture src="/profile.jpg" alt="React Logo" />
        <ProfileDescription />
        <Footer />
      </Card>
    </>
  );
}

export default App;
