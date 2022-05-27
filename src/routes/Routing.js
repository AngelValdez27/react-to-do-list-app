import { Routes, Route } from "react-router-dom";
import SignUp from '../components/SignUp/SignUp';
import SignIn from '../components/SignIn/SignIn';
import Home from '../components/Home/Home';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default Routing;