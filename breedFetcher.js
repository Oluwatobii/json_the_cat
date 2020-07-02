const request = require("request");
//console.log(Object.keys(request));

let args = process.argv.slice(2); // is an array [];

const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + args[0];

request.get(URL, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received

  if (error) {
    // This means if error !== null (truthy and falsy values)
    console.log("The website is broken");
    process.exit();
  }

  const breedsArr = JSON.parse(body);

  if (breedsArr.length !== 0) {
    let breedObj = breedsArr[0];
    let des = breedObj.description;
    console.log(des);
    process.exit();
  } else {
    console.log("This file cannot be found");
    process.exit();
  }
});
