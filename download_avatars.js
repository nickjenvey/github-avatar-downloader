var request = require("request");
var fs = require("fs");
// var GITHUB_TOKEN = require("./secrets").GITHUB_TOKEN;

// console.log("Welcome to the GitHub Avatar Downloader!");

// function getRepoContributors(repoOwner, repoName, cb) {
//   var options = {
//     url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
//     headers: {
//       "User-Agent": "request",
//       "Authorization": "token " + GITHUB_TOKEN
//     }
//   };

//   request(options, function(err, res, body) {
//     cb(err, JSON.parse(body));
//   });
// }

// getRepoContributors("jquery", "jquery", function(err, result) {
//   console.log("Errors:", err);
//   result.forEach(function(user) {
//     console.log(user.avatar_url);
//   })
// });

function downloadImageByURL(url, filePath) {
  request.get("https://avatars2.githubusercontent.com/u/2741?v=3&s=466")
    .pipe(fs.createWriteStream("./avatars/kvirani.jpg"));
}

downloadImageByURL();