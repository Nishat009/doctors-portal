import React from 'react';
import flouride from '../../../images/001-dental.png'
import Whiting from '../../../images/tooth.png'
import cavity from '../../../images/tooth (1).png'
import ServicesDetails from '../ServicesDetails/ServicesDetails';
const ServicesData=[
    {
        title:'Flouride Treatment',
        image:flouride
        
    },
    {
        title:'Cavity Filing',
       image:cavity
        
    },
    {
        title:'Teeth Whiting',
        image:Whiting
        
    }
]
const Services = () => {
    return (
       <section className="services-container mt-5">
          <div className="text-center">
          <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
           <h2>Services We Provides</h2>
          </div>
          <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    ServicesData.map(service=> <ServicesDetails service={service}></ServicesDetails>)
                }   
            </div>
        </div>
       </section>
    );
};

export default Services;