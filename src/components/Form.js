import React, { Component } from 'react';
import Car from './Car';

class Form extends Component {
  state = {
    username: '',
    color: '',
    colors: ['', 'Green', 'Blue', 'Red', 'Yellow', 'Black', 'Pink'],
    comment: '',
  };

  handlePseudo = (e) => {
    this.setState({ username: e.target.value });
  };

  handleColor = (event) => {
    this.setState({ color: event.target.value });
  };

  handleComment = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(
      `Username: ${this.state.username} , Color: ${this.state.color} , Comment: ${this.state.comment}`
    );
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Car color={this.state.color} height="400" />
        <h2> Commentaire </h2>
        <textarea
          name="textarea"
          cols="30"
          rows="10"
          placeholder="Tap here your comment .."
          onChange={this.handleComment}
        ></textarea>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="pseudo">Pseudo : </label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handlePseudo}
          />
          <br />

          <label htmlFor="color">Color: </label>
          <select value={this.state.color} onChange={this.handleColor}>
            {this.state.colors.map((color, index) => {
              return (
                <option key={index} value={color.toLowerCase()}>
                  {color}
                </option>
              );
            })}
          </select>
          <hr />
          <input type="submit" />
        </form>

        <br />
      </div>
    );
  }
}

export default Form;
