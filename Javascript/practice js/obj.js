var user = {
  firstName: "Akshay",
  lastName: "Naik",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },

  getInfo: function () {
    this.courseLength = this.courseList.length;
    console.table(user);
    // return `${this.firstName}  ${this.lastName} ${this.role} ${this.loginCount} ${this.facebookSignedIn} ${this.courseList.length}`
  },
};

// console.log(user.firstName);
// console.log(user.getCourseCount());
user.buyCourse("Node JS Course");
user.buyCourse("Angular Course");
// console.log(user.getCourseCount());

user.getInfo();
// console.table(user);
// let b= Object.values(user);
// console.log(b);
// console.log(b.courseList.length);
