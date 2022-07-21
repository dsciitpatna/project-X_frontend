import React, {useState} from 'react'
import "./Sidebar.css"



export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
   
  <div class="sidebar">
    <div className = {isOpen ? "open" : "close"}>
    
    <div class="logo-details">
      
        <div class="logo_name">IITP Gymkhana</div>
        <i class='bx bx-menu' id="btn" onClick={()=> setIsOpen(!isOpen)} ></i>
    </div>
    <ul class="nav-list">
      <li>
           <a href="#">
            <i class='fa fa-compass' id="btn"></i>
            <span class="links_name">Explore</span>
          </a>
           <span class="tooltip">Explore</span>
      </li>
      <li>
        <a href="#">
          <i class='bx bx-grid-alt'></i>
          <span class="links_name">Help-Desk</span>
        </a>
         <span class="tooltip">Help-Desk</span>
      </li>
      <li>
       <a href="#">
         <i class='bx bx-user' ></i>
         <span class="links_name">User</span>
       </a>
       <span class="tooltip">User</span>
     </li>
     <li>
       <a href="#">
         <i class='bx bx-search' ></i>
         <span class="links_name">Lost and Found</span>
       </a>
       <span class="tooltip">Lost and Found</span>
     </li>
     <li>
       <a href="#">
         <i class='fa fa-cutlery' ></i>
         <span class="links_name">Mess Menu</span>
       </a>
       <span class="tooltip">Mess Menu</span>
     </li>
     <li>
       <a href="#">
         <i class='bx bx-folder' ></i>
         <span class="links_name"> Class Time Table</span>
       </a>
       <span class="tooltip">Class Time Table</span>
     </li>
     <li>
       <a href="#">
         <i class='bx bx-calendar' ></i>
         <span class="links_name">Academic Calendar</span>
       </a>
       <span class="tooltip">Academic Calendar</span>
     </li>
     <li>
       <a href="#">
         <i class='bx bxs-bus-school' ></i>
         <span class="links_name">Bus Schedule </span>
       </a>
       <span class="tooltip">Bus Schedule</span>
     </li>
     <li class="profile">
         <div class="profile-details">
           <img src="image.jpeg" alt="profileImg"></img>
           <div class="name_job">
             <div class="name">Name</div>
             <div class="job">Roll No.</div>
           </div>
         </div>
         <i class='bx bx-log-out' id="log_out" ></i>
     </li>
    </ul>
    </div>
  </div>
  
 
  )
}

