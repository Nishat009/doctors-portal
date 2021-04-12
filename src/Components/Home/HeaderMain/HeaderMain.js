import React from 'react';
import chair from '../../../images/Mask Group 1.png'
const HeaderMain = () => {
    return (
       <main style={{height:'600px'}} className="row d-flex align-items-center">
           <div className="col-md-4 offset-md-1">
               <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here</h1>
               <p className="text-secondary"> laudantium necessitatibus doloribus voluptates. Sint cumque facere eaque, molestiae dolor inventore doloribus. Culpa recusandae officia modi sapiente ea?
               Iusto unde animi architecto eum praesentium suscipit ipsum quae  cupiditate porro ea? Natus veritatis ad magnam iusto iure adipisci ratione dicta quisquam voluptas?</p>
               <button className="btn btn-primary"> Get Appointment</button>
           </div>
           <div className="col-md-6">
               <img src={chair} alt="" className="img-fluid"/>
           </div>

       </main>
    );
};

export default HeaderMain;