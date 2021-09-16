import "./Main.css";
import Chart from "../charts/Chart";

const Main = () =>{
    return(
        <main>
            <div className="main_container" >
                <div className="main_title">
                    
                    <div className="main_greeting">
                        
                    
                    </div>
                    

                </div>

                

                <div className="main_cards">

                   

                        <div className="card">
                            <div id="course"><i className="fas fa-graduation-cap text-lightblue"></i>
                            <i className="fas fa-ellipsis-h text-lightblue"></i>
                            </div>
                        
                        
                        <div className="card_inner">
                            
                            <p className="text-primary-p ">Courses</p>
                            
                            <span className="font-bold text-title">2</span>
                            </div>
                        </div>
                        <div className="card1">
                        <div id="course"><i className="fas fa-user-graduate text-lightblue"></i>
                            <i className="fas fa-ellipsis-h text-lightblue"></i>
                            </div>
                        <div className="card1_inner">
                            <p className="text-primary-p ">Class taken</p>
                            <span className="font-bold text-title">2</span>
                            </div>
                        </div>
                        <div className="card">
                        <div id="course"><i className="fas fa-check-circle text-lightblue"></i>
                            <i className="fas fa-ellipsis-h text-lightblue"></i>
                            </div>
                        <div className="card_inner">
                            <p className="text-primary-p ">Verified <br/> Courses</p>
                            <span className="font-bold text-title">2</span>
                            </div>
                        </div>
                        <div className="card">
                        <div id="course"><i className="fas fa-times-circle text-lightblue"></i>
                            <i className="fas fa-ellipsis-h text-lightblue"></i>
                            </div>
                        <div className="card_inner">
                            <p className="text-primary-p ">Non-Verified <br/> Courses</p>
                            <span className="font-bold text-title">2</span>
                            </div>
                        </div>

                        <div className="card1">
                        
                        <div id="course1">

                        <h3 >My Earnings</h3>
                       
                           
                            </div>
                            <hr/>
                            <div id="earning" >
                            <h3 >Today Earnings <br/> $1,000</h3>
                            <h3 > pending<br/> $60</h3>
                            </div>
                            <hr/>
                            
                        <div className="card1_inner">
                       
                        <button id="withdraw"> Withdraw </button>
                            <span className="font-bold text-title"></span>
                            </div>
                        </div>

                       

                        <div className="card">
                        
                        <div id="course2">
                        <h3  >Session Overview</h3>
                            </div>
                            <hr/>
                            <div id="earning" >
                            <h3 >Scheduled<br/> 1</h3>
                            <h3 > UpComing<br/> 2</h3>
                            <h3 > Cancled<br/> 0</h3>
                            </div>
                        <div className="card_inner">
                          
                            </div>
                        </div>
                        

                        <div className="card">
                            
                        <div id="course2">
                        <h3  >Session Overview</h3>
                            
                            </div>
                       
                            <i className="fas fa-child text-lightblue "></i>
                            <hr/>
                            <h3 id="students" >See all students</h3>
                        </div>

                        <div className="card">
                            
                        <div id="course2">
                        <h3  >Session Overview</h3>
                            
                            </div>
                       
                            <i className="fas fa-child text-lightblue "></i>
                            <hr/>
                            <h3 id="students" >See all students</h3>
                        </div>

                       

                               


                            </div>
                            
                        </div>

                        <div id="button-1" >
                            <button id="btn1">Courses Impression</button>
                           <button id="btn2">Per Session Earnng</button>
                            <button id="btn3">Top Students</button>
                            <button id="btn4">week</button>
                        </div>

               

          
            
            <Chart/>
        </main>
    )
}
export default Main;