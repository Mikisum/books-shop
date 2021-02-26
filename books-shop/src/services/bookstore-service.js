import axios from "axios";

export default class BookstoreService {
  getBooks() {
    const url = '/search/mongodb';
    return axios.get(url)
      .then(res => {
        const photos = res.data
        console.log(photos)
     })
  }
}     