const fetch = require("node-fetch");

var andra = "karmaHater";

// const showGitHubUser = async handle => {
//     const url = "https://api.github.com/users/" + handle;
//     const res = await fetch(url);
//     return await res.json();
// };

// class GitHibApi {
//     async fetchUser(handle) {
//         const url = "https://api.github.com/users/" + handle;
//         const res = await fetch(url);
//         const body = await res.json();
//
//         if (res.status !== 200) {
//             throw Error(body.message);
//         }
//
//         return body;
//     }
// }
//
// const clinet = new GitHibApi();
//
// clinet
//     .fetchUser(andra)
//     .then(user => console.log(user.name))
//     .catch(err => console.log(err));

// MAKING MULTIPLE CALLS

const fetchFromGitHub = async endpoint => {
    const url = `https://api.github.com${endpoint}`;
    const res = await fetch(url);
    return await res.json();
};

// the second call here waits for the first one and can
// cause performance problems

// const showUserAndRepos = async handle => {
//     const userPromise = fetchFromGitHub(`/users/${handle}`);
//     const reposPromise = fetchFromGitHub(`/users/${handle}/repos`);
//
//     // lets the promises run without waiting for one another
//     const user = await userPromise;
//     const repos = await reposPromise;
//
//     console.log(user.name);
//     console.log(`${repos.length}`);
// };

// const showUserAndRepos = async handle => {
//     const [user, repos] = await Promise.all([
//         fetchFromGitHub(`/users/${handle}`),
//         fetchFromGitHub(`/users/${handle}/repos`)
//     ]);
//
//     console.log(user.name);
//     console.log(`${repos.length}`);
// };
//
// showUserAndRepos(andra);
