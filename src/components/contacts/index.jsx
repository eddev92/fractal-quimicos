import * as React from 'react';
import './index.css'
import {Footer} from './../footer'
import {sendMailServices} from '../../services/sendmail.services'

export class Contacts extends React.Component {

     constructor(props) {
    super(props);
    this.state = {
      send: false,
        model: {
            name: '',
            telefono: '',
            email: '',
            mensaje: ''
        }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   handleChange(key, event) {
        const value = event.target.value;
        const path = key.split('.');
        const model = this.state.model;
        let item = model;
        for (let i = 0; i < path.length - 1; i++)	{
            item = item[path[i]];
        }
        item[path[path.length - 1]] = value;

        this.setState({model})
    }

  handleSubmit(event) {
      const {model, send} = this.state;
      const newModel = {

            name: '',
            telefono: '',
            empresa: '',
            email: '',
            mensaje: ''
      }
      const service = new sendMailServices();

      service.sendMailServices(model)
     .then(response =>{
        console.log(model)
        console.log(response, 'envio contacto fractal químicos');
        this.setState({send: true, model: newModel}, () => {
          this.changeMessage();
        });
    return response;
  })
  .catch(error => {
    alert('Error al enviar mensaje, inténtelo nuevamente.')
    console.log(error);
  });
      console.log(model)
        event.preventDefault();
  }
  changeMessage() {
   setTimeout(() => {
     return this.setState({send: false})
    }, 4000);
  }
  render() {
    const {send} = this.state;
    return (
       <section id="contact" className="">
          <div className="highlightBox">
            <div className="boxBg page-block-big">
              <div className="container wow fadeIn" data-wow-offset="50" data-wow-delay="1s">
                  <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 contact">
                        
                        <div className="contactInfo BGlight">
                            <div className="upper">
                              <p className="no-border"><i className="fa fa-clock-o"></i> <strong>Encuéntranos:</strong><br/> Mariscal Luzurriaga 341<br/>Jesús María (Lima 11)<br/><strong>RUC:20602077811</strong> <br/>  Lunes – Viernes<br/>9:00am - 6:00pm</p>
                              <p><i className="fa fa-phone"></i> <strong>Llámanos: </strong><br/>(+51) 973569496 <br/> (+51) 997 087 771 <br/> (+01) 423 1669
                              </p>
                            </div>
                            <div className="lower">
                              <p><i className="fa fa-envelope-o"></i><strong>Escríbenos a: </strong>fractal@fractalquimicos.com<br/>informes@fractalquimicos.pe</p>
                            </div>
                        </div>
                        
                        <div className="contactForm">
                          <form id="contact_form">
                            <div className="form-row">
                              <input type="text" className="form-control" id="name" name="model-name" value={this.state.model.name} onChange={this.handleChange.bind(this, 'name')} placeholder="Nombres y apellidos" />
                            </div>
                            <div className="form-row">
                              <input type="tel" className="form-control" id="phone" value={this.state.model.telefono} name="model-telefono" onChange={this.handleChange.bind(this, 'telefono')} placeholder="Teléfonos." />
                            </div>
                            <div className="form-row">
                              <input type="tel" className="form-control" id="empresa" value={this.state.model.empresa} name="model-empresa" onChange={this.handleChange.bind(this, 'empresa')} placeholder="Empresa o institución" />
                            </div>
                            <div className="form-row">
                              <input type="email" className="form-control" id="email" value={this.state.model.email} name="model-email" onChange={this.handleChange.bind(this, 'email')} placeholder="Correo electrónico" />
                            </div>
                            <div className="form-row">
                              <textarea cols="60" rows="3" id="mensaje" name="model-mensaje" value={this.state.model.mensaje} className="form-control" onChange={this.handleChange.bind(this, 'mensaje')} placeholder="¿En que podemos ayudarte?"></textarea>
                            </div>
                            <div className="form-row">
                              <input type="text" id="security" name="security" className="form-control hide" value="" />
                              <input type="button" value={(send) ? 'Mensaje enviado' : 'Enviar'} className="btn btn-dark btn-lg col-12" onClick={this.handleSubmit} style={{width: '100%'}} id="submit" name="submit" />
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