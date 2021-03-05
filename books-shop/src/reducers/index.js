import updateBookList from './book-list'
import updateShoppingcart from './shopping-cart'

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingcart(state, action)
  }
}

export default reducer