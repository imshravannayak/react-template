import { useState } from "react"
import { json } from "react-router-dom";
function RegistrationForm({showAlert})
{
    const [state , setState] = useState({
        email : "",
        password : "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        successMessage: null 
    })
    const handleChange=(e)=>{
        const {id,value} = e.target
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
        "first_name":state.firstName,
        "last_name":state.lastName,
        "email":state.email,
        "password":state.password,
      };
      fetch('http://localhost:5000/api/registration',{
        method:"POST",
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(payload)
      }).then(response=>response.json()).then(
        data=>{ if(data.email){
          showAlert({ title: 'Success', message: 'saved user data', type: 'success' })
        }
          
    }).catch(error => {
      console.log(error)
    });
    }
    return(
        <>
        <div className="bg-gradient-primary">
  <div className="container">
    <div className="card o-hidden border-0 shadow-lg my-5">
      <div className="card-body p-0">
        {/* Nested Row within Card Body */}
        <div className="row">
          <div className="col-lg-5 d-none d-lg-block bg-register-image" />
          <div className="col-lg-7">
            <div className="p-5">
              <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
              </div>
              <form className="user">
                <div className="form-group row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      id="firstName"
                      placeholder="First Name" value ={state.firstName} onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      id="lastName"
                      placeholder="Last Name" value ={state.lastName} onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-user"
                    id="email"
                    placeholder="Email Address" value ={state.email} onChange={handleChange}
                  />
                </div>
                <div className="form-group row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="password"
                      className="form-control form-control-user"
                      id="password"
                      placeholder="Password" value ={state.password} onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="confirmPassword"
                      className="form-control form-control-user"
                      id="exampleRepeatPassword"
                      placeholder="Repeat Password" value ={state.confirmPassword} onChange={handleChange}
                    />
                  </div>
                </div>
                <a
                  href="login.html"
                  className="btn btn-primary btn-user btn-block" onClick={handleSubmit}
                >
                  Register Account
                </a>
                <hr />
                <a
                  href="index.html"
                  className="btn btn-google btn-user btn-block"
                >
                  <i className="fab fa-google fa-fw" /> Register with Google
                </a>
                <a
                  href="index.html"
                  className="btn btn-facebook btn-user btn-block"
                >
                  <i className="fab fa-facebook-f fa-fw" /> Register with
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
                <a className="small" href="login.html">
                  Already have an account? Login!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</>
    );
}
export default RegistrationForm;