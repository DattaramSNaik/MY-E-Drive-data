//async demo
console.log("before");
//callback hell
async function displayComments() {
  try {
    const user = await getUser(1);
    const repos = await getRes(user.username);
    const comments = await getComments(repos[0]);
    console.log(comments);
  } catch (error) {
    console.log(error.message);
  }
}
displayComments();
console.log("after");

function getUser(id, cb) {
  setTimeout(() => {
    console.log({ id, username: "akshay" });
    cb({ id, username: "akshay" });
  }, 2000);
}
function getRes(username, cb) {
  setTimeout(() => {
    console.log(["repo1", "repo2", "repo3"]);
    cb(["repo1", "repo2", "repo3"]);
  }, 2000);
}
function getComments(repos, cb) {
  setTimeout(() => {
    //console.log(["comment1", "comment2", "comment3"]);
    cb(["comment1", "comment2", "comment3"]);
  }, 2000);
}
