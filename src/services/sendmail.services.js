
import * as Axios from 'axios';

export class sendMailServices {

    sendMailServices(params) {
        this.Axios.get('services/sendMail.php', params)
            .then(res => {
                console.log(res, 'envio')
            })
    }
}