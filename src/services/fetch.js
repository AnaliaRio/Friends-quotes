const getQuotes = () => {
  return fetch("https://friends-quotes-api.herokuapp.com/quotes")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default getQuotes;
