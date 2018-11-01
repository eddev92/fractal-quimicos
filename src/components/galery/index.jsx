import * as React from 'react';
import './index.css';
import {GaleryServices} from './../../services/galery.services';
import ModalGaleryComponent from './../../tools/modal-galery'

export class Galery extends React.Component {

    state = {
        galeryItems : [],
        open: false,
        recientes: []
    };

    componentDidMount(){
        this.loadGaleryItems();
        this.loadRecientes();
        // this.loadModals();
    }

  loadGaleryItems = () => {
      const service = new GaleryServices();

      service.getGalery()
        .then(res  => {
            console.log(res)
            this.setState({ galeryItems: res })
        },
        error => {
            console.log(error)
        })
  }

  loadRecientes = () => {
      const service = new GaleryServices();

      service.getRecientes()
        .then(res  => {
            console.log(res)
            this.setState({ recientes: res })
        },
        error => {
            console.log(error)
        })
  }

  renderGaleryItems(items = []) {
    const result = items.map(item => {
        return (
            <div className="galleryImg col-md-3 col-sm-6" style={{height: 'auto'}} >
                <img className="img-responsive" src={item.url || 'Cargando...'} alt="1"/>
                <a data-toggle="modal" data-target={`#${item.targetId}`} title="" onClick={this.loadModals}><span><i className="material-icons">{item.font}</i></span></a>
        </div>
        )
    })
    return result.reverse();
  }

  loadModals = () => {
      const {open} = this.state;
      this.setState({ open: !open} , () => {
        this.renderGaleryItems(this.state.galeryItems);
      })

  }

  renderModalGalery(items) {
      items.map(item => {
        return (
            <ModalGaleryComponent id={item.targetId} url={item.url} title={item.title} subtitle={item.subtitle} >
                    <div className="card">
                        <img className="img-fluid" src={item.url || 'Cargando...'} alt="Estereoquimica"/>

                        <div className="card-body">
                            <h4 className="card-title">{item.title}<br/> <span>{`[ ${item.subtitle} ]`}</span></h4>
                        </div>
                    </div>
                </ModalGaleryComponent>
        )  
    }) 
  }

  render() {
      const {recientes} = this.state;

    return (
     <section id="about" className="BGlight">
            <div className="row">
                <div className="col-md-12 aboutGallery wow fadeIn no-padding" data-wow-offset="75" data-wow-delay="1.75s" style={{overflow: 'hidden', backgroundColor: '#0099cc'}}>
                
                {recientes && this.renderGaleryItems(recientes)}
               
                </div>
            </div>
             {recientes.map(item => {
                        return(
                        <ModalGaleryComponent id={item.targetId} url={item.url} title={item.title} subtitle={item.subtitle} >
                            <div className="card">
                                <img className="img-fluid" src={item.url} alt="Equipo Fractal Químicos"/>

                                <div className="card-body">
                                    <h4 className="card-title itemCard">{item.title}<br/>
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
                                     <span>{`[ ${item.subtitle} ]`}</span></h4>
                                </div>
                            </div>
                        </ModalGaleryComponent>
                )})}
        </section>
    )
  }
}
