import axios from 'axios';

export class ArticlesServices {

    getArticles() {
      return axios.get('mocks/datos.json')
            .then(res => {
                return res.data
            })
    }
}