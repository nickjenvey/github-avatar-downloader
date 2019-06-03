var request = require("request");
var fs = require("fs");
var GITHUB_TOKEN = require("./secrets").GITHUB_TOKEN;

console.log("Welcome to the GitHub Avatar Downloader!");

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      "User-Agent": "request",
      "Authorization": "token " + GITHUB_TOKEN
    }
  };

  request(options, function(err, res, body) {
    cb(err, JSON.parse(body));
  });
}

var repoOwner = process.argv[2];
var repoName = process.argv[3];

getRepoContributors(repoOwner, repoName, function(err, result) {
  if (process.argv.length !== 4) {
    console.log("Error! Not the specified amount of arguments given.");
  } else {
    result.forEach(function(user) {
      downloadImageByURL(user.avatar_url, "avatars/" + user.login + ".jpg");
      console.log("Downloading...")
    })
    console.log("Successfully downloaded the GitHub Avatars.")
  }
});

function downloadImageByURL(url, filePath) {
  request.get(url)
    .pipe(fs.createWriteStream(filePath));
}