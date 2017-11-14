import axios from 'axios';

export class HomeServices {

    getSliders() {
      return axios.get('mocks/sliders.json')
            .then(res => {
                return res.data
            })
    }
}