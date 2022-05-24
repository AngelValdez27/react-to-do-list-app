import { Routes, Route } from "react-router-dom";
import SignUp from '../components/SignUp/SignUp';
import SignIn from '../components/SignIn/SignIn';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default Routing;