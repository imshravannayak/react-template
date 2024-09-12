import Dashboard from './component/Dashboard';
import RegistrationForm from './component/RegistrationForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
</>
  );
}

export default App;
