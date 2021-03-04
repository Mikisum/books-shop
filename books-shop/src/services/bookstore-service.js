import axios from "axios";

export default class BookstoreService {

  async getBooks() {
    const url = '/search/react';
    const res = await axios.get(url);
    const books = res.data.books;
    console.log(books);
    return res.data.books.map(this._transformBook)
  }

  _transformBook = (book) => {
    return {
      image: book.image,
      id: book.isbn13,
      price: +book.price.replace(/[\s,$]/g, ''),
      subtitle: book.subtitle,
      title: book.title,
      url: book.url
    }
  }

}     