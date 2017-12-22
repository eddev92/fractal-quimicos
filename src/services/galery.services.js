import axios from 'axios';

export class GaleryServices {

    getGalery() {
      return axios.get('mocks/galery.json')
            .then(res => {
                return res.data
            })
    }
     getRecientes() {
      return axios.get('mocks/recientes.json')
            .then(res => {
                return res.data
            })
    }
}