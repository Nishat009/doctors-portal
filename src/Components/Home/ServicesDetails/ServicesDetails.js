import React from 'react';

const ServicesDetails = ({service}) => {
    return (
       <div className="col-md-4 text-center">
           <img style={{height:'50px'}} src={service.image} alt=""/>
           <h5 className="mt-3 mb-3">{service.title}</h5>
           <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, maxime pariatur eaque perspiciatis ab repudiandae rerum consectetur optio id reiciendis? Quam vitae soluta aliquid assumenda velit. Neque beatae illo autem.</p>

       </div>
    );
};

export default ServicesDetails;