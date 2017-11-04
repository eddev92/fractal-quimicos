import axios from 'axios';

export class sendMailServices {

    sendMailServices(params) {
       return axios.post('js/sendMail/sendMail.php', params)
            .then(res => {
                console.log(res, 'envio contacto')
            })
    }
    sendCotizacion(params) {
       return axios.post('js/sendMail/cotizacion.php', params)
            .then(res => {
                console.log(res, 'envio cotizacion')
            })
    }
}