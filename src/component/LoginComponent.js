import { useContext, useState } from "react";
import { json } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import { Navigate, Outlet, useLocation} from "react-router-dom";
const LoginComponent =({showAlert}) =>{

  const {token,isAuthenticate,login,logout} = useContext(AuthContext);

    const [state , setState] = useState({
        email : "",
        password : "",
    })
    if (isAuthenticate) {
      return <Navigate to="/dashboard" replace />;
    }
    const handleChange=(e)=>{
        const {id,value} = e.target
        console.log(value)
        setState(prevState => {
            return { ...prevState, [id]: value };
          });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        sentDetailToServer();
    }
    const sentDetailToServer=()=>{
      const payload ={
        "email":state.email,
        "password":state.password,
      };
      fetch('http://localhost:5000/api/login',{
        method:"POST",
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(payload)
      }).then(response=>{

        return response.json().then(data=>{
          console.log('ff',data)
          if(!response.ok){
            console.log(data.message)
            throw new Error(data.message || 'Server error');
          } return data;
        })
      }).then(
        data=>{
         
          showAlert({ title: 'Success', message: 's', type: 'success' })
          login(data.token)

    }).catch(error => {
      console.log(error)
      showAlert({ title: 'Error', message: error.message, type: 'error' });
    });
    }
    return (
<>
<>
<div className="bg-gradient-primary">
  <div className="container">
    {/* Outer Row */}
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-login-image" />
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form className="user">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..." value = {state.email} onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="password"
                        placeholder="Password" value = {state.password}  onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck"
                        >
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <a
                      
                      className="btn btn-primary btn-user btn-block" onClick={handleSubmit}
                    >
                      Login
                    </a>
                    <hr />
                    <a
                      href="index.html"
                      className="btn btn-google btn-user btn-block"
                    >
                      <i className="fab fa-google fa-fw" /> Login with Google
                    </a>
                    <a
                      href="index.html"
                      className="btn btn-facebook btn-user btn-block"
                    >
                      <i className="fab fa-facebook-f fa-fw" /> Login with
                      Facebook
                    </a>
                  </form>
                  <hr />
                  <div className="text-center">
                    <a className="small" href="forgot-password.html">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="text-center">
                    <a className="small" href="register.html">
                      Create an Account!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>

</>
    );
}
export default LoginComponent;