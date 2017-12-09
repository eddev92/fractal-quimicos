import axios from 'axios';

export class ServicesHomeServices {

    getServices() {
      return axios.get('mocks/servicios.json')
            .then(res => {
                return res.data
            })
    }
}