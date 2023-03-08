import React from "react";
import Loading from "../components/Loading";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import girl from '../assets/girl-using-computer-illus.svg';
import '../styles/Profile.css';

export const ProfileComponent = () => {

  return (
    <div class="container-fluid profile-wrapper px-5">
      <div class="container-fluid px-5 pt-4 profile-content">
        <div class="row user-card">
          <div class="col-xl-4 left-column">
            <div class="row girl-row pt-3">
              <div class="col">
                <h5 class="text-primary" style={{fontFamily:"'Poppins', sans-serif",fontSize:"17px",fontWeight:"600",color:"#556EE6"}}>Welcome back!</h5>
                <p style={{fontFamily:"'Poppins', sans-serif",fontSize:"13px",fontWeight:"400",color:"#556EE6"}}>ACG Dashboard</p>
              </div>
              <div class="col text-end">
                <img src={girl} width="120px"></img>
              </div>
            </div>
            <div class="row align-items-center pb-4">
              <div class="col">
                <h5 style={{fontFamily:"'Poppins', sans-serif",fontSize:"16px",fontWeight:"500",color:"#495057"}}>User name</h5>
                <p style={{fontFamily:"'Poppins', sans-serif",fontSize:"13px",fontWeight:"400",color:"#74788D"}}>Individual Investor</p>
              </div>
              <div class="col">
                <div class="row pt-3">
                  <div class="col">
                    <p style={{fontFamily:"'Poppins', sans-serif",fontSize:"15px",fontWeight:"400",color:"#495057"}}>15 days</p>
                  </div>
                  <div class="col">
                    <p style={{fontFamily:"'Poppins', sans-serif",fontSize:"15px",fontWeight:"400",color:"#495057", marginBottom:"5px"}}>$1245</p>
                    <p style={{fontFamily:"'Poppins', sans-serif",fontSize:"12px",fontWeight:"400",color:"#74788D"}}>Revenue</p>
                  </div>
                </div>
                <div class="row">
                  <button type="button" class="btn btn-primary btn-sm w-50" > view profile</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8 ps-5 right-column">
            <div class="row right-column-inner gap-3">
              <div class="col card">
                <div class="card-body ">
                  <div class="d-flex align-items-center">
                    <div class="flex-fill align-items-center">
                    <p class="m-0" style={{fontFamily:"'Poppins', sans-serif",fontSize:"12px",fontWeight:"400",color:"#74788D",paddingBottom:"6px"}}>Trades</p>
                    <h4 style={{fontFamily:"'Poppins', sans-serif",fontSize:"18px",fontWeight:"500",color:"#495057"}}>1,234</h4>
                    </div>
                    <div class="align-self-right"><i class="fa-solid fa-table-list" style={{fontSize:"30px", color:"#556EE6"}}></i></div>
                  </div>
                </div>
              </div>
              <div class="col card">
                <div class="card-body ">
                  <div class="d-flex align-items-center">
                    <div class="flex-fill align-items-center">
                    <p class="m-0" style={{fontFamily:"'Poppins', sans-serif",fontSize:"12px",fontWeight:"400",color:"#74788D",paddingBottom:"6px"}}>Revenue</p>
                    <h4 style={{fontFamily:"'Poppins', sans-serif",fontSize:"18px",fontWeight:"500",color:"#495057"}}>$35,723</h4>
                    </div>
                    <div class="align-self-right"><i class="fa-solid fa-hand-holding-dollar" style={{fontSize:"30px", color:"#556EE6"}}></i></div>
                  </div>
                </div>
              </div>
              <div class="col card">
                <div class="card-body ">
                  <div class="d-flex align-items-center">
                    <div class="flex-fill align-items-center">
                    <p class="m-0" style={{fontFamily:"'Poppins', sans-serif",fontSize:"12px",fontWeight:"400",color:"#74788D",paddingBottom:"6px"}}>Average Price</p>
                    <h4 style={{fontFamily:"'Poppins', sans-serif",fontSize:"18px",fontWeight:"500",color:"#495057"}}>$16.2</h4>
                    </div>
                    <div class="align-self-right"><i class="fa-solid fa-tags" style={{fontSize:"30px", color:"#556EE6"}}></i></div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
      

    </div>
    
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
