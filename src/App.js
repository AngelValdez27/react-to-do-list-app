import './App.css';
import 'animate.css';
import { BrowserRouter } from "react-router-dom";
import Routing from './routes/Routing';

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
