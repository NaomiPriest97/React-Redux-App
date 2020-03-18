import axios from "axios";

// ACTION CREATOR


export const getJoke = () => {
  return dispatch => {
    dispatch({ type: "LOADING" });
    console.log("are we getting it?");
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then(res => {
        console.log(res.data);
        dispatch({ type: "NEW_JOKE", payload: (res.data.setup) +  ( res.data.punchline) });
      })
      .catch(err => console.log(err));
  };
}; 
