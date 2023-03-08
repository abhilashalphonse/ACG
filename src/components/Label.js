import React, { Component } from 'react';
import '../styles/Label.css';
 

class Label extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div class="container-fluid label-main-container px-5 py-3">
            <div class="row">
                <div class="col-md-3 label-text">
                   <div class="row">
                    <div class="col-md-5 px-0">
                        <a>ABOUT&nbsp;ACG</a>
                    </div>
                    <div class="col-md-7 px-0">
                        <a>RESEARCH&nbsp;CENTER</a>
                    </div>
                   </div>
                </div>
                <div class="col-md-7" id="label-menu-align-right">
                <div class="row justify-content-md-end">
                <div class="col-md-2">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle p-0" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Europe
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Belgium</a></li>
            <li><a class="dropdown-item" href="#">Luxembourge</a></li>
            <li><a class="dropdown-item" href="#">Portugal</a></li>
            <li><a class="dropdown-item" href="#">Switzerland</a></li>
            <li><a class="dropdown-item" href="#">United Kingdom</a></li>
          </ul>
        </li>
         
      </ul>
      </div>
      <div class="col-md-2">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle p-0" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            America
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Canada</a></li>
            <li><a class="dropdown-item" href="#">United Stated of America</a></li>
            <li><a class="dropdown-item" href="#">Brazil</a></li>
            <li><a class="dropdown-item" href="#">Chile</a></li>
          </ul>
        </li>
        
      </ul>
      </div>
      <div class="col-md-3">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle p-0" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Asia & Oceania
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="#">United Arab Emirates</a></li>
            <li><a class="dropdown-item" href="#">Bahrain</a></li>
            <li><a class="dropdown-item" href="#">Japan</a></li>
            <li><a class="dropdown-item" href="#">Singapore</a></li>
            <li><a class="dropdown-item" href="#">India</a></li>
            <li><a class="dropdown-item" href="#">Australia</a></li>
            <li><a class="dropdown-item" href="#">NewZealand</a></li>
          </ul>
        </li>
        
      </ul>
      </div>
      </div>
      
</div>
                <div class="col-md-2 d-flex justify-content-end careers-button">
                    <a>CAREERS<i class="fa-solid fa-grip-vertical careers-icon"></i></a>
                </div>
            </div>
            </div>
            </>
        );
    }
}
 
export default Label;