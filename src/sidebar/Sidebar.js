import "./Sidebar.css";



const Sidebar = () =>{
    return(
        <div id="sidebar">
        <div className="sidebar_title">
        <div className="sidebar_image">
            <img src="https://www.kindpng.com/picc/m/139-1397307_message-bubble-png-message-3d-icon-png-transparent.png" alt="logo"/>
            <h1>NEUROLINGUA</h1>

            
            </div> 
            
            </div> 

            

            <div classNameid="sidebar_menu">
            <div className="sidebar_logout">
                    <button id="button"><i   className="fab fa-blogger"></i>
                    <a  href="#">Dashboard</a>
                    </button> 
                </div>  

                <div className="sidebar_link">
                    <i className="fas fa-graduation-cap"></i>
                    <a href="#">Courses</a>
                </div>  

                <div className="sidebar_link">
                    <i className="far fa-calendar-alt"></i>
                    <a href="#">Availability</a>
                </div> 

                <div className="sidebar_link">
                    <i className="fas fa-user-graduate"></i>
                    <a href="#">Students</a>
                </div> 

                <div className="sidebar_link">
                    <i className="fab fa-blogger"></i>
                    <a href="#">Blog</a>
                </div> 

                <div className="sidebar_link">
                    <i className="fas fa-ticket-alt"></i>
                    <a href="#">Cupons</a>
                </div> 

                <div className="sidebar_link">
                    <i className="fas fa-dollar-sign"></i>
                    <a href="#">Earnings</a>
                </div> 

                <div className="sidebar_link">
                    <i className="fas fa-cog"></i>
                    <a href="#">Setting</a>
                </div> 

                <div className="sidebar_logout">
                    <button id="button"><i   className="fas fa-sign-out-alt"></i>
                    <a  href="#">LogOut</a>
                    </button> 
                </div> 

                
                 
            </div>             
        </div>
    )
};

export default Sidebar;