var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

var token = "token " + process.env.GITTOKEN; // Save Git token as ENV variable
var userId = ""; // USER ID here
var repoName = ""; // Repo name here

var urlRoot = "https://api.github.com";

listBranches(userId,repoName);

function listBranches(owner,repo)
{
    var options = {
                    url: urlRoot + '/repos/' + owner + '/' + repo + '/branches',
                    method: 'GET',
                    headers: {
                                "User-Agent": "EnableIssues",
                                "content-type": "application/json",
                                "Authorization": token
                            }
                };

    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function (error, response, body) 
    {
        var obj = JSON.parse(body);
        console.log("Listing Branches in " + repo);
        for( var i = 0; i < obj.length; i++ )
        {
            var name = obj[i].name;
            console.log( name );
        }
    });
}