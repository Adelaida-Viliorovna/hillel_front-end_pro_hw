import React, { Component } from "react";
import './App.css';

class EmojiVoting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: {
        "😊": 0,
        "😂": 0,
        "😍": 0,
        "😢": 0,
        "😎": 0,
      },
      winner: null,
    };
  }

  componentDidMount() {
    const savedVotes = JSON.parse(localStorage.getItem("votes"));
    if (savedVotes) {
      this.setState({ emojis: savedVotes });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.emojis !== this.state.emojis) {
      localStorage.setItem("votes", JSON.stringify(this.state.emojis));
    }
  }

  handleVote = (emoji) => {
    const updatedEmojis = { ...this.state.emojis, [emoji]: this.state.emojis[emoji] + 1 };
    this.setState({ emojis: updatedEmojis });
  };

  handleShowResults = () => {
    const winner = Object.keys(this.state.emojis).reduce((a, b) =>
      this.state.emojis[a] > this.state.emojis[b] ? a : b
    );
    this.setState({ winner });
  };

  handleClearResults = () => {
    const resetEmojis = Object.keys(this.state.emojis).reduce((acc, emoji) => {
      acc[emoji] = 0;
      return acc;
    }, {});
    this.setState({ emojis: resetEmojis, winner: null });
    localStorage.removeItem("votes");
  };

  render() {
    const { emojis, winner } = this.state;
    return (
      <div>
        <h2>Голосування за смайлик</h2>
        <div className="emoji-container">
          {Object.keys(emojis).map((emoji) => (
            <div className="emoji-card" key={emoji}>
              <button onClick={() => this.handleVote(emoji)}>
                {emoji}
              </button>
              <p>{emojis[emoji]}</p>
            </div>
          ))}
        </div>
        <div className="btn">
        <button onClick={this.handleShowResults}>Показати результати</button>
        <button onClick={this.handleClearResults}>Очистити результати</button>
        </div>
        {winner && <h3>Переможець: {winner}</h3>}
      </div>
    );
  }
}

export default EmojiVoting;
