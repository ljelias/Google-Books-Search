import React from "react";

// this exports the card component to display each book result

const styles = {
  bookdiv: {
    padding: "1px 18px",
    marginBottom: "15px"
  },
  div6: {
    fontSize: "1.3em"
  },
  btn2: {
    marginLeft: "4px"
  },
  bookcover: {
    float: "left",
    maxHeight: "127px",
    marginRight: "18px"
  }
}

export function BookCard(books) {
  return (
    {this.state.books.map(book => (
      <div className="w3-card w3-light-gray" key={book.id} style={styles.bookdiv} >
        <div className="w3-bar">
            <div className="w3-bar-item" style={styles.div6} >{book.title}</div>
            <div className="w3-bar-item" style={styles.div6} >||</div>
            <div className="w3-bar-item" style={styles.div6} >{book.author}</div>
            <button className="w3-bar-item w3-button w3-ripple w3-right w3-2018-chili-oil" style={styles.btn2} >Delete</button>
            <button className="w3-bar-item w3-button w3-ripple w3-right w3-blue" style={styles.btn2} >Save</button>
            <a href={book.link} className="w3-bar-item w3-button w3-ripple w3-right w3-2018-spring-crocus" style={styles.btn2} >View</a>
        </div>
        <div className="w3-panel">
          <img src={book.imageUrl} style={styles.bookcover} alt="book cover" /> 
          <p>{book.summary}</p>
        </div>
      </div>
  ))}
  );
}

