# GITHUB API - USING NODE JS

Clone this repository and use `npm install` to install all dependencies.

## <a name="rest"></a>REST API Operations in GITHUB

### <a name="repo"></a>Creating a new repo

I will be creating a new repository called *DEMO* in Github. This is accomplished using the `POST` request.

**Three points to note:**

1. *DEMO* is a private repo.
2. **Wiki Support** is *disabled* in this repo. 
3. The personal access token used to access my Github account is stored in an environment variable named `GITTOKEN`.

#### Code

File Name: createRepo.js

**Execute** using *Terminal* in OS X :

`node createRepo.js`

### <a name="edit"></a>Editing a repo to enable wiki support

Next, I will be editing the *DEMO* repo to enable wiki support. This is accomplished using the `PATCH` request and to set the `has_wiki` parameter to `true`.

#### Code

File Name: enableWiki.js

**Execute** the code using *Terminal* in OS X :

`node enableWiki.js`

### <a name="list"></a>Listing branches in a given repo under an owner

#### Code

File Name: listBranch.js

**Executing** the code using *Terminal* in OS X :

`node listBranch.js`

### <a name="issue"></a>Creating an issue for an existing repo

I will be reporting a bug on my *DEMO* repo by creating an issue. This is accomplished using the `POST` request.

#### Code

File Name: issue.js

**Executing** the code using *Terminal* in OS X :

`node issue.js`
