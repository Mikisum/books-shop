import React, { Component } from 'react'
import { connect } from 'react-redux'
import { booksLoaded } from '../../actions';
import BookListItem from '../book-list-item'
import { withBookstoreService } from '../hoc';
import Spinner from '../spinner';

import './book-list.scss'

class BookList extends Component {

  componentDidMount() {
    const { bookstoreService } = this.props;

    bookstoreService.getBooks()
      .then((data) => {
        this.props.booksLoaded(data)
      })
  }
  render () {
    const {  books, loading } = this.props
    
    if (loading) {
      return <Spinner />
    }
    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key = {book.isbn13}><BookListItem book = {book} /></li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = ({ books, loading }) => {
  return { books, loading }
}

const mapDispatchToProps = {
  booksLoaded
}


export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
)