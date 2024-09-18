import Dashboard from './component/Dashboard';
import RegistrationForm from './component/RegistrationForm';
import AlertComponet from './component/AlertComponent';
import LoginComponent from './component/LoginComponent';
import PrivateRoute from './middleware/PrivateRoute';
import {AuthProvider} from './providers/AuthContext';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alertData, setAlertData]= useState();
  const showAlert=({title,message,type})=>{
    setAlertData({title,message,type})
  }
  return (
    <>
    <Router>
    <AuthProvider>
      <Routes>
      {/* <Route path="/dashboard" exact element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
      <Route element={<PrivateRoute />}>
    <Route path="/dashboard" element={<Dashboard showAlert={showAlert} />} />
  </Route>
      {/* <Route path="/dashboard" element={<Dashboard showAlert={showAlert}/>} /> */}
      <Route path="/register" element={<RegistrationForm showAlert={showAlert}/>} />
      <Route path="/login" element={<LoginComponent showAlert={showAlert}/>} />
      </Routes>
      </AuthProvider>
    </Router>
    {alertData && <AlertComponet {...alertData} />}
</>
  );
}

export default App;
