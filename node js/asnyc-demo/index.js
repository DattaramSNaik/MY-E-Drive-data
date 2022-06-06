//async demo
console.log("before");
//callback hell
getUser(1, function (User) {
  console.log(User);
  getRes(User.username, (repos) => {
    console.log(repos);
    getComments(repos[0], function (comments) {
      console.log(comments);
    });
  });
});

console.log("after");

function getUser(id, cb) {
  setTimeout(() => {
    //console.log({ id, username: "akshay" });
    cb({ id, username: "akshay" });
  }, 2000);
}
function getRes(username, cb) {
  setTimeout(() => {
    //console.log(["repo1", "repo2", "repo3"]);
    cb(["repo1", "repo2", "repo3"]);
  }, 2000);
}
function getComments(repos, cb) {
  setTimeout(() => {
    //console.log(["comment1", "comment2", "comment3"]);
    cb(["comment1", "comment2", "comment3"]);
  }, 2000);
}
