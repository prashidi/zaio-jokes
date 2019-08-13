import React, { Component } from "react";
import axios from "axios";

export default class Joke extends Component {
  state = {
    joke: null
  };
  handleClick = e => {
    e.preventDefault();

    const config = {
      headers: {
        Accept: "application/json"
      }
    };
    axios
      .get("https://icanhazdadjoke.com/", config)
      .then(res => {
        this.setState({ joke: res.data.joke });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
        <div className="home">
          <div>
          <h1>{this.state.joke}</h1>
          </div>
          <div className="joke">
          <button
            onClick={this.handleClick}
            type="button"
            className="btn btn-info btn-circle btn-xl"
          >
            <i className="far fa-play-circle" />
          </button>
          </div>
        </div>
    );
  }
}
