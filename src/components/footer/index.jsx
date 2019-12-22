import * as React from 'react';
import './index.css'

export class Footer extends React.Component {
  render() {
    return (
      <footer id="copyright" className="wow fadeIn BGprime" data-wow-offset="10" data-wow-delay="10ms">
        <div className="container text-center"> 
          <div className="row">
          
            <p style={{margin: '15px 15px 3px', fontSize: 13}}>fractalquimicos.pe &copy; 2017-2018. Todo los derechos reservados. Realizado por <a href="mailto:llanca872@gmail.com" target="_blank"><strong style={{color: 'white'}}>E.Llanca</strong></a></p>
            
          </div>
        </div>
      </footer>
    )
  }
}