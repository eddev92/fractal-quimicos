import React from 'react';
import './card.css';

const CardComponent = ({item}) => {

   const element = <div className="card cardGalery card-cascade wider col-md-6" style={{ marginBottom: '10%'}} >

                        <div className="view overlay hm-white-slight">
                            <img src={item.url} className="img-fluid"/>
                            <a href="#!">
                                <div className="mask"></div>
                            </a>
                        </div>

                        <div className="card-body text-center">
                            <h5 className="card-title"><strong>{item.title}</strong></h5>

                            <p className="card-text">{item.subtitle}</p>

                        </div>

                    </div>;

    return element
    
}
export default CardComponent;