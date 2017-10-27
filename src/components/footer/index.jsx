import * as React from 'react';

export class Footer extends React.Component {
  render() {
    return (
      <footer id="copyright" className="page-block-small wow fadeIn BGprime" data-wow-offset="10" data-wow-delay="10ms">
        <div className="container text-center"> 
          <div className="row">
          
            <p>fractal.pe &copy; 2017. Todo los derechos reservados. Realizado por <a href="#" target="_blank"><strong>LiniUX</strong></a></p>
            
          </div>
        </div>
      </footer>
    )
  }
}