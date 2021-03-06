import React from "react";
import ShelfChanger from "./ShelfChanger";

class Book extends React.Component {
  render() {
    const { book } = this.props;
    const bookImage = book.imageLinks ? book.imageLinks.thumbnail : "";
    const authors = book.authors ? book.authors.join(", ") : "";

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${bookImage})`
            }}
          />
          <ShelfChanger
            book={book}
            updateBookShelf={this.props.updateBookShelf}
            shelfForBook={this.props.shelfForBook}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}

export default Book;
