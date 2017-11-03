import * as React from 'react';
import {Footer} from './../footer'

export class Contacts extends React.Component {
  render() {
    return (
       <section id="contact" className="">
          <div className="highlightBox">
            <div className="boxBg page-block-big">
              <div className="container wow fadeIn" data-wow-offset="50" data-wow-delay="1s">
                  <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 contact">
                        
                        <div className="contactInfo BGlight">
                            <div className="upper">
                              <p className="no-border"><i className="fa fa-clock-o"></i> <strong>Encuéntranos de:</strong><br/>  Lunes – Viernes<br/>9:00am - 6:00pm</p>
                              <p><i className="fa fa-phone"></i> <strong>Llámanos: </strong><br/> (+51) 997 087 771 <br/> (+01) 423 1669
                              </p>
                            </div>
                            <div className="lower">
                              <p><i className="fa fa-envelope-o"></i><strong>Escríbenos a: </strong>fractal@fractalquimicos.com</p>
                            </div>
                        </div>
                        
                        <div className="contactForm">
                          <form id="contact_form" method="post" action="form/contact.php">
                            <div className="form-row">
                              <input type="text" className="form-control" id="name" name="name" placeholder="Nombres y apellidos..." />
                            </div>
                            <div className="form-row">
                              <input type="tel" className="form-control" id="phone" name="phone" placeholder="Teléfonos..." />
                            </div>
                            <div className="form-row">
                              <input type="email" className="form-control" id="email" name="email" placeholder="Correo..." />
                            </div>
                            <div className="form-row">
                              <textarea cols="60" rows="3" id="comment" name="comment" className="form-control" placeholder="¿En que podemos ayudarte?"></textarea>
                            </div>
                            <div className="form-row">
                              <input type="text" id="security" name="security" className="form-control hide" value="" />
                              <input type="submit" value="Enviar" className="btn btn-dark btn-lg col-12" style={{width: '100%'}} id="submit" name="submit" />
                            </div>
                          </form>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
        <Footer></Footer>
        </section>
    )
  }
}