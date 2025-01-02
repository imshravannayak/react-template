import { useEffect } from "react";
import { useState } from "react";
const profileApi = 'http://localhost:5000/api/get-profile'
const Profile = () =>{
  const [profileData, setProfileData] = useState();
  useEffect(()=>{
    const fetchProfileData = () =>{
      fetch(profileApi,{
        method:"POST",
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(payload)
      })
    }
  })
    return (
        <div className="container-fluid">
        {/* Page Heading */}
        <h1 className="h3 mb-4 text-gray-800">Profile Page</h1>
        {/* start card  */}
        <div className="col-xl-8">
  <div className="card mb-4">
    <div className="card-header">User Details</div>
    <div className="card-body">
      <form>
        <div className="mb-3">
          {" "}
          <label className="small mb-1" htmlFor="inputUsername">
            Username (how your name will appear to other users on the site)
          </label>{" "}
          <input
            className="form-control"
            id="inputUsername"
            type="text"
            placeholder="Enter your username"
            defaultValue="username"
          />
        </div>
        <div className="row gx-3 mb-3">
          <div className="col-md-6">
            {" "}
            <label className="small mb-1" htmlFor="inputFirstName">
              First name
            </label>{" "}
            <input
              className="form-control"
              id="inputFirstName"
              type="text"
              placeholder="Enter your first name"
              defaultValue="Valerie"
            />
          </div>
          <div className="col-md-6">
            {" "}
            <label className="small mb-1" htmlFor="inputLastName">
              Last name
            </label>{" "}
            <input
              className="form-control"
              id="inputLastName"
              type="text"
              placeholder="Enter your last name"
              defaultValue="Luna"
            />
          </div>
        </div>
        <div className="row gx-3 mb-3">
          <div className="col-md-6">
            {" "}
            <label className="small mb-1" htmlFor="inputOrgName">
              Organization name
            </label>{" "}
            <input
              className="form-control"
              id="inputOrgName"
              type="text"
              placeholder="Enter your organization name"
              defaultValue="Start Bootstrap"
            />
          </div>
          <div className="col-md-6">
            {" "}
            <label className="small mb-1" htmlFor="inputLocation">
              Location
            </label>{" "}
            <input
              className="form-control"
              id="inputLocation"
              type="text"
              placeholder="Enter your location"
              defaultValue="San Francisco, CA"
            />
          </div>
        </div>
        <div className="mb-3">
          {" "}
          <label className="small mb-1" htmlFor="inputEmailAddress">
            Email address
          </label>{" "}
          <input
            className="form-control"
            id="inputEmailAddress"
            type="email"
            placeholder="Enter your email address"
            defaultValue="name@example.com"
          />
        </div>
        <div className="row gx-3 mb-3">
          <div className="col-md-6">
            {" "}
            <label className="small mb-1" htmlFor="inputPhone">
              Phone number
            </label>{" "}
            <input
              className="form-control"
              id="inputPhone"
              type="tel"
              placeholder="Enter your phone number"
              defaultValue="555-123-4567"
            />
          </div>
          <div className="col-md-6">
            {" "}
            <label className="small mb-1" htmlFor="inputBirthday">
              Birthday
            </label>{" "}
            <input
              className="form-control"
              id="inputBirthday"
              type="text"
              name="birthday"
              placeholder="Enter your birthday"
              defaultValue="06/10/1988"
            />
          </div>
        </div>{" "}
        <button className="btn btn-primary" type="button">
          Save changes
        </button>
      </form>
    </div>
  </div>
</div>

        {/* end card */}
      </div>
        
    );

}
export default Profile;