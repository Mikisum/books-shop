import React from 'react'

import './book-list-item.scss'

const BookListItem = ({ book }) => {
  const { title, price, image } = book
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={image} alt="cover"/>
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-price">{price}</div>
        <button type="button" className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  )
}

export default BookListItem