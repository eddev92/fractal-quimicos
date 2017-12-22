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

                        <div className="card-body text-center aux">
                            <h5 className="card-title"><strong>{item.title}</strong></h5>
                                    {(item.extra1) && <h5>1.{item.extra1}</h5>}
                                    {(item.extra2) && <h5>2.{item.extra2}</h5>}
                                    {(item.extra3) && <h5>3.{item.extra3}</h5>}
                                    {(item.extra4) && <h5>4.{item.extra4}</h5>}
                                    {(item.extra5) && <h5>5.{item.extra5}</h5>}
                                    {(item.extra6) && <h5>6.{item.extra6}</h5>}
                                    {(item.extra7) && <h5>7.{item.extra7}</h5>}
                                    {(item.extra8) && <h5>8.{item.extra8}</h5>}
                                    {(item.extra9) && <h5>9.{item.extra9}</h5>}
                                    {(item.extra10) && <h5>10.{item.extra10}</h5>}
                                    {(item.extra11) && <h5>11.{item.extra11}</h5>}
                                    {(item.extra12) && <h5>12.{item.extra12}</h5>}
                                    {(item.extra13) && <h5>13.{item.extra13}</h5>}
                                    {(item.extra14) && <h5>14.{item.extra14}</h5>}
                                    {(item.extra15) && <h5>15.{item.extra15}</h5>}
                                    {(item.extra16) && <h5>16.{item.extra16}</h5>}
                                    {(item.extra17) && <h5>17.{item.extra17}</h5>}
                                    {(item.extra18) && <h5>18.{item.extra18}</h5>}
                                    {(item.extra19) && <h5>19.{item.extra19}</h5>}
                            <p className="card-text">{item.subtitle}</p>

                        </div>

                    </div>;

    return element
    
}
export default CardComponent;