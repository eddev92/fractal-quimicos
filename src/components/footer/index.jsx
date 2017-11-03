import * as React from 'react';

export class Footer extends React.Component {
  render() {
    return (
      <footer id="copyright" className="wow fadeIn BGprime" data-wow-offset="10" data-wow-delay="10ms">
        <div className="container text-center"> 
          <div className="row">
          
            <p style={{margin: 5, fontSize: 13}}>fractal.pe &copy; 2017. Todo los derechos reservados. Realizado por <a target="_blank"><strong>LINIUX</strong></a></p>
            
          </div>
        </div>
      </footer>
    )
  }
}