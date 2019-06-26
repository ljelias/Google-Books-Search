import React from "react";

// this exports the Input and FormBtn components

  const styles = {
    searchbox: {
        width: "70%",
        float: "left",
        lineHeight: "2.3em"
        },
    searchbtn: {
        marginTop: "0",
        marginBottom: "21px",
        marginLeft: "21px"
    }
  };

export function Input(props) {
  return (
    <input className="w3-hover-border-blue" style={styles.searchbox} name="search" type="text" placeholder="-> Enter a book title, author, or keyword" {...props}/> 
    );
}

export function FormBtn(props) {
  return (
    <button className="w3-btn w3-ripple w3-blue-gray w3-border w3-border-indigo w3-round" style={styles.searchbtn} {...props} ><b>Search!</b></button>
  );
}