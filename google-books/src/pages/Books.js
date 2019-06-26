import React, { Component } from "react";
import {Input, FormBtn} from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
//import SavedList from "../components/SavedList";

  const styles = {
    div3: {
      width: "90%",
      margin: "16px auto",
      borderRadius: "6px"
      }
  }
  

class Books extends Component {
  state = {
      books: [],
      title: "",
      author: "",
      imageUrl: "",
      summary: "",
      link: ""
  };

  componentDidMount() {
      this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
        .then(res => this.setState(
            { books: res.data, title: "", author: "", imageUrl: "", summary: "", link: "" }))
        .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
        API.saveBook({
            title: this.state.title,
            author: this.state.author,
            imageUrl: this.state.imageUrl,
            summary: this.state.summary,
            link: this.state.link
        })
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
    }
  };

  render() {
    return (
        <Wrapper>
            <div class="w3-panel w3-border w3-border-indigo w3-card" style={styles.div3} >
                <h2>Book Search</h2>
            <form>
                {Input}{FormBtn}
            </form>
            </div> 

            <div class="w3-panel w3-border w3-border-indigo" style={styles.div3} >
                <h2>Results</h2>
                <hr class="w3-border-indigo w3-card-4" />
                {SearchResults}
            </div>
        </Wrapper>
      );
  }
}

export default Books;


