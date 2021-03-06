
const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUESTED'
  }
}

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  }
}


const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  }
}

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  }
}

const allBooksDeletedFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_DELETED_FROM_CART',
    payload: bookId
  }
}

const bookDeletedFromCart = (bookId) => {
  return {
    type: 'BOOK_DELETED_FROM_CART',
    payload: bookId
  }
}

const changeSearchWord = (searchWord) => {
  return {
    type: 'CHANGE_SEARCH_WORD',
    payload: searchWord
  }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested())
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)))
}

export {
  fetchBooks,
  bookAddedToCart,
  allBooksDeletedFromCart,
  bookDeletedFromCart,
  changeSearchWord

}