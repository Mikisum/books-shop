import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../../actions';
import BookListItem from '../book-list-item'
import { withBookstoreService } from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'

import './book-list.scss'

const BookList = ({ books }) => {
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

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks()
  }

  render () {
    const {  books, loading, error } = this.props
    
    if (loading) {
      return <Spinner />
    }
    
    if (error) {
      return <ErrorIndicator />
    }

    return <BookList books={books}/>
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error }
}

const mapDispatchToProps = (dispatch, bookstoreService) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  }
}

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
)