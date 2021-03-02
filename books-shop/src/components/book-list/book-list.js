import React, { Component } from 'react'
import { connect } from 'react-redux'
import { booksLoaded, booksRequested, booksError } from '../../actions';
import BookListItem from '../book-list-item'
import { withBookstoreService } from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'

import './book-list.scss'

class BookList extends Component {

  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested, booksError } = this.props;
    booksRequested()

    bookstoreService.getBooks()
      .then((data) => booksLoaded(data))
      .catch((err) => booksError(err))
  }

  render () {
    const {  books, loading, error } = this.props
    
    if (loading) {
      return <Spinner />
    }
    
    if (error) {
      return <ErrorIndicator />
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

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error }
}

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError
}


export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
)