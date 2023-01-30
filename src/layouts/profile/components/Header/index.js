/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { ToastContainer, toast } from "react-toastify";


import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";

// Argon Dashboard 2 MUI example components
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Argon Dashboard 2 MUI base styles
import breakpoints from "assets/theme/base/breakpoints";

import './index.css';
// Images
import burceMars from "assets/images/bruce-mars.jpg";

function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);


  const [profile, setProfile] = useState()
  const user = JSON.parse(localStorage.getItem("user"))
  let token = localStorage.getItem("token");

  console.log(user.profile)
  console.log(token)
  console.log(user.email)
  console.log(user.email)

  const updateCustomer = () => {


    const uploadData = new FormData();
    uploadData.append('profile', profile, profile.name)

    console.log(token)
    console.log(user.email)
    console.log(user.email)

    console.log(profile)
    fetch(`http://localhost:8000/api/user/userdetails/${user.email}/`, {
      method: 'PATCH',
      headers: new Headers({
        'Authorization': token ? `Token ${token}` : "",
      }), 
      body: uploadData,
    })
    .then(res => {
      console.log(res)
      if(res.status == 200 ){
        toast.success("Company Logo Successfully Updated");
      }
      else{
        toast.error("Upload Error");
      }
    })
    .catch(error => console.log(error))

  }




  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);


  const divStyle = {
    margin: '40px',
    border: '5px solid pink'
  };
  const pStyle = {
    fontSize: '15px',
    textAlign: 'center'
  };



  return (
    <ArgonBox position="relative">

      <ToastContainer />

      <DashboardNavbar absolute light />
      <ArgonBox height="220px" />
      <Card
        sx={{
          py: 2,
          px: 2,
          boxShadow: ({ boxShadows: { md } }) => md,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <div className="img-wrapper">
              <ArgonAvatar
                src={`http://localhost:8000${user.profile}`}
                alt="profile-image"
                variant="rounded"
                size="xl"
                shadow="sm"
                className="hover-zoom"
              />
              </div>
          </Grid>
          <Grid item>
            <ArgonBox height="100%" mt={0.5} lineHeight={1}>
              <ArgonTypography variant="h5" fontWeight="medium">
                {user.name}
              </ArgonTypography>
              <ArgonTypography variant="button" color="text" fontWeight="medium">
                Admin
              </ArgonTypography>
            </ArgonBox>
          </Grid>
          <Grid item xs={8} md={5} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              {/* <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}> */}
                {/* <Tab
                  label="App"
                  icon={
                    <i className="ni ni-app" style={{ marginTop: "6px", marginRight: "8px" }} />
                  }
                />
                <Tab
                  label="Message"
                  icon={
                    <i
                      className="ni ni-email-83"
                      style={{ marginTop: "6px", marginRight: "8px" }}
                    />
                  }
                /> */}
                {/* <Tab
                  //onClick={}
                  icon={
                    <i
                      className="ni ni-settings-gear-65"
                      style={{ marginTop: "6px", marginRight: "8px" }}
                    />
                  }
                /> */}
              {/* </Tabs> */}
              <input 
                className="upload-input"
                type="file"
                onChange={(e) => setProfile(e.target.files[0])}
               />
               <button 
                style={{
                  fontSize: 15,
                  border: 0,
                  backgroundColor: '#3a4e9e',
                  marginTop: 10,
                  color: 'white',
                  paddingTop: 5,
                  paddingBottom: 5
                }}
                onClick={()=> updateCustomer()}> Update Profile Picture</button>


            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </ArgonBox>
  );
}

export default Header;