import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import Votp from "./Components/Votp.js";
import Landing from "./Pages/Landing.js";
import Intro from "./Components/Intro.js";
import CreateEvent from "./Components/CreateEvent.js";
import UniversityRegister from "./Components/UniversityRegister.js";
import ManageEvent from "./Components/ManageEvent.js";
import ExploreEvents from "./Components/ExploreEvents.js";
import Llobby from "./Components/Llobby.js";

const App = () => {
  return (
    <div className="App bg-gray">
      <Routes>
        <Route exact path="/" element={<Landing />}>
          <Route index element={<Intro />} />
          <Route path="/createEvent" element={<CreateEvent />} />
          <Route path="/universityregister" element={<UniversityRegister />} />
          <Route path="/manageevent" element={<ManageEvent />} />
          <Route path="/exploreevent" element={<ExploreEvents />} />
        </Route>
        <Route path="/eventroom" element={<Llobby />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verifyotp" element={<Votp />} />
      </Routes>
    </div>
  );
};

export default App;
