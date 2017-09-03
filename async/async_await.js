const fetch = require("node-fetch");

var andra = "karmaHater";

// const showGitHubUser = async handle => {
//     const url = "https://api.github.com/users/" + handle;
//     const res = await fetch(url);
//     return await res.json();
// };

class GitHibApi {
    async fetchUser(handle) {
        const url = "https://api.github.com/users/" + handle;
        const res = await fetch(url);
        const body = await res.json();
        
        if (res.status !== 200) {
            throw Error(body.message);
        }

        return body;
    }
}

const clinet = new GitHibApi();

clinet
    .fetchUser(andra)
    .then(user => console.log(user.name))
    .catch(err => console.log(err));
