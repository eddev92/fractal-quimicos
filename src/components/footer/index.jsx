import * as React from 'react';

export class Footer extends React.Component {
  render() {
    return (
      <footer id="copyright" className="page-block-small wow fadeIn BGprime" data-wow-offset="10" data-wow-delay="10ms">
        <div className="container text-center"> 
          <div className="row">
          
            <p>MiMarinera.com &copy; 2015. Todo los derechos reservados. Realizado por <a href="http://tinkperu.com/" target="_blank"><strong>TinkPeru</strong></a></p>
            
          </div>
        </div>
      </footer>
    )
  }
}