const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request.get(URL, (error, response, body) => {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received

    if (error) {
      // This means if error !== null (truthy and falsy values)
      return callback(error, null);
      //process.exit();
    }

    const breedsArr = JSON.parse(body);

    if (breedsArr.length !== 0) {
      let breedObj = breedsArr[0];
      let description = breedObj.description;
      callback(null, description);
      //process.exit();
    } else {
      callback("This file cannot be found");
      //process.exit();
    }
  });
};

module.exports = { fetchBreedDescription };
