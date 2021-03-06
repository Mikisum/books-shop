import React from 'react'
import BookList from '../book-list/book-list';
import SearchForm from '../searchForm/searchForm';
import ShoppingCartTable from '../shopping-cart-table';

const HomePage = () => {
  return (
    <div>
      {/* <SearchForm /> */}
      <BookList />
      <ShoppingCartTable />
    </div>
    
  )
}

export default HomePage;