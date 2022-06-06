//async demo
console.log("before");

getUser(1)
  .then((User) => getRes(User.username))
  .then((repos) => getComments(repos[0]))
  .catch((err) => console.log(err));

console.log("after");

function getUser(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve({ id, username: "akshay" });
    }, 2000);
  });
}

function getRes(username) {
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}
function getComments(repos) {
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(["comment1", "comment2", "comment3"]);
    }, 2000);
  });
}
