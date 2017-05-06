var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

var token = "token " + process.env.GITTOKEN; // Save Git token as ENV variable
var userId = ""; // USER ID here
var repoName = ""; // Repo name here

var urlRoot = "https://api.github.com";

createNewRepo(repoName);

function createNewRepo(repo)
{
    var options = {
                    url: urlRoot + "/user/repos",
                    method: 'POST',
                    headers: {
                                "content-type": "application/json",
                                "Authorization": token
                            },
                    json:   {
                            "name": repo,
                            "description": "Demo Repo",
                            "homepage": "https://api.github.com",
                            "private": true,
                            "has_issues": true,
                            "has_wiki": false,
                            "has_downloads": true       
                            }
                };

    request(options, function (error, response, body) 
    {
        var obj = JSON.parse(JSON.stringify(body));
        console.log( obj );
    });

}
