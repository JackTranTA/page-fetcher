const request = require('request'); // use the request library to make the HTTP request
const fs = require('fs'); // Use Node's fs (file system) module to write the file
const url = process.argv[2]; // command line 1st argument
const path = process.argv[3]; // command line 2nd argument

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  if (response.statusCode === 200) {
    fs.writeFile(path, body, 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
      //file write successful
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    });
  }
});