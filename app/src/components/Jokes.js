import React from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../actions/actions';

function Jokes(props){
    return (
        <div>
          {props.loading ? <h1>Loading</h1> : <h1>{props.joke}</h1>}
          <button
            onClick={() => {
              props.getJoke();
            }}
          >
            Get Another Rando Joke
          </button>
        </div>
    );
}
export default connect(
    state => {
      return { loading: state.loading, joke: state.joke };
    },
    { getJoke }
  )(Jokes);

// export default connect( state => {
//     return {
//       title: state.title,
//       editing: state.editing,
//       loading: state.loading
//     };
//   },{})(Jokes);