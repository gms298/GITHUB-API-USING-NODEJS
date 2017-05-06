var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

var token = "token " + process.env.GITTOKEN; // Save Git token as ENV variable
var userId = ""; // USER ID here
var repoName = ""; // Repo name here

var urlRoot = "https://api.github.com";

enableWiki(userId,repoName);

function enableWiki(owner,repo)
{
    var options = {
        url: urlRoot + "/repos/" + owner + "/" + repo,
        method: 'PATCH',
        headers: {
                    "content-type": "application/json",
                    "Authorization": token
                },
        json: 
                {
                    "name": repo,
                    "has_wiki": true
                }
            };

    request(options, function (error, response, body) 
    {
        var obj = JSON.parse(JSON.stringify(body));
        console.log( obj );

    });

}