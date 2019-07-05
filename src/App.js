import React from 'react';
import './App.css';
import VoteOption from "./VoteOption";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trebuchetVotes: 0,
      givenVote: 'none'
    };
  }

  voteForTrebuchet() {
    this.setState({
      trebuchetVotes: this.state.trebuchetVotes + 1,
      givenVote: 'trebuchet'
    })
  }

  voteForCatapult() {
    if (this.state.givenVote === 'none') {
      this.setState({
        trebuchetVotes: this.state.trebuchetVotes + 1,
        givenVote: 'catapult'
      })
    }
  }

  componentDidMount() {
    this.setState({trebuchetVotes: 5});
  }

  render() {
    return (
      <div className="App">
        <header className="question-header">
          Which one of these is, in your opinion, the superior siege weapon?
        </header>
        <section className="votes-section">
          <VoteOption
            name="Catapult"
            imageSrc="/images/catapult.jpg"
            votes={0}
            onVote={() => this.voteForCatapult()}
          />
          <VoteOption
            name="Trebuchet"
            imageSrc="/images/trebuchet.jpg"
            votes={this.state.trebuchetVotes}
            onVote={() => this.voteForTrebuchet()}
          />
        </section>
        <section className="after-vote">
          <p style={{ visibility: this.state.givenVote === 'none' ? 'hidden' : ''}}>
            Thank you for your vote!
          </p>
          <p className={`information${this.state.givenVote === 'catapult' ? ' error' : ''}`}>
            {this.state.givenVote === 'catapult' && "Error: We couldn't count your vote because you choose the wrong answer. Sorry."}
            {this.state.givenVote === 'trebuchet' && 'Fun fact: Did you know that trebuchet can launch a 90kg projectile over 300m?'}
          </p>
        </section>
        <section className='ad-section' />
      </div>
    );
  }
}

export default App;