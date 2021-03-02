import axios from "axios";

export default class BookstoreService {
  async getBooks() {
    const url = '/search/react';
    const res = await axios.get(url);
    const books = res.data.books;
    console.log(books);
    return books
  }
}     