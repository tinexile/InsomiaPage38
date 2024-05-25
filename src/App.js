import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Story from "./Components/Story";
import Speakers from "./Components/Speakers";
import Schedule from "./Components/Schedule";
import EventSpeaker from "./Components/EventSpeaker";
import Tickets from "./Components/Tickets";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <Story />
        <Speakers />
        <Schedule />
        <EventSpeaker />
        <Tickets />
        <Contacts />
        <Footer />
      </div>
    </>
  );
}

export default App;
