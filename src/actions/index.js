import axios from "axios";

export const getMovie = movie => {
  console.log("%cInside getMovie:", "color: green; font-weight: bold;", movie);
  return {
    type: "GET_RANDOM_MOVIE",
    payload: movie
  };
};

export const getRandomMovie = () => {
  return dispatch => {
    return axios
      .get("https://d3f924f6.ngrok.io/api/v1/movies/random")
      .then(response => {
        // console.log(
        //   "%cInside getRandomMovie:",
        //   "color: green; font-weight: bold;",
        //   getMovie(response.data)
        // );
        dispatch(getMovie(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
